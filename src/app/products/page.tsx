import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";
import { amountOfProducts } from "@/utils";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
};

export type Rating = {
	rate: number;
	count: number;
};

export default async function Page() {
	const products = await getProducts({
		skip: undefined,
		take: amountOfProducts,
	});

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
