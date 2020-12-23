import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import profileReducer from "./profileReducer";
import sheduleReducer from "./sheduleReducer";
import curDocReducer from "./curDocReducer";
import appListReducer from "./appListReducer";

export default combineReducers({
  auth: authReducer,
  applist: appListReducer,
  alert: alertReducer,
  profile: profileReducer,
  curDoc: curDocReducer,
  shedule: sheduleReducer,
});
