import { useMovie } from '../contexts/MovieContext'
import Carousel from './Carousel'

import '../assets/styles/Trending.css'

const Trending = () => {
  const { movies } = useMovie()
  
  return (
    <section className='trending-container'>
      <h2 className='trending-title'>Trending Now</h2>
      <Carousel items={movies} />
    </section>
  )
}

export default Trending