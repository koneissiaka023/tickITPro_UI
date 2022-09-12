import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { loginStore } from "./loginSlice";


export default function Login() {
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const [loginStatus, setLoginStatus] = useState(); // use state default value is undefined


    async function login() {
        const body = { email: emailInput.current.value, password: passwordInput.current.value };

        try {
            const response = await tickITProClient.post("/auth", body);

            // Fetch LOWERCASES all Header Keys
            console.log(response.data);
            setLoginStatus(undefined);

            window.localStorage.setItem("token", response.headers.authorization);
            dispatch(loginStore(response.data));
            navigate("/user-dashboard");
        } catch (error) {
            console.log(error.response.data);
            if (error.response.status === 404) {
                let loginFailed = `Email or Password was incorrect for email: ${body.email}`;
                setLoginStatus(loginFailed);
            }
        }
    }

    // Return
    return (
        <>
            <label htmlFor="loginEmail"><b>Email</b></label>
            <input id="loginEmail" type="text" placeholder="user@mail.com" ref={emailInput} required/>
            <label htmlFor="loginPassword"><b>Password</b></label>
            <input id="loginPassword" type="password" placeholder="Password123!" ref={passwordInput} required/>
            <div></div>
            <button onClick={login} type="submit">Login</button>
            {loginStatus === undefined ? <p></p> : <p>{loginStatus}</p>}
            
        </>
    );
}