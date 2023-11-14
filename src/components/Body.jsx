import { useEffect } from 'react'
import { useMovie } from '../contexts/MovieContext'

import MainFeature from './MainFeature'
import Trending from './Trending'

import coverImage from '../assets/images/FeaturedCoverImage.png'
import titleImage from '../assets/images/FeaturedTitleImage.png'

const feature = {
  coverImage: coverImage,
  titleImage: titleImage,
  type: 'MOVIE',
  year: 2021,
  restriction: '18+',
  duration: '1h 48m',
  description: 'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
}

const Body = () => {
  const { setMovies, setFeaturedMovie } = useMovie();
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path accordingly
        const data = await response.json();

        // Sort movies by date in descending order
        const sortedMovies = data.TrendingNow.sort((a, b) => new Date(b.Date) - new Date(a.Date));

        // Take the top 50 movies
        const top50Movies = sortedMovies.slice(0, 50);

        console.log(data.Featured, 'featured');

        setFeaturedMovie(data.Featured)
        setMovies(top50Movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <MainFeature />
      <Trending />
    </main>
  )
}

export default Body