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

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case SORT_MOVIES:
      return {
        ...state,
        genre: action.payload,
        loading: false,
      };
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        genre: action.payload,
        search: true,
        loading: false,
      };
    case SET_BOOKMARK:
      return {
        ...state,
        bookmarks: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        genre: {},
        search: false,
        loading: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
