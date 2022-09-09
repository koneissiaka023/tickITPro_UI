import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage";
import Settings from "./components/Settings/settings";
import TicketDashboard from "./components/Ticket/ticketDashboard";
import TickITProEditor from "./components/Ticket/tickITProEditor";
import TicketPool from "./components/Ticket/ticketPool";
import UserEditor from "./components/User/userEditor";
import DepartmentEditor from "./components/Department/departmentEditor";
import SubjectEditor from "./components/Subject/subjectEditor";
import Navbar from "./components/LandingPage/navbar";
import store from "./common/store/store";

import './App.css';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
<<<<<<< HEAD:src/App.js
        <Provider store={store}>
=======
      <Provider store={store}>
        
>>>>>>> 8530737b246cdc0d6e7352480ab5ff812194d23c:src/App.jsx
          <Routes>
            <Route exact path="" element={<LandingPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path="ticket" element={<TicketDashboard />} />
            <Route path="tickitpro-editor" element={<TickITProEditor />} />
            <Route path="ticket-pool" element={<TicketPool />} />
            <Route path="user" element={<UserEditor />} />
            <Route path="department" element={<DepartmentEditor />} />
            <Route path="subject" element={<SubjectEditor />} />
<<<<<<< HEAD:src/App.js
          </Routes>
        </Provider>
=======
            
        
          </Routes>
          </Provider>
>>>>>>> 8530737b246cdc0d6e7352480ab5ff812194d23c:src/App.jsx
      </BrowserRouter>
    </div>
  );
}

export default App;