import { useEffect } from 'react'
import { useMovie } from '../contexts/MovieContext'

import MainFeature from './MainFeature'
import Trending from './Trending'

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

        const lastMovieId = sessionStorage.getItem('lastMovie');
        if (lastMovieId) {
          const index = top50Movies.findIndex((movie) => movie.Id === lastMovieId);

          // If the movie is found, move it to the first position
          if (index !== -1) {
            const updatedMovies = [
              top50Movies[index],
              ...top50Movies.slice(0, index),
              ...top50Movies.slice(index + 1),
            ];

            setMovies(updatedMovies);
          }
        } else {
          setMovies(top50Movies);
        }
        setFeaturedMovie(data.Featured)
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