import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage";
import Navbar from "./components/LandingPage/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="" element={<LandingPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
=======

>>>>>>> db1b7469beed48c7e04a15fbbbc3f8a47dedaec5
    </div>
  );
}

export default App;
