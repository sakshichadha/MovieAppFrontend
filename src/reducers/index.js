import { combineReducers } from "redux";
import authUser from "./authUser";
import authAdmin from "./authAdmin";
import alert from "./alert";
import movie from "./movie";
import ticket from "./ticket";
export default combineReducers({
  authUser,
  authAdmin,
  alert,
  movie,
  ticket,
});
