import { formatPrice } from "@/utils";
import type { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { price, name, category, description, averageRating, reviews },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h1 className="text-xl font-medium text-zinc-900">{name}</h1>
				<div>{description}</div>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span>
					{category.name}
				</p>
				{reviews.length > 0 && (
					<div>
						Avg rating: <span data-testid="product-rating">{averageRating}</span>
					</div>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena: </span>{" "}
				<span data-testid="product-price">{formatPrice(price / 100)}</span>
			</p>
		</div>
	);
};
