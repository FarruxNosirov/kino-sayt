import { combineReducers } from "redux";
import Reducer from "./Data";

const allReduser = combineReducers({
  reducer: Reducer,
});
export default allReduser;
