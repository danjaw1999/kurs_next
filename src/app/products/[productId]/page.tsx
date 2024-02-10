export default async function SingleProduct({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const referral = searchParams.referral?.toString();
	return (
		<>
			<div>SingleProduct</div>
			{params.productId}
			{referral && <p>Referral: {referral}</p>}
		</>
	);
}
