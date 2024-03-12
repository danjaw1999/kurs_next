import { amountOfProducts } from "@/utils";
import {
	ProductsGetListDocument,
	ProductGetDocument,
	ProductsGetByCategoryDocument,
	type ProductListItemFragment,
	type ProductPageFragment,
	ProductReviewsGetDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export type ListFetchOptions = {
	take?: number;
	skip?: number;
	sortBy?: "priceAsc" | "priceDesc" | "rating";
};

type ProductsWithTotalCount = {
	products: ProductListItemFragment[];
	totalCount: number;
};

type ProductsByCategoryVar = ListFetchOptions & {
	slug: string;
};

export const getProducts = async ({
	skip,
	take = amountOfProducts,
	sortBy,
}: ListFetchOptions = {}): Promise<ProductsWithTotalCount> => {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { take, skip, sortBy },
		next: {
			revalidate: 15,
		},
	});
	const { products: productsItems, totalCount } = products as ProductsWithTotalCount;

	return { products: productsItems, totalCount };
};

export const getProductById = async (
	productId: ProductListItemFragment["id"],
): Promise<ProductPageFragment | null | undefined> => {
	const { product } = await executeGraphql({
		query: ProductGetDocument,
		variables: {
			productId,
		},
		next: {
			revalidate: 1,
		},
	});
	return product;
};

export const getProductsByCategory = async ({
	take,
	skip,
	slug,
}: ProductsByCategoryVar): Promise<ProductsWithTotalCount> => {
	const { productsByCategory } = await executeGraphql({
		query: ProductsGetByCategoryDocument,
		variables: {
			slug,
			take,
			skip,
		},
	});
	const { totalCount, products } = productsByCategory as ProductsWithTotalCount;

	return { products, totalCount };
};

export const getProductReviews = async ({ productId }: { productId: string }) => {
	const { reviews } = await executeGraphql({
		query: ProductReviewsGetDocument,
		variables: {
			productId,
		},
	});
	return reviews;
};
