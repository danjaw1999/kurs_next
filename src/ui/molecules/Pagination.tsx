import { PaginationBtn } from "@/ui/atoms/PaginationBtn";
import { amountOfProducts } from "@/utils";

export const Pagination = ({ totalCount }: { totalCount: number }) => {
	const numOfPages = Math.ceil(totalCount / amountOfProducts);

	return (
		<nav>
			<ul
				aria-label="pagination"
				className="mt-4 flex items-center justify-center gap-4 text-black"
			>
				{numOfPages === 0 ? (
					<li>
						<PaginationBtn page={1} />
					</li>
				) : (
					Array.from({ length: numOfPages }, (_, i) => i + 1).map((page) => (
						<li key={page}>
							<PaginationBtn page={page} />
						</li>
					))
				)}
			</ul>
		</nav>
	);
};
