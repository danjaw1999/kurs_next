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

export default function Home() {
	return (
		<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
