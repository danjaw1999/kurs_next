"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";
import { ChevronDown } from "lucide-react";

export const SortSelect = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [sortBy, setSortBy] = useState(searchParams.get("sortBy") ?? "none");

	const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedSort = event.target.value;
		if (selectedSort === "none") {
			setSortBy("?");
			router.push("?");
		} else {
			router.push(`?sortBy=${selectedSort}`);
			setSortBy(selectedSort);
		}
	};

	return (
		<div className="my-4 flex flex-col items-end space-y-2">
			<div className="relative">
				<select
					className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-blue-300 focus:outline-none focus:ring"
					value={sortBy}
					onChange={handleSortChange}
				>
					<option value="none">No Sort</option>
					<option data-testid="sort-by-price" value="priceAsc">
						Price: Low to High
					</option>
					<option value="priceDesc">Price: High to Low</option>
					<option value="ratingDesc" data-testid="sort-by-rating">
						Rating: Low to High
					</option>
					<option value="ratingAsc" data-testid="sort-by-ratingAsc">
						Rating: High to Low
					</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<ChevronDown className="h-5 w-5 text-gray-400" />
				</div>
			</div>
			<Link className="text-blue-500 hover:text-blue-700" href="?">
				Reset Sort
			</Link>
		</div>
	);
};
