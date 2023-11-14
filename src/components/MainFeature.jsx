import React from 'react'
import Button from './Button'

import '../assets/styles/MainFeature.css'

const MainFeature = ({ feature }) => {
  return (
    <section className='main-feature'>
      <img
        src={feature.coverImage}
        alt="main featured"
        className='feature-cover'
      />
      <div className='feature-description-container'>
        <h2 className='feature-type'>{feature.type}</h2>
        <img src={feature.titleImage} />
        <div className='feature-details'>
          <span>{feature.year}</span>
          <span>{feature.restriction}</span>
          <span>{feature.duration}</span>
        </div>
        <p className='feature-description'>{feature.description}</p>
        <div className='feature-buttons'>
          <Button backgroundColor={'white'}>
            <span className='btn-play-text'>&#9654; Play</span>
          </Button>
          <Button
            backgroundImage={'linear-gradient(130deg, rgba(34,37,229,1) 0%, rgba(4,24,128,1) 100%)'}
          >
            <span className='btn-more-text'>More Info</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MainFeature