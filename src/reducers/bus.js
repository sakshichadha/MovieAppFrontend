import {
  GET_BUSES,
  BUS_ERROR,
  SET_DATE,
  GET_BUS_BY_ID,
} from "../actions/types";

const initialState = {
  buses: [],
  loading: true,
  date: "",
  bus: "",
  seats:Array(40).fill(0)
};

function busReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case GET_BUS_BY_ID:
      return {
        ...state,
        seats: payload,
        loading: false,
      };

    case GET_BUSES:
      return {
        ...state,
        seats:[],
        buses: payload,
        loading: false,
      };
    case BUS_ERROR:
      return {
        seats:[],
        ...state,
        buses: [],
      };
    default:
      return state;
  }
}

export default busReducer;
