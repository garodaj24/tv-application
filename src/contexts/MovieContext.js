import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext({
  movies: [],
  setMovies: () => {},
  featuredMovie: null,
  setFeaturedMovie: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]); // State for movies
  const [featuredMovie, setFeaturedMovie] = useState(null); // State for featured movie

  const contextValue = {
    movies,
    setMovies, // This function allows updating the movies state
    featuredMovie,
    setFeaturedMovie, // This function allows updating the featuredMovie state
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
