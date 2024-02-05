import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItem;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
