import {
  GET_BUSES,
  BUS_ERROR,
  SET_DATE,
  GET_BUS_BY_ID,
  SET_BUS,
  SET_SEAT,
  GET_MY_FLEET
} from "../actions/types";

const initialState = {
  buses: [],
  loading: true,
  date: "",
  bus: "",
  seat:"",
  seats:""
};

function busReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEAT:
      return {
        ...state,
        seat:payload
      }
    case SET_BUS:
      return{
        ...state,
        bus:payload
      }
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

      case GET_MY_FLEET:
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
