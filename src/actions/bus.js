import axios from "axios";
import {
  GET_MY_FLEET,
  GET_BUSES,
  BUS_ERROR,
  SET_ALERT,
  SET_DATE,
  GET_BUS_BY_ID,
  SET_BUS,
  SET_SEAT
} from "./types";
import { setAlert } from "./alert";

// get all relevant buses acc. to user
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



export const setBus = (bus) => async (dispatch) => {
  dispatch({
    type: SET_BUS,
    payload: bus,
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

export const getBusById = (bus, date) => async (dispatch) => {
  try {
    dispatch(setBus(bus));
    const query = {
      bus: bus._id,
      date: date,
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


export const getMyBuses = (formData) => async (dispatch) => {
  try {
    const res = await axios.get("api/admin/myBuses");
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
      type: BUS_ERROR,
    });
  }
};


