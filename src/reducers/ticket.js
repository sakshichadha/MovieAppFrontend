import {
    MY_TICKETS,
    TICKET_ERROR
  } from "../actions/types";
  
  const initialState = {
    tickets:"",
    loading:true
  };
  
  function ticketReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
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
  