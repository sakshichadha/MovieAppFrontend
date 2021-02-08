import axios from "axios";
import {
  GET_MY_FLEET,
  GET_MOVIES,
  MOVIE_ERROR,
  SET_ALERT,
  SET_DATE,
  GET_MOVIE_BY_ID,
  SET_MOVIE,
  SET_SEAT,
} from "./types";
import { setAlert } from "./alert";

// get all relevant Movies acc. to user
export const setDate = (date) => async (dispatch) => {
  dispatch({
    type: SET_DATE,
    payload: date,
  });
};

export const setSeat = (num) => async (dispatch) => {
  dispatch({
    type: SET_SEAT,
    payload: num,
  });
};

export const setMovie = (movie) => async (dispatch) => {
  dispatch({
    type: SET_MOVIE,
    payload: movie,
  });
};

export const getMovies = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/users/findMovie", formData);
    dispatch(setDate(formData.date));
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

//ADMIN - Add a bus
export const addMovie = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const res = await axios.post("api/admin/addMovie", formData);

    dispatch({
      type: SET_ALERT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

export const getMovieById = (movie, date) => async (dispatch) => {
  try {
    dispatch(setMovie(movie));
    const query = {
      movie: movie._id,
      date: date,
    };
    const res = await axios.post("api/users/getMovieById", query);

    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

export const getMyMovies = (formData) => async (dispatch) => {
  try {
    const query = {
      // origin: formData.origin,
      // destination: formData.destination,
    };
    const res = await axios.post("api/admin/myMovies", query);
    dispatch(setDate(formData.date));
    dispatch({
      type: GET_MY_FLEET,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MOVIE_ERROR,
    });
  }
};
