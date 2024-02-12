import { type ReactNode } from "react";
import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function RootLayout({ children }: { children: ReactNode }) {
	const products = await getProducts({ skip: undefined, take: 100 });
	return (
		<>
			<section>{children}</section>
			<Pagination products={products} />
		</>
	);
}
