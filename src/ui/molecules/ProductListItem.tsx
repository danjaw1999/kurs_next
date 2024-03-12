import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import type { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.image} alt="Product image" />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
