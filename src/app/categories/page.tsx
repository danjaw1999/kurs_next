import type { UrlObject } from "node:url";
import { getCategories } from "@/api/categories";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default async function CategoriesPage() {
	const categories = await getCategories();

	return (
		<div className="flex items-center gap-4">
			{categories.map(({ slug, id, name }) => (
				<ActiveLink
					key={id}
					href={("/categories/" + slug) as unknown as UrlObject}
					className="text-lg"
				>
					{name}
				</ActiveLink>
			))}
		</div>
	);
}
