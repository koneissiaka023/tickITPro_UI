import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../login-register/logout";

export default function Navbar() {
    const {email, admin, itpro} = useSelector((state) => state.loginSlice);

    return (
        <nav>
            {email === "anon" || (
                <>
                    
                    <Logout></Logout>
                    <Link to="/settings">
                        <button>Settings</button>
                    </Link>
                    <Link to="/user-dashboard">
                        <button>User Dashboard</button>
                    </Link>
                </>
            )}

            {itpro && (
                <>
                    <Link to="/itpro-dashboard">
                        <button>ITPro Dashboard</button>
                    </Link>
                    <Link to="/available-tickets">
                        <button>Available Tickets</button>
                    </Link>
                </>
            )}

            {admin && (
                <>
                    <Link to="/admin-user-editor">
                        <button>Admin User Editor</button>
                    </Link>
                    <Link to="/admin-department-editor">
                        <button>Admin Department Editor</button>
                    </Link>
                    <Link to="/admin-subject-editor">
                        <button>Admin Subject Editor</button>
                    </Link>
                </>
            )}
        </nav>
    );
}