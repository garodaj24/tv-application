import React from 'react'
import Carousel from './Carousel'

import '../assets/styles/Trending.css'

const Trending = () => {
  return (
    <section className='trending-container'>
      <h2 className='trending-title'>Trending Now</h2>
      <Carousel images={[1, 2, 3]} />
    </section>
  )
}

export default Trending