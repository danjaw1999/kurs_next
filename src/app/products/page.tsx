import { ProductList } from "@/ui/organisms/ProductList/ProductList";

const products = [
	{
		category: "Akcesoria",
		name: "Bluza",
		price: 2137,
		coverImage: { src: "/product_1.png", alt: "Bluza" },
	},
	{
		category: "Akcesoria",
		name: "Kubek",
		price: 2137,
		coverImage: { src: "/product_2.png", alt: "Kubek" },
	},
	{
		category: "Akcesoria",
		name: "Kurtka",
		price: 2137,
		coverImage: { src: "/product_3.png", alt: "Kurtka" },
	},
	{
		category: "Akcesoria",
		name: "Czapka",
		price: 2137,
		coverImage: { src: "/product_4.png", alt: "Czapka" },
	},
];

export default async function Page() {
	return <ProductList products={products} />;
}
