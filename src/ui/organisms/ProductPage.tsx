import { Suspense } from "react";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { type ProductPageFragment, type Review } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addToCartAction } from "@/app/cart/actions";
import { ProductReviews } from "@/ui/organisms/ProductReviews";

export const ProductPage = ({
	product,
	reviews,
}: {
	product: ProductPageFragment;
	reviews: Review[];
}) => {
	async function addToCart(formData: FormData) {
		"use server";
		await addToCartAction(product.id, formData.get("variantId") as string);
		revalidatePath("/");
	}

	return (
		product && (
			<>
				<article className="mx-auto mt-8 flex flex-col overflow-hidden rounded-lg bg-white">
					<div className="m-4 flex flex-col gap-32 lg:flex-row">
						<div className="mt-8 lg:mt-0 lg:w-1/3">
							<h2 className="sr-only">Images</h2>
							<Image
								width={400}
								height={400}
								priority
								key={product.image}
								src={product.image}
								alt={"Product image"}
								className="rounded-lg"
							/>
						</div>
						<div className="flex flex-col p-6 lg:w-2/3">
							<div className="mb-4 flex justify-between">
								<ProductListItemDescription product={product} />
							</div>
							<h2 className="mb-2 text-lg font-semibold">Select variant</h2>
							<form action={addToCart}>
								<input type="text" name="productId" />
								<select
									className="block w-full cursor-pointer rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
									name="variantId"
								>
									{product.variants.map((variant) => (
										<option key={variant.id} value={variant.id}>
											{variant.name}
										</option>
									))}
								</select>
								<AddToCartButton />
							</form>
							<ProductReviews productId={product.id} reviews={reviews} />
						</div>
					</div>
					<aside>
						<Suspense>{<SuggestedProductsList />}</Suspense>
					</aside>
				</article>
			</>
		)
	);
};
