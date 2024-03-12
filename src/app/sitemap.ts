import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "http://localhost:3000",
			lastModified: new Date(),
		},
	];
}
