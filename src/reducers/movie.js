import {
  GET_MOVIES,
  MOVIE_ERROR,
  SET_DATE,
  GET_MOVIE_BY_ID,
  SET_MOVIE,
  SET_SEAT,
  GET_MY_FLEET,
  CANCEL_ALL_TICKETS,
} from "../actions/types";

const initialState = {
  movies: [],
  loading: true,
  date: "",
  movie: "",
  seat: "",
  seats: "",
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEAT:
      return {
        ...state,
        seat: payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        movie: payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        seats: payload,
        loading: false,
      };

    case GET_MY_FLEET:
    case GET_MOVIES:
      return {
        ...state,
        seats: [],
        movies: payload,
        loading: false,
      };
    case CANCEL_ALL_TICKETS:
      return {
        ...state,
        seats: Array(40).fill(1),
        loading: false,
      };

    case MOVIE_ERROR:
      return {
        seats: [],
        ...state,
        movies: [],
      };
    default:
      return state;
  }
}

export default movieReducer;
