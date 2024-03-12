"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductAddReviewDocument } from "@/gql/graphql";

export const addReviewToProduct = async ({
	productId,
	data,
}: {
	productId: string;
	data: {
		headline: string;
		content: string;
		name: string;
		email: string;
		rating: number;
	};
}) => {
	const { addReview } = await executeGraphql({
		query: ProductAddReviewDocument,
		variables: {
			productId,
			data,
		},
	});
	revalidateTag("product");
	return addReview;
};
