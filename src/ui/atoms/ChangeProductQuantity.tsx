"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

export const ChangeProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	return (
		<form>
			<button
				className="h-8 w-8 border bg-slate-50"
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			<span className="mx-2" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				className="h-8 w-8 border bg-slate-50"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
