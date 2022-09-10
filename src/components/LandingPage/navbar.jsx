import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
    const {email, admin, itpro} = useSelector((state) => state.loginSlice);

    return (
        <nav>
            {email === "anon" || (
                <>
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
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