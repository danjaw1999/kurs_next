import { type UrlObject } from "node:url";
import { ActiveLink } from "./ActiveLink";

export const PaginationBtn = ({ page }: { page: number }) => {
	return (
		<ActiveLink
			href={`/products/${page}` as unknown as UrlObject}
			activeClassName="underline"
			className="text-primary underline-offset-4 hover:underline"
		>
			{page}
		</ActiveLink>
	);
};
