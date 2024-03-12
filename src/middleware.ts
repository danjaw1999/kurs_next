import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/cart/(.*)",
		"/categories/(.*)",
		"/api/webhook/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products/(.*)",
	],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
