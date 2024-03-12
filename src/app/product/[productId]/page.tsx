import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProductReviews } from "@/api/products";
import { ProductPage } from "@/ui/organisms/ProductPage";

// export const generateStaticParams = async () => {
// 	const products = await getProducts();
// 	return products.map(({ id }) => ({
// 		productId: id,
// 	}));
// };

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);
	if (!product) {
		notFound();
	}
	const { name, description } = product;

	return {
		title: name,
		description,
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
<<<<<<< Updated upstream
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback="Loading ...">{<SuggestedProductsList />}</Suspense>
			</aside>
		</>
	);
=======
	const reviews = await getProductReviews({ productId: params.productId });

	if (!product) {
		notFound();
	}
	return <ProductPage product={product} reviews={reviews} />;
>>>>>>> Stashed changes
}
