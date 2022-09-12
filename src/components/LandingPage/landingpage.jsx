import Login from "../login-register/login";
import Register from "../login-register/register";

export default function LandingPage() {
    return (
        <>
            <div className="background_image">
                <div className="layout">
                    <ul className="login_button">
                        <div>
                            <Login></Login>
                        </div>
                    </ul>
                    <ul>
                        <div className="register_button">
                            <Register></Register>
                        </div>
                    </ul>
                </div>
            </div>    
        </>
    );
}