import { getProductsByCategory } from "@/api/products";
import { getCategories } from "@/api/categories";
import { ProductListSuggested } from "@/ui/organisms/ProductListSuggested";

export const SuggestedProductsList = async () => {
	const categories = await getCategories();
	const randomCategory = categories[Math.floor(Math.random() * categories.length)];

	const { products } = await getProductsByCategory({
		take: 4,
		slug: randomCategory?.slug ?? "accessories",
	});

	return (
		<div data-testid="related-products">
			<ProductListSuggested products={products.slice(0, 4)} />
		</div>
	);
};
