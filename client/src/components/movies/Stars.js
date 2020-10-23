import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
  const [ratings, setRating] = useState(rating / 2);
  const [hover, setHover] = useState(null);

  const onClick = (e) => {
    setRating(e.target.value);
  };
  return (
    <div>
      {[...Array(5)].map((e, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingVal}
              onClick={onClick}
            />
            <i
              className='far fa-star'
              style={{
                color: ratingVal <= (hover || ratings) ? '#ffc107' : '#e4e5e9',
              }}
              onMouseEnter={() => setHover(ratingVal)}
              onMouseLeave={() => setHover(null)}
            ></i>
          </label>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
