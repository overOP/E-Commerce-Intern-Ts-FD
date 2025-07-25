import { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Review {
  id: number;
  productId: string;
  name: string;
  message: string;
  rating: number;
}

interface ReviewsProps {
  productId: string;
}

const Reviews: React.FC<ReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      const parsed: Review[] = JSON.parse(stored);
      const filtered = parsed.filter((r) => r.productId === productId);
      setReviews(filtered);
    }
  }, [productId]);

  const saveToStorage = (updatedList: Review[]) => {
    const allReviews: Review[] = JSON.parse(localStorage.getItem("reviews") || "[]");
    const otherReviews = allReviews.filter((r) => r.productId !== productId);
    const merged = [...otherReviews, ...updatedList];
    localStorage.setItem("reviews", JSON.stringify(merged));
  };

  const handleSubmit = () => {
    if (!text.trim() || rating === 0) return;

    if (editingId) {
      const updated = reviews.map((r) =>
        r.id === editingId ? { ...r, message: text, rating } : r
      );
      setReviews(updated);
      saveToStorage(updated);
    } else {
      const newReview: Review = {
        id: Date.now(),
        productId,
        name: "Anonymous",
        message: text,
        rating,
      };
      const updated = [newReview, ...reviews];
      setReviews(updated);
      saveToStorage(updated);
    }

    setText("");
    setRating(0);
    setEditingId(null);
  };

  const handleEdit = (review: Review) => {
    setText(review.message);
    setRating(review.rating);
    setEditingId(review.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>

      <div className="flex items-center gap-4">
        <div className="flex text-black">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <p>{reviews.length + 1} Reviews</p>
      </div>

      {/* Review Form */}
      <div className="border p-4 rounded space-y-4">
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 rounded resize-none"
          rows={4}
        />
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="cursor-pointer text-2xl"
            >
              {star <= (hoverRating || rating) ? (
                <FaStar className="text-black" />
              ) : (
                <FaRegStar className="text-black" />
              )}
            </span>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {editingId ? "Update Review" : "Submit Review"}
        </button>
      </div>

      {/* Hardcoded default review */}
      <div className="border-b pb-4">
        <h4 className="font-semibold">Sofia Harvetz</h4>
        <div className="flex text-black">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”.
          I really enjoy it.
        </p>
      </div>

      {/* Stored Reviews */}
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4 space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{review.name}</h4>
            <button
              onClick={() => handleEdit(review)}
              className="text-sm text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
          <div className="flex text-black">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= review.rating ? (
                <FaStar key={star} />
              ) : (
                <FaRegStar key={star} />
              )
            )}
          </div>
          <p>{review.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
