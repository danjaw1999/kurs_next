import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItemSuggested } from "@/ui/molecules/ProductListItemSuggested";

export const ProductListSuggested = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItemSuggested key={product.id} product={product} />
			))}
		</ul>
	);
};
