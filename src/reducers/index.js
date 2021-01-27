import { combineReducers } from "redux";
import authUser from "./authUser";
import authAdmin from "./authAdmin";
import alert from "./alert";
import bus from "./bus"
export default combineReducers({
  authUser,
  authAdmin,
  alert,
  bus
});
