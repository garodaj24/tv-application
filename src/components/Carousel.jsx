import { useState, useRef } from 'react';
import { useMovie } from '../contexts/MovieContext';

import '../assets/styles/Carousel.css';

const Carousel = ({ items }) => {
  const { setFeaturedMovie } = useMovie();

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

  const handleItemClick = (item) => {
    sessionStorage.setItem('lastMovie', item.Id);
    setFeaturedMovie(item);
  }

  return (
    <div
      ref={carouselRef}
      className='carousel'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {items.map(item => (
        <img
          key={item.Id}
          src={require(`../assets/images/${item.CoverImage}`)}
          alt='carousel item'
          className='carousel-item'
          width={200}
          height={300}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
};

export default Carousel;
