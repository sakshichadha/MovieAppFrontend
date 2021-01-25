import {
  REGISTER_USER_SUCCESS,
  REGISTER_ADMIN_SUCCESS,
  //   REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_ADMIN_SUCCESS,
  //   LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_USER_SUCCESS:
    case REGISTER_ADMIN_SUCCESS:
    case LOGIN_USER_SUCCESS:
    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
