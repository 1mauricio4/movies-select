import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// States
import MovieState from './context/movie/MovieState';
import AlertState from './context/alert/AlertState';

import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Alert from './components/layout/Alert';
import NotFound from './components/pages/NotFound';
import Bookmarks from './components/pages/Bookmarks';

const Movie = lazy(() => import('./components/movies/Movie'));
const Search = lazy(() => import('./components/pages/Search'))

const App = () => {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alert />
              <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail/:slug' component={Movie} />
                <Route exact path='/bookmarks' component={Bookmarks} />
                <Route exact path='/search/:query' component={Search} />
                <Route component={NotFound} />
              </Switch>
              </Suspense>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
