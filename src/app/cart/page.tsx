import { redirect } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/utils";
import { ChangeProductQuantity } from "@/ui/atoms/ChangeProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { getCart, handlePaymentAction } from "@/app/cart/actions";

export default async function CartPage() {
	const cart = await getCart();
	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mx-auto w-full max-w-3xl p-4">
			<h2 className="mb-2 text-xl font-bold">Products</h2>
			<ul>
				{cart.products.map(
					(product) =>
						product && (
							<li key={product.id} className="mb-4 flex items-center rounded border p-4">
								<Image
									src={product.image}
									alt={product.name}
									className="mr-4 h-24 w-24"
									width={400}
									height={400}
								/>
								<div>
									<h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
									<p className="mb-1 text-gray-600">Price: {formatPrice(product.price / 100)}</p>
									<p className="mb-1 text-gray-600">Variant: {product.variant.name}</p>
									<div className="mb-1 flex items-center text-gray-600">
										<ChangeProductQuantity quantity={product.quantity} itemId={product.id} />
									</div>
									<RemoveButton productId={product.id} variantId={product.variant.id} />
								</div>
							</li>
						),
				)}
			</ul>
			<form action={handlePaymentAction}>
				<button
					type="submit"
					className="mt-4 w-full rounded-md border bg-slate-950 py-2 text-white shadow-sm transition-colors hover:bg-slate-800"
				>
					Pay {formatPrice(cart.totalPrice / 100)}
				</button>
			</form>
		</div>
	);
}
