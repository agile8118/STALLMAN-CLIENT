import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  profile: profileReducer,
  notification: notificationReducer
});
