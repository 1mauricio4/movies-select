import React, { useEffect, useContext, Fragment, Suspense, lazy } from 'react';

// Component
// import MovieItem from './MovieItem';
import Loading from '../layout/Loading';

// Context
import MovieContext from '../../context/movie/movieContext';

const MovieItem = lazy(() => import('./MovieItem'));


const Movies = ({}) => {
  const movieContext = useContext(MovieContext);

  const { genre, loading, search, initialMovies } = movieContext;

  // useEffect(() => {
  //   initialMovies();
  // }, []);

  if (loading) {
    return <Loading />;
  }

  const movieGen = Object.keys(genre);

  return (
    <Fragment>
      {movieGen.length > 0 ? (
        movieGen.map((gen, i) => (
          <Suspense fallback={<div>Loading...</div>}>
          <MovieItem key={i} movieCat={genre[gen]} genre={gen} />
          </Suspense>
        ))
      ) : (
        <div>
          <h1>
            There doesn't seem to be any movies with that search. Please try
            again or hit clear to go back to normal.
          </h1>
        </div>
      )}
    </Fragment>
  );
};

export default Movies;
