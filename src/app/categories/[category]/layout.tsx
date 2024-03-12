import { type ReactNode } from "react";
import { getProductsByCategory } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { getCategories } from "@/api/categories";

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: { category: string };
}) {
	const { totalCount } = await getProductsByCategory({ slug: params.category });
	const categories = await getCategories();
	const category = categories.find(({ slug }) => slug === params.category);

	return (
		<>
			<header>
				<h1>{category?.name}</h1>
			</header>
			<section>{children}</section>
			<Pagination totalCount={totalCount} />
		</>
	);
}
