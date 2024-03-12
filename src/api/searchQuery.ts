import { type ProductListItemFragment, SearchQueryDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const searchQuery = async (slug: string = "") => {
	if (slug.length > 2) {
		const { searchQuery } = await executeGraphql({
			query: SearchQueryDocument,
			variables: {
				slug,
			},
		});

		return searchQuery?.products ?? ([] as ProductListItemFragment[]);
	}
};
