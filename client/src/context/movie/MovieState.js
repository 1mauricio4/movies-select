import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import {
  GET_MOVIES,
  SORT_MOVIES,
  SET_MOVIE,
  SEARCH_MOVIES,
  SET_BOOKMARK,
  SET_LOADING,
  CLEAR_SEARCH,
  MOVIE_ERROR,
} from '../types';

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    genre: {},
    bookmarks: {},
    search: false,
    loading: false,
    errors: null,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const config = {
    headers: {
      Authorization: 'Bearer Wookie2019',
    },
  };

  // Get all the movies available
  const initialMovies = async () => {
    setLoading();

    const path = 'https://wookie.codesubmit.io/movies';

    try {
      // Make request to the api with the proper credentials
      const res = await axios.get(path, config);

      const movies = res.data.movies;

      // Hash table to organize genre
      let objGen = {};

      // Recursive func to reach genre array and extract values
      const recMovies = async (arrM, obj) => {
        for (let m of arrM) {
          if (typeof m === 'string') {
            // Populate hash table with key value pairs
            objGen[m] = objGen[m] ? [obj, ...objGen[m]] : [obj];
          } else {
            // Call recursive function if genre hasn't been reached
            await recMovies(m.genres, m);
          }
        }
      };

      await recMovies(movies, null);

      // Set genre state with sorted object
      await dispatch({
        type: SORT_MOVIES,
        payload: objGen,
      });

      // Set movie state with movies array
      await dispatch({
        type: GET_MOVIES,
        payload: movies,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get for current movie
  const getMovie = async (slug) => {
    setLoading();
    // Query wookie api
    const path = 'https://wookie.codesubmit.io/movies';

    try {
      // Query wookie api for all movies
      /* Not using slug has proven a bit unreliable */
      const res = await axios.get(path, config);
      const movies = res.data.movies;
      // Filter for matching movie
      const movie = movies.filter((movie) => movie.slug === slug);

      await dispatch({
        type: SET_MOVIE,
        payload: movie[0],
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Search for movies
  const searchMovies = async (query) => {
    setLoading();
    const path = `https://wookie.codesubmit.io/movies?q=${query}`;

    try {
      const res = await axios.get(path, config);

      const movies = res.data.movies;

      let objGen = {};

      // Recursive func to reach genre array and extract values
      const recMovies = async (arrM, obj) => {
        for (let m of arrM) {
          if (typeof m === 'string') {
            // Populate hash table with key value pairs
            objGen[m] = objGen[m] ? [obj, ...objGen[m]] : [obj];
          } else {
            // Call recursive function if genre hasn't been reached
            await recMovies(m.genres, m);
          }
        }
      };

      await recMovies(movies, null);

      // Set genre state with sorted object
      await dispatch({
        type: SEARCH_MOVIES,
        payload: objGen,
      });
    } catch (err) {
      dispatch({
        type: MOVIE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setBookmark = (movie, oldbookmarks) => {
    const id = movie.id;

    const newBookmark = {
      [id]: {
        title: movie.title,
        poster: movie.poster,
        id: id,
        slug: movie.slug,
      },
    };

    const updatedBookmarks = Object.assign(newBookmark, oldbookmarks);

    console.log('updatedBoomarks: ', updatedBookmarks);

    dispatch({
      type: SET_BOOKMARK,
      payload: updatedBookmarks,
    });
  };

  // Clear search
  const clearSearch = async () => {
    await dispatch({ type: CLEAR_SEARCH });

    initialMovies();
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        genre: state.genre,
        search: state.search,
        bookmarks: state.bookmarks,
        loading: state.loading,
        errors: state.errors,
        initialMovies,
        getMovie,
        searchMovies,
        setBookmark,
        clearSearch,
      }}
    >
      {/* Whatever component gets wrapped around with the MovieState will be conected */}
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
