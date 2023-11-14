import { useState, useRef } from 'react';
import { useMovie } from '../contexts/MovieContext';
import '../assets/styles/Carousel.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carousel = () => {
  const { movies } = useMovie();

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // You can adjust this multiplier based on your preference
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      className='carousel'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {movies.map(item => (
        <img
          key={item.Id}
          src={`https://picsum.photos/200/300?random=${item.Id}`}
          alt='carousel item'
          width={200}
          height={300}
        />
      ))}
    </div>
  );
};

export default Carousel;
