"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive =
		matchedPath &&
		pathname &&
		(exact ? pathname === matchedPath : pathname.startsWith(matchedPath));
	return (
		<Link
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive ? activeClassName : className)}
			aria-current={isActive ? isActive : undefined}
			href={href}
		>
			{children}
		</Link>
	);
};
