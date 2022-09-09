import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage";
import Navbar from "./components/LandingPage/navbar";
import './App.css';
import Register from "./components/login-register/register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="" element={<LandingPage />} />
            <Route path="register" element={<Register></Register>}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
