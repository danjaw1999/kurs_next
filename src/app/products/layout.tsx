import { type ReactNode } from "react";
import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { SortSelect } from "@/ui/atoms/SortSelect";

export default async function RootLayout({ children }: { children: ReactNode }) {
	const { totalCount } = await getProducts();
	return (
		<>
			<SortSelect />
			<section>{children}</section>
			<Pagination totalCount={totalCount} />
		</>
	);
}
