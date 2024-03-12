import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const session = await stripe.checkout.sessions.retrieve(searchParams.sessionId);
	return <div>{session.payment_status}</div>;
}
