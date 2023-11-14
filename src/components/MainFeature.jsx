import { useState, useEffect, useRef } from 'react'
import { useMovie } from '../contexts/MovieContext'

import Button from './Button'

import '../assets/styles/MainFeature.css'

const MainFeature = () => {
  const { featuredMovie } = useMovie()
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (featuredMovie?.VideoUrl) {
      setTimeout(() => {
        setIsVideoPlaying(true)
      }, 2000);
    }
  }, [featuredMovie])

  const secondsToHoursAndMinutes = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '';
  
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
  
    const hoursText = hours > 0 ? `${hours}h` : '';
    const minutesText = minutes > 0 ? `${minutes}m` : '';
  
    return `${hoursText} ${minutesText}`;
  }

  if (!featuredMovie) return null

  return (
    <section className='main-feature'>
      {
        isVideoPlaying ?
        <video
          ref={videoRef}
          className='feature-cover'
          autoPlay
          onEnded={() => setIsVideoPlaying(false)}
        >
          <source src={featuredMovie.VideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video> : 
        <img
          src={require(`../assets/images/${featuredMovie.CoverImage}`)}
          alt="main featured"
          className='feature-cover'
        />
      }
      <div className='feature-description-container'>
        <h2 className='feature-type'>{featuredMovie.Category}</h2>
        <img src={require(`../assets/images/${featuredMovie.TitleImage}`)} />
        <div className='feature-details'>
          <span>{featuredMovie.ReleaseYear}</span>
          <span>{featuredMovie.MpaRating}</span>
          <span>{secondsToHoursAndMinutes(featuredMovie.Duration)}</span>
        </div>
        <p className='feature-description'>{featuredMovie.Description}</p>
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