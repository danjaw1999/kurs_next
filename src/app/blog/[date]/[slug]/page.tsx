export default function Page({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	return (
		<div>
			<h1>Blog</h1>
			<pre>
				{date} / {slug}
			</pre>
		</div>
	);
}
