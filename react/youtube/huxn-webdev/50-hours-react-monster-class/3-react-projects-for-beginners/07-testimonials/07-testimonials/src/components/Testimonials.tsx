import { useState } from 'react';
import '../styles/index.css';

const testimonials = [
  {
    quote: "This is the best product I've ever used!",
    author: 'Jane Doe',
  },
  {
    quote: 'I highly recommend this product to everyone!',
    author: 'John Smith',
  },
  {
    quote: 'This product has completely changed my life!',
    author: 'Bob Johnson',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => setCurrentIndex(currentIndex - 1);
  const handleNextClick = () => setCurrentIndex(currentIndex + 1);

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex === testimonials.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
