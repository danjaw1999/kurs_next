"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const currentPathname = usePathname();
	const isActive = currentPathname === href;

	return (
		<Link
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
			href={href}
		>
			{children}
		</Link>
	);
};
