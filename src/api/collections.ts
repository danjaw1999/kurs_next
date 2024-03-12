import { type ListFetchOptions } from "./products";
import { executeGraphql } from "./graphqlApi";
import { CollectionGetDocument, CollectionsGetDocument } from "@/gql/graphql";
import { amountOfProducts } from "@/utils";

export const getCollections = async ({ skip, take = amountOfProducts }: ListFetchOptions = {}) => {
	const { collections } = await executeGraphql({
		query: CollectionsGetDocument,
		variables: { take, skip },
	});

	return { collections };
};

export const getCollection = async ({ slug }: { slug: string }) => {
	const { collection } = await executeGraphql({
		query: CollectionGetDocument,
		variables: { slug },
	});

	return { collection };
};
