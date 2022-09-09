import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "../../components/login-register/loginSlice";

const reducer = combineReducers({loginSlice});
const store = configureStore({reducer});
export default store;