interface ReviewCardProps {
    name: string;
    avatar: string;
    rating: number;
    text: string;
  }
  
  export default function ReviewCard({ name, avatar, rating, text }: ReviewCardProps){
    return (
      <div className="flex space-x-4 border-b pb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-yellow-500">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>
          <p className="text-sm text-gray-700 mt-1">{text}</p>
          <div className="flex space-x-4 text-xs mt-2 text-gray-500">
            <button>Like</button>
            <button>Reply</button>
          </div>
        </div>
      </div>
    );
  }
  