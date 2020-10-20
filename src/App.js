import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
import Alert from './components/layout/Alert';
import NotFound from './components/pages/NotFound';
import Bookmarks from './components/pages/Bookmarks';

// States
import MovieState from './context/movie/MovieState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Movies} />
                <Route exact path='/detail/:slug' component={Movie} />
                <Route exact path='/bookmarks' component={Bookmarks} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
