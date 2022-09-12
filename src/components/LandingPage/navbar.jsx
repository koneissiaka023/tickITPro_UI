import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../login-register/logout";

export default function Navbar() {
    const {email, admin, itpro} = useSelector((state) => state.loginSlice);

    return (
        <>
        <nav>
            {email === "anon" || (
                <>
                    <Link to="/settings">
                        <button className = "navbarButtons">Settings</button>
                    </Link>
                    <Link to="/user-dashboard">
                        <button className = "navbarButtons">User Dashboard</button>
                    </Link>
                </>
            )}

            {itpro && (
                <>
                    <Link to="/itpro-dashboard">
                        <button className = "navbarButtons">ITPro Dashboard</button>
                    </Link>
                    <Link to="/available-tickets">
                        <button className = "navbarButtons">Available Tickets</button>
                    </Link>
                </>
            )}

            {admin && (
                <>
                    <Link to="/admin-user-editor">
                        <button className = "navbarButtons">Admin User Editor</button>
                    </Link>
                    <Link to="/admin-department-editor">
                        <button className = "navbarButtons">Admin Department Editor</button>
                    </Link>
                    <Link to="/admin-subject-editor">
                        <button className = "navbarButtons">Admin Subject Editor</button>
                    </Link>
                </>
            )}
        </nav>
        {email === "anon" || (
            <Logout></Logout>
        )}
    </>
    );
}