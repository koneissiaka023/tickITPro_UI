import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login-register/login";
import Register from "./components/login-register/register";
import LandingPage from "./components/LandingPage/landingpage";
import { Provider } from "react-redux";
import store from "./common/store/store";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        <Route exact path="" element={<LandingPage />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="register" element={<Register></Register>} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;