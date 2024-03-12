import { formatPrice } from "@/utils";
import type { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemSuggestedDescription = ({
	product: { price, name, category, description },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h2 className="text-xl font-medium text-zinc-900">{name}</h2>
				<div>{description}</div>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span>
					{category.name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena: </span>{" "}
				<span data-testid="product-price">{formatPrice(price / 100)}</span>
			</p>
		</div>
	);
};
