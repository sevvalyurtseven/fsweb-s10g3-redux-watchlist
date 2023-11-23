import {
  ADD_FAVORITE,
  FIRST_MOVIE,
  NEXT_MOVIE,
  PREV_MOVIE,
  REMOVE_FAVORITE,
} from "../actions/actions";
import { movies } from "../movies";

const initialState = {
  sira: 0,
  movies: movies,
  favMovies: [],
};

const rootReducer = (state = initialState, action) => {
  //reducerlari olusturalim

  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case PREV_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case FIRST_MOVIE:
      return {
        ...state,
        sira: initialState.sira,
      };
    case ADD_FAVORITE:
      const oldMovie = state.favMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (oldMovie) {
        return state;
      } else {
        return {
          ...state,
          favMovies: [...state.favMovies, action.payload],
        };
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
