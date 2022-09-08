import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage";
import Navbar from "./components/LandingPage/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
<p>yeah its sam</p>    </div>
=======
<<<<<<< HEAD
      
=======
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="" element={<LandingPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
>>>>>>> 30bb0b5303c76aa65bd563dee0af647ab3c5ff4a
=======

>>>>>>> db1b7469beed48c7e04a15fbbbc3f8a47dedaec5
    </div>
>>>>>>> b3dcf08c11d582ff2f369472628a76ff2eb37a5b
  );
}

export default App;
