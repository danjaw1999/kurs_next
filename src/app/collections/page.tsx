import { type UrlObject } from "node:url";
import { notFound } from "next/navigation";
import { getCollections } from "@/api/collections";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default async function CollectionsPage() {
	const { collections } = await getCollections();
	if (!collections) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center">
			<span>Collections</span>
			<div className="flex items-center gap-4">
				{collections.map(({ name, id, slug }) => (
					<ActiveLink key={id} href={`/collections/${slug}` as unknown as UrlObject}>
						{name}
					</ActiveLink>
				))}
			</div>
		</div>
	);
}
