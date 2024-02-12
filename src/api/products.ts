import { type ProductResponseItem } from "@/app/products/page";
import { amountOfProducts } from "@/utils";

type ProductFetchOptions = {
	take?: number;
	skip?: number;
};

export const getProducts = async ({ take = amountOfProducts, skip }: ProductFetchOptions = {}) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?${take ? `take=${take}` : ""}${skip ? `&offset=${skip}` : ""}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	return productsResponse.map(productResponseItemToProductItem);
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItem(productResponse);
};

const productResponseItemToProductItem = ({
	id,
	title,
	category,
	price,
	image,
	description,
}: ProductResponseItem) => ({
	id,
	name: title,
	category,
	description,
	price,
	coverImage: {
		src: image,
		alt: title,
	},
});
