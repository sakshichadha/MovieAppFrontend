import {
    MY_TICKETS,
    TICKET_ERROR,
    TICKET_INFO
  } from "../actions/types";
  
  const initialState = {
    ticket:"",
    tickets:"",
    loading:true
  };
  
  function ticketReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case TICKET_INFO:
        return {
          ...state,
          ticket: payload,
          loading:false
        };
      case MY_TICKETS:
        return {
          ...state,
          tickets: payload,
          loading:false
        };
      case TICKET_ERROR:
        return {
          ...state,
          tickets:""
        };
      default:
        return state;
    }
  }
  
  export default ticketReducer;
  