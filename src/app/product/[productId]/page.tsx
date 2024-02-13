import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

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
	const { name, description, coverImage } = await getProductById(params.productId);

	return {
		title: name,
		description,
		openGraph: {
			title: name,
			description,
			images: [coverImage.src],
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
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
}
