import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import type { ProductListItemFragment } from "@/gql/graphql";
import { ProductListItemSuggestedDescription } from "@/ui/atoms/ProductListItemSuggestedDescription";

type ProductListItemProps = {
	product: ProductListItemFragment;
};
export const ProductListItemSuggested = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.image} alt="Product image" />
					<ProductListItemSuggestedDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
