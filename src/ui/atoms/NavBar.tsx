// import type { UrlObject } from "node:url";
import { type UrlObject } from "node:url";
import { LucideShoppingBag } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SearchField } from "./SearchFields";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCart } from "@/app/cart/actions";
import { getCategories } from "@/api/categories";

export const Navbar = async () => {
	const cart = await getCart();
	const productsQuantity = (cart?.products ?? []).reduce(
		(total, product) => (product ? total + (product?.quantity ?? 0) : 0),
		0,
	);

	const categories = await getCategories();
	return (
		<nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-6 py-10">
			<Link href={"/"}>
				<span className="block p-2 text-3xl  font-semibold text-blue-300">JaworIT</span>
			</Link>
			<ul className="flex items-center gap-4" role="navigation">
				<ActiveLink
					href={"/"}
					exact
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={"/products"}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
				>
					All
				</ActiveLink>
				<div className="flex flex-col">
					{categories.map(({ id, slug, name }) => (
						<ActiveLink
							href={`/categories/${slug}` as unknown as UrlObject}
							key={id}
							className="border-b-2 border-b-transparent text-lg"
							activeClassName="border-b-2 border-zinc-900 text-lg font-semibold"
						>
							{name}
						</ActiveLink>
					))}
				</div>
			</ul>
			<SearchField />
			<div className="flex">
				<Link href={"/cart"} role="button">
					<button className="flex gap-1 px-2">
						<LucideShoppingBag className="h-6 w-6" />
						<span>{productsQuantity}</span>
					</button>
				</Link>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</nav>
	);
};
