import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Context
import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ icon }) => {
  const {  clearSearch, search } = useContext(MovieContext);
  const { setAlert } = useContext(AlertContext);
  let history = useHistory();

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 0) {
      setAlert('Search field cannot be empty', 'light');
    } else {
      const searchTx = text;
      setText('');
      history.push(`/search/${searchTx}`)
    }
  };

  return (
    <div>
      <h2>
        <Link to='/bookmarks'>
          <i
            style={{ fontSize: '1.65rem', paddingRight: '1.5rem' }}
            className='far fa-bookmark'
          ></i>
        </Link>
        <i className={icon}></i>
      </h2>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          style={{ opacity: '.3' }}
          placeholder='Search Movies...'
          value={text}
          onChange={onChange}
        />
      </form>
      {search && (
        <button onClick={clearSearch} className='btn btn-light btn-block'>
          Clear
        </button>
      )}
    </div>
  );
};

Search.defaultProps = {
  icon: 'fas fa-search',
};

Search.propTypes = {
  icon: PropTypes.string,
};

export default Search;
