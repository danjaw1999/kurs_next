import Image from "next/image";
import { getCart } from "@/app/cart/actions";
import { formatPrice } from "@/utils";
import { ChangeProductQuantity } from "@/ui/atoms/ChangeProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { Overlay } from "@/app/@modal/(.)cart/Overlay";

export default async function ModalCart() {
	const cart = await getCart();
	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-[999] h-screen w-full max-w-sm bg-white">
				<a className="block p-4 text-right" href="/cart">
					Przejdz do koszyka
				</a>
				<ul>
					{cart?.products.map(({ id, name, image, price, variant, quantity }) => (
						<li key={id} className="mb-4 flex items-center rounded border p-4">
							<Image src={image} alt={name} className="mr-4 h-24 w-24" width={400} height={400} />
							<div>
								<h3 className="mb-1 text-lg font-semibold">{name}</h3>
								<p className="mb-1 text-gray-600">Price: {formatPrice(price / 100)}</p>
								<p className="mb-1 text-gray-600">Variant: {variant.name}</p>
								<div className="mb-1 flex items-center text-gray-600">
									<ChangeProductQuantity quantity={quantity} itemId={id} />
								</div>
								<RemoveButton productId={id} variantId={variant.id} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
