import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();
	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		console.log("revalidating", json.productId);
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/products`);
		return NextResponse.json({}, { status: 200 });
	}
	return NextResponse.json("Invalid body", {
		status: 400,
	});
}

export async function GET(_request: NextRequest): Promise<NextResponse> {
	return NextResponse.json("Hello, Next.js!", {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
