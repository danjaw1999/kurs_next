import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductsByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { amountOfProducts } from "@/utils";
import { getCategories } from "@/api/categories";

export async function generateMetadata({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> {
	const categories = await getCategories();
	const category = categories.find(({ slug }) => slug === params.category);

	return {
		title: category?.name,
	};
}

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string; category: string };
}) {
	const skip =
		Number(params.pageNumber) === 1
			? 0
			: Number(params.pageNumber) * amountOfProducts - amountOfProducts;

	const categories = await getCategories();

	if (!categories.map((category) => category?.slug).includes(params.category)) {
		notFound();
	}

	const { products } = await getProductsByCategory({
		skip,
		take: amountOfProducts,
		slug: params.category,
	});

	return <ProductList products={products} />;
}
