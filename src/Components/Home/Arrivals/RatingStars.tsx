import React from "react";
import { AiFillStar } from "react-icons/ai";

const RatingStars: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <AiFillStar key={i} className="text-yellow-400" size={12} />
    ))}
  </div>
);

export default RatingStars;
