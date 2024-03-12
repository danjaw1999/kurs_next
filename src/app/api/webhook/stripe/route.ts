/// <reference types="stripe-event-types" />
import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const signature = request.headers.get("Stripe-Signature");

	if (!signature) {
		return new Response("No signature", {
			status: 401,
		});
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;
	// console.log(event);

	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
			event.data.object;
			break;
			//mutacja do grafa z order
		}
		case "payment_intent.created": {
			event.data.object.metadata?.cartId;
			console.dir(event, { depth: 999 });
		}
		// case "checkout.session.async_payment_succeeded": {
		// }
	}

	return new Response("OK", {
		status: 200,
	});
}
