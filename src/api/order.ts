import { OrderCreateDocument, OrderGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getOrder = async ({ orderId, email }: { orderId?: string; email?: string }) => {
	return executeGraphql({
		query: OrderGetDocument,
		variables: {
			orderId,
			email,
		},
	});
};

export const createOrder = async ({ email, cartId }: { cartId: string; email: string }) => {
	return executeGraphql({
		query: OrderCreateDocument,
		variables: {
			email,
			cartId,
		},
	});
};
