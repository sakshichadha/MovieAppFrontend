import axios from "axios";
import { setAlert } from "./alert";
import { MY_TICKETS, TICKET_ERROR } from "./types";

export const myTickets = () => async (dispatch) => {
  try {
    const res = await axios.post("api/users/myTickets");
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
