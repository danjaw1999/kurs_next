"use client";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/ui/atoms/Input";

export const SearchField = () => {
	const { get } = useSearchParams();
	const search = get("query");
	const [searchTerm, setSearchTerm] = useState(search ?? "");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	const router = useRouter();

	useEffect(() => {
		if (debouncedSearchTerm) {
			router.push(`/search?query=${debouncedSearchTerm}`);
		}
	}, [debouncedSearchTerm, router]);

	return (
		<Input
			placeholder="search"
			type="search"
			value={searchTerm ?? ""}
			onChange={handleChange}
			className="hidden max-w-[300px] md:block"
		/>
	);
};
