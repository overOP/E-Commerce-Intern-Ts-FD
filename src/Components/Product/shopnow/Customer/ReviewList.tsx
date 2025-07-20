import ReviewCard from "./ReviewCard";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sofia Harvetz",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: `I bought it 3 weeks ago and now come back just to say "Awesome Product!" I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti et quas molestias excepturi sint non provident.`
  },
  ...Array.from({ length: 4 }, (_, i) => ({
    name: "Nicolas Jensen",
    avatar: `https://i.pravatar.cc/150?img=${12 + i}`,
    rating: 5,
    text: `I bought it 3 weeks ago and now come back just to say "Awesome Product!" I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti et quas molestias excepturi sint non provident.`
  }))
];

export default function ReviewList(){
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">11 Reviews</h3>
        <select className="border px-2 py-1 rounded text-sm">
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          avatar={review.avatar}
          rating={review.rating}
          text={review.text}
        />
      ))}

      <button className="bg-gray-200 text-sm px-4 py-2 rounded mx-auto block">
        Load more
      </button>
    </div>
  );
}
