import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { createReview, getReviews } from "./helper";
export default function Review() {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const avatar = useCallback((name) => {
    return createAvatar(micah, {
      size: 128,
      seed: name,
    }).toDataUri();
  }, []);

  const getAllReviews = useCallback(async () => {
    try {
      const reviews = await getReviews(id);
      setReviews(reviews);
    } catch {
      toast.error("Error fetching reviews");
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review) return toast.error("Review cannot be empty");
    try {
      const isReviewCreated = await createReview(id, review);
      if (isReviewCreated) {
        toast.success("Review created successfully");
        setReview("");
        getAllReviews();
      } else toast.error("Error creating review");
    } catch {
      toast.error("Error creating review");
    }
  };
  useEffect(() => {
    getAllReviews();
  }, [getAllReviews]);
  return (
    <div className="">
      <form
        className="max-w-[30em] flex items-center gap-x-5 "
        onSubmit={handleSubmit}
      >
        <div className="flex-1 space-y-2">
          <label htmlFor="review" className="font-medium">
            Add review
          </label>
          <input
            type="text"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            name="review"
            placeholder="Enter your review here"
            className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 "
          />
        </div>
        <button className="mt-5" type="submit">
          <Icon
            icon={"icon-park-outline:send-email"}
            className="w-8 h-8 text-gray-700 hover:text-blue-600"
          />
        </button>
      </form>
      <div className="mt-5 max-w-[30em]">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <div className="mt-2 space-y-1">
          {reviews?.map((review) => (
            <div key={review?._id} className="border rounded">
              <div className="flex items-center justify-between px-5 py-3 border-b">
                <div className="flex gap-x-5">
                  <img
                    src={avatar(review?.user?.name)}
                    className="w-12 h-12 border rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review?.user?.name}</h4>
                    <p className="text-gray-500">{review?.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
