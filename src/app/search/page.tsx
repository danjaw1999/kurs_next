import { notFound } from "next/navigation";
import { searchQuery } from "@/api/searchQuery";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchQueryPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const products = await searchQuery(searchParams.query);
	if (!products) {
		notFound();
	}

	return <ProductList products={products} />;
}
