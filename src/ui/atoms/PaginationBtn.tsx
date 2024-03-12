"use client";
import { type UrlObject } from "node:url";
import { usePathname } from "next/navigation";
import { ActiveLink } from "./ActiveLink";

export const PaginationBtn = ({ page }: { page: number }) => {
	const fullUrl = usePathname();
	const parts = fullUrl.split("/");
	const newUrl = parts.slice(0, -1).join("/") + `/${page}`;

	return (
		<ActiveLink
			href={newUrl as unknown as UrlObject}
			activeClassName="underline"
			className="text-primary underline-offset-4 hover:underline"
		>
			{page}
		</ActiveLink>
	);
};
