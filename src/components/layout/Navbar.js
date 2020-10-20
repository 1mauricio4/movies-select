import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Search from './Search';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-light'>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <Fragment>
        <Search />
      </Fragment>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Movies Select',
  icon: 'fas fa-search',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Navbar;
