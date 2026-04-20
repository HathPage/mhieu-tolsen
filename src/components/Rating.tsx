import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export default function Rating({ rating, maxRating = 5, size = 16 }: RatingProps) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={`${index < rating ? 'text-[#f04c39] fill-[#f04c39]' : 'text-gray-400'}`}
          size={size}
        />
      ))}
    </div>
  );
}
