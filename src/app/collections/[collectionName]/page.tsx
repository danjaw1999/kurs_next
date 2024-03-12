import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollection } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";
export async function generateMetadata({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> {
	const { collection } = await getCollection({
		slug: params.collectionName,
	});

	return {
		title: collection?.name,
	};
}
export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const { collection } = await getCollection({
		slug: params.collectionName,
	});

	if (!collection) {
		notFound();
	}

	if (!collection.products) {
		return <div>Kolekcja nie zawiera żadnych produktów</div>;
	}

	return (
		<div>
			<h1>{collection.name}</h1>
			<p>{collection.description}</p>
			<ProductList products={collection.products} />
		</div>
	);
}
