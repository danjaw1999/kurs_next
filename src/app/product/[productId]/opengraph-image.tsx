import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { formatPrice } from "@/utils";

// export const runtime = "edge";

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	if (!product) {
		notFound();
	}
	const { name, price, category, image } = product;
	return new ImageResponse(
		(
			<div tw="w-full text-white h-full flex flex-col items-center text-8xl bg-black">
				<img src={image} alt={name} height={300} style={{ aspectRatio: "3/2" }} />
				<p tw="font-sans uppercase m-0 p-0 text-6xl leading-4">{name}</p>
				<p tw="font-serif m-0 p-0 font-black">{category.name}</p>
				<p tw="m-0 mt-2">{formatPrice(price / 100)}</p>
			</div>
		),
	);
}
