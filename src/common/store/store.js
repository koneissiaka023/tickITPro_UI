import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "../../components/login-register/loginSlice";
import TicketPoolSlice from "../../components/dashboard/ticketPoolSlice";

const reducer = combineReducers({loginSlice, TicketPoolSlice});
const store = configureStore({reducer});
export default store;