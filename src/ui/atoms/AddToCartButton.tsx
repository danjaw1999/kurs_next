"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			type="submit"
			data-testid="add-to-cart-button"
			disabled={formStatus.pending}
			className="mt-4 w-full max-w-md rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-shadow hover:shadow-sm disabled:cursor-wait disabled:bg-slate-300"
		>
			Add to cart
		</button>
	);
};
