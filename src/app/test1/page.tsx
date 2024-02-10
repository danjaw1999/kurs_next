import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

export default async function Page() {
	return (
		<div>
			<h1>Test1</h1>
			<Link href="/test2" className="hover:underline">
				Przejdź do test2
			</Link>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
}
