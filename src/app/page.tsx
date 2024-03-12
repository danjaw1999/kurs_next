import Link from "next/link";
import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollections } from "@/api/collections";

export default async function Home() {
	const { collections } = await getCollections();
	const { products } = await getProducts();
	return (
		<>
			{collections.map((collection) => (
				<Link key={collection.id} href={`/collections/${collection.slug}`}>
					<h1>{collection.name}</h1>
				</Link>
			))}
			<ProductList products={products} />
		</>
	);
}
