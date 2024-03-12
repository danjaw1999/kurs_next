"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/actions";

export const RemoveButton = ({
	variantId,
	productId,
}: {
	variantId: string;
	productId: string;
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			disabled={isPending}
			className="text-red-500 disabled:text-slate-400"
			onClick={async () => {
				startTransition(async () => {
					await removeItem(productId, variantId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
