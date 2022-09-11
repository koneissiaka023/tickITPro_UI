import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingpage";
import Settings from "./components/User/settings";
import UserDashboard from "./components/dashboard/userDashboard";
import ITProDashboard from "./components/Ticket/itProDashboard";
import AdminUserEditor from "./components/User/adminUserEditor";
import AdminDepartmentEditor from "./components/Department/adminDepartmentEditor";
import AdminSubjectEditor from "./components/Subject/adminSubjectEditor";
import Navbar from "./components/LandingPage/navbar";
import store from "./common/store/store";
import './App.css';
import AvailableTickets from "./components/Ticket/availableTickets";
import { createContext } from "react";

export const subjectDropdownContext = createContext();
export const departmentDropdownContext = createContext();
export const ticketTableContext = createContext();


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="" element={<LandingPage />} /> {/* LandingPage (Anonymous Users can register an account, existing users can login to their account) */}
            <Route path="settings" element={<Settings />} /> {/* Settings (All Users can view their Account details, update their account details, or delete their account) */}
            <Route path="user-dashboard" element={<UserDashboard />} /> {/* UserDashboard (All Users can view Tickets they've created, create a ticket, and edit their created tickets) */}
            <Route path="itpro-dashboard" element={<ITProDashboard />} /> {/*ITProDashboard (ITPro can view tickets they've confirmed and edit their status, description, and subject ) */}
            <Route path="available-tickets" element={<AvailableTickets />} /> {/* AvailableTickets (ITPro confirms tickets in here which get added to their TicketPool) */}
            <Route path="admin-user-editor" element={<AdminUserEditor />} /> {/* AdminUserEditor (Admins can change User Role or Delete Users) */}
            <Route path="admin-department-editor" element={<AdminDepartmentEditor />} /> {/* AdminDepartmentEditor (Admins can create/update/delete Departments in the system) */}
            <Route path="admin-subject-editor" element={<AdminSubjectEditor />} /> {/* AdminSubjectEditor (Admins can create/update/delete Subjects in the system) */}
            {/* <Route path="tickets" element={ <TicketTable />} /> */}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;