import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { amountOfProducts } from "@/utils";

export async function generateStaticParams() {
	const products = await getProducts({ skip: undefined, take: amountOfProducts });
	const numOfPages = Math.ceil(products.length / amountOfProducts);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: `${page}` } }));
}

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const skip =
		Number(params.page) === 1 ? 0 : Number(params.page) * amountOfProducts - amountOfProducts;
	const products = await getProducts({ skip, take: amountOfProducts });

	return <ProductList products={products} />;
}
