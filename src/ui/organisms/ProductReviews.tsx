"use client";
import { useFormStatus } from "react-dom";
import { useOptimistic, useRef } from "react";
import { type Review, type ReviewInput } from "@/gql/graphql";
import { addReviewToProduct } from "@/app/product/[productId]/actions";

export const ProductReviews = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: Review[];
}) => {
	const formStatus = useFormStatus();
	const [optimisticReview, setOptimisticReview] = useOptimistic(reviews);
	const formRef = useRef<HTMLFormElement>(null);
	console.log(formStatus.data);
	return (
		<div>
			<form data-testid="add-review-form" ref={formRef} className="mt-8 max-w-md">
				<input
					type="text"
					name="headline"
					required
					placeholder="Headline"
					className="mb-4 block w-full rounded-md border px-4 py-2"
				/>
				<input
					type="text"
					name="content"
					required
					placeholder="Content"
					className="mb-4 block w-full rounded-md border px-4 py-2"
				/>
				<input
					type="number"
					name="rating"
					required
					placeholder="Rating"
					min={1}
					max={5}
					className="mb-4 block w-full rounded-md border px-4 py-2"
				/>
				<input
					type="text"
					name="name"
					required
					placeholder="Name"
					className="mb-4 block w-full rounded-md border px-4 py-2"
				/>
				<input
					type="email"
					name="email"
					required
					placeholder="Email"
					className="mb-4 block w-full rounded-md border px-4 py-2"
				/>
				<button
					formAction={async (formData) => {
						const data = Object.fromEntries(formData) as unknown as ReviewInput;
						const reviews = await addReviewToProduct({
							productId,
							data: { ...data, rating: +data.rating },
						});
						formRef.current?.reset();
						setOptimisticReview(reviews);
					}}
					disabled={formStatus.pending}
					className="mt-4 w-full rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-shadow hover:shadow-sm disabled:cursor-wait disabled:bg-slate-300"
				>
					Add review
				</button>
			</form>
			{optimisticReview.length > 0 ? (
				<div>
					{optimisticReview.map(
						(review) =>
							review && (
								<div key={review.id}>
									<p>{review.headline}</p>
									<p>{review.content}</p>
									<p>{review.rating}</p>
									<p>{review.name}</p>
									<p>{review.email}</p>
								</div>
							),
					)}
				</div>
			) : (
				<p>No reviews yet</p>
			)}
		</div>
	);
};
