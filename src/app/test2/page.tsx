import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

export default async function Page() {
	return (
		<div>
			<h1>Test1</h1>
			<Link href="/test1">Przejdź do test1</Link>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
}
