import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const { categories } = await executeGraphql({ query: CategoriesGetDocument, variables: {} });
	return categories;
};
