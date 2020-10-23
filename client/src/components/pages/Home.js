import React, { useEffect, useContext, Fragment } from 'react'

// Components
import Movies from '../movies/Movies'

// Context
import MovieContext from '../../context/movie/movieContext'


const Home = () => {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.initialMovies();
  }, [])

  return (
    <Fragment>
      <Movies />
    </Fragment>
  )
}

export default Home
