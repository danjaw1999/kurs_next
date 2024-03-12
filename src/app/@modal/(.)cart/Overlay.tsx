"use client";

import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-50 cursor-pointer bg-gray-600 bg-opacity-75"
			role="button"
			tabIndex={0}
		></div>
	);
};
