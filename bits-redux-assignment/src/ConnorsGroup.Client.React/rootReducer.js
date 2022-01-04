import { combineReducers } from "redux";
import usersReducer from "./features/app/users/reducers/usersReducer";

const rootReducer = combineReducers({ usersReducer });

export default rootReducer;
