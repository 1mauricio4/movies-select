import React, { lazy, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// Context
import MovieContext from '../../context/movie/movieContext';

// const Movies = lazy(() => import('../movies/Movies'))
import Movies from '../movies/Movies'

const Search = () => {
  const { searchMovies } = useContext(MovieContext);
  const { query } = useParams(); 

  useEffect(() => {
    searchMovies(query);
  }, [])

  
  return (
    <Movies />
  )
}

export default Search
