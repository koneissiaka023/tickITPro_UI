import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "../../components/login-register/loginSlice";
import departmentSlice from "../../components/Department/departmentSlice";

const reducer = combineReducers({loginSlice,departmentSlice});
const store = configureStore({reducer});
export default store;