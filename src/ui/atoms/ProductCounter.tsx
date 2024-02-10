"use client";
import { type ReactNode, useState } from "react";

export const ProductCounter = ({ children }: { children: ReactNode }) => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button
				onClick={() => setCounter((counter) => counter + 1)}
				className="border border-slate-200 px-4"
			>
				+
			</button>
			<input readOnly value={counter} className="border border-slate-200 px-4" />
			<button
				onClick={() => setCounter((counter) => counter - 1)}
				className="border border-slate-200 px-4"
			>
				-
			</button>
			{counter % 2 === 0 && children}
		</div>
	);
};
