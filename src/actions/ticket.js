import axios from "axios";
import { setAlert } from "./alert";
import { MY_TICKETS, TICKET_ERROR,SET_ALERT } from "./types";

export const myTickets = () => async (dispatch) => {
  try {
    console.log("FFFFFFFFFFFFFFFF");
    const res = await axios.get("api/users/myTickets");
    dispatch({
      type: MY_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
    });
  }
};


export const bookBus = (_id,name,email,phone,seat,date) => async (dispatch) => {
    try {
  
      const query = {
        bus: _id,
        date: date,
        seat:seat,
        email:email,
        phone:phone,
        name:name
      };
      const res = await axios.post("api/users/bookTicket", query);
  
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
        type: TICKET_ERROR,
      });
    }
  };