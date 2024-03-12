import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={clsx(
					"h-10 rounded-md border-input bg-background text-sm ring-offset-background file:border-0 file:text-sm placeholder:text-muted-foreground focus-visible:ring-ring flex w-full border px-3 py-2 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";
