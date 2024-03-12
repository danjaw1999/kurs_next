import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}
	console.log(user);
	const email = user.emailAddresses[0]?.emailAddress;
	if (!email) {
		return <div>User does not have email</div>;
	}
	return <div>Orders page</div>;
}
