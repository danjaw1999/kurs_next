// export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
// 	if (params.category === "t-shirts")
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
// 	if (params.category === "hoodies")
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
// 	if (params.category === "sweatshirts")
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
// };
//
// export default function CategoryProductPage({
// 	params,
// }: {
// 	params: { category: string; pageNumber: string };
// }) {
// 	return (
// 		<h1>
// 			{params.category} - {params.pageNumber}
// 		</h1>
// 	);
// }
