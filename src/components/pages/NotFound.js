import React from 'react';

// Necessary incase users head to the wrong url
const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'>The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;
