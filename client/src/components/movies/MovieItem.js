import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ movieCat, genre }) => {
  return (
    <div>
      <h3>{genre}</h3>
      <div className='flex-row'>
        {movieCat.map((movie, i) => (
          <div key={i} className='backdrop'>
            <Link to={`/detail/${movie.slug}`}>
              <img src={movie.backdrop} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movieCat: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieItem;
