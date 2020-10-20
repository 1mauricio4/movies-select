import React, { useEffect, useContext, Fragment } from 'react';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';

// Component
import Stars from './Stars';

// Context
import MovieContext from '../../context/movie/movieContext';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { movie, bookmarks, getMovie, loading, setBookmark } = movieContext;

  useEffect(() => {
    getMovie(match.params.slug);
    // eslint-disable-next-line
  }, []);

  const onClick = () => {
    setBookmark(movie, bookmarks);
  };

  const {
    poster,
    title,
    imdb_rating,
    released_on,
    length,
    director,
    cast,
    overview,
    id,
  } = movie;

  if (loading) {
    return <Loading />;
  }

  let year;

  if (released_on) {
    const arr = released_on.split('-')[0];
    year = arr;

    console.log('Bookmarks: ', bookmarks);
  }

  return (
    <div className='detail-container'>
      <div className='column-left'>
        <img src={poster} alt={`Poster: ${title}`} />
      </div>
      <div className='column-right'>
        <div className='row1'>
          <h2 className='title'>{title}</h2>
          <h2 className='rating'>{`(${imdb_rating})`}</h2>
          <Fragment>
            <Stars rating={imdb_rating} />
          </Fragment>
        </div>
        <div className='row2'>
          <h3>
            {`Released: ${year}  |  Length: ${length}  |  Director: ${director}`}
          </h3>
          <h3>Cast: {cast && cast.map((e) => `${e}, `)}</h3>
        </div>
        <div className='row3'>
          <h3>Description: {overview}</h3>
        </div>
        <div className='row4'>
          <label>
            <input type='radio' name='rating' onClick={onClick} />
            <i
              style={{ color: bookmarks[id] ? 'rgb(138, 0, 0)' : 'black' }}
              className='far fa-bookmark'
            ></i>
          </label>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Movie;
