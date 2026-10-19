const STAR_COUNT = 5;

interface RatingStarsProps {
  value: number;
  onRatingChange: (rating: number) => void;
}

export default function RatingStars({
  value,
  onRatingChange,
}: RatingStarsProps) {
  return (
    <div role="radiogroup" aria-label="Rating">
      {Array.from({ length: STAR_COUNT }, (_, i) => {
        const starValue = i + 1;
        const filled = starValue <= value;
        const label = `${starValue} star${starValue > 1 ? 's' : ''}`;

        return (
          <button
            key={starValue}
            role="radio"
            aria-checked={filled}
            aria-label={label}
            onClick={() => onRatingChange(starValue)}
          >
            {filled ? '★' : '☆'}
          </button>
        );
      })}
    </div>
  );
}
