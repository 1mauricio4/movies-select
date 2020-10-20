import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import MovieContext from '../../context/movie/movieContext';

const Bookmarks = () => {
  const { bookmarks } = useContext(MovieContext);
  const keys = Object.keys(bookmarks);
  console.log(keys);

  return (
    <div className='bookmarks-container'>
      {keys.length > 0 ? (
        keys.map((b, i) => (
          <div className='bookmark'>
            <Link to={`/detail/${bookmarks[b].slug}`}>
              <img
                src={bookmarks[b].poster}
                alt={`Poster: ${bookmarks[b].title}`}
              />
            </Link>
            <h3>{bookmarks[b].title}</h3>
          </div>
        ))
      ) : (
        <h1>No bookmarks here!</h1>
      )}
    </div>
  );
};

export default Bookmarks;
