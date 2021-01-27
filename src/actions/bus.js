import axios from "axios";
import {
  GET_BUSES,
  BUS_ERROR,
  SET_ALERT,
  SET_DATE,
  GET_BUS_BY_ID,
} from "./types";
import { setAlert } from "./alert";

// get all relevant buses acc. to user

export const setDate = (date) => async (dispatch) => {
  dispatch({
    type: SET_DATE,
    payload: date,
  });
};
export const getBuses = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/users/findBus", formData);
    dispatch(setDate(formData.date));
    dispatch({
      type: GET_BUSES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: BUS_ERROR,
    });
  }
};

//ADMIN - Add a bus
export const addBus = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/admin/addBus", formData);

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
      type: BUS_ERROR,
    });
  }
};

export const getBusById = (id, date) => async (dispatch) => {
  try {
    const query = {
      bus: id,
      date: date
    };
    const res = await axios.post("api/users/getBusById", query);
    dispatch({
      type: GET_BUS_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: BUS_ERROR,
    });
  }
};
