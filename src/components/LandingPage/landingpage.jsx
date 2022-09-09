import Login from "../login-register/login";
import Register from "../login-register/register";

export default function LandingPage() {
    return (
        <>
            <div className = "tickitproName">
                <h1>TickItPro</h1>
            </div>
            {/* <div class = "technicalSupport">
                <img src="./technicalSupport.jpeg" alt="tickitpro logo" />
            </div> */}
            <div className="layout">
                <ul>
                    {/* <li><a class="active" href="#home">Home</a></li> */}
                    {/* <li><a href="#login">Login</a></li> */}
                    <Login></Login>
                    {/* <button>Login</button> */}
                    <Register></Register>
                    {/* <li><a href="#register">Register</a></li> */}
                </ul>
            </div>
        </>
    );
}