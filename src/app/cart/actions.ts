"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetDocument,
	CartRemoveItemDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	const cartCookie = cookies().get("cartId")?.value as string;
	revalidateTag("cart");
	const { changeItemQuantity } = await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			cartId: cartCookie,
			productId: itemId,
			quantity,
		},
		cache: "no-store",
		next: { tags: ["cart"] },
	});
	return changeItemQuantity;
};

export const removeItem = async (productId: string, variantId: string) => {
	const cartCookie = cookies().get("cartId")?.value as string;
	const { removeFromCart } = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			cartId: cartCookie,
			productId,
			variantId,
		},
		cache: "no-store",
	});
	return removeFromCart;
};

export const createCart = async () => {
	const { createCart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
	});
	return createCart;
};

export const addToCartAction = async (productId: string, variantId: string, quantity?: number) => {
	const cart = await getOrCreateCart();
	let cartId = cart?.id;
	if (!cart) {
		const cart = await getCart();
		cartId = cart?.id;
	}

	await executeGraphql({
		query: CartAddItemDocument,
		cache: "no-store",
		variables: {
			cartId: cartId as string,
			productId,
			variantId,
			quantity,
		},
	}).finally(() => {
		revalidatePath("/cart");
		redirect("/cart");
	});
};

export const getCart = async () => {
	const cartCookie = cookies().get("cartId")?.value;
	if (!cartCookie) {
		return null;
	}
	const { cart } = await executeGraphql({
		query: CartGetDocument,
		variables: {
			cartId: cartCookie,
		},
		cache: "no-store",
	});

	return cart;
};

export const getOrCreateCart = async () => {
	const cartCookie = cookies().get("cartId")?.value as string;
	const cartCreate = async () => {
		const cart = await createCart();
		cookies().set("cartId", cart.id);
		return cart;
	};
	if (cartCookie) {
		const cart = await getCart();
		if (!cart) {
			await cartCreate();
		}
		return cart;
	} else {
		await cartCreate();
	}
};

export async function handlePaymentAction() {
	"use server";
	const cart = await getCart();
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	if (!cart) {
		throw new Error("Cart is not defined");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	if (cart.products && cart.products.length > 0) {
		const checkoutSession = await stripe.checkout.sessions.create({
			metadata: {
				cartId: cart.id,
			},
			line_items: cart.products.map(({ name, price, image, quantity }) => ({
				price_data: {
					currency: "usd",
					product_data: {
						name,
						images: [image],
					},
					unit_amount: price,
				},
				quantity,
			})),
			payment_method_types: ["card"],
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/cancel`,
		});
		if (!checkoutSession.url) {
			throw new Error("Checkout session url is not defined");
		}
		cookies().delete("cartId");
		redirect(checkoutSession.url);
	}
}
