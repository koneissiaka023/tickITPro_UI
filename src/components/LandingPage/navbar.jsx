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
                    <Link to="/dashboard">
                        <button>TickITPro Dashboard</button>
                    </Link>
                </>
            )}

            {itpro && (
                <>
                    <Link to="/tickitpro-editor">
                        <button>TickITPro Editor</button>
                    </Link>
                    <Link to="/ticket-pool">
                        <button>View Available Tickets</button>
                    </Link>
                </>
            )}

            {admin && (
                <>
                    <Link to="/user">
                        <button>User Editor</button>
                    </Link>
                    <Link to="/department">
                        <button>Department Editor</button>
                    </Link>
                    <Link to="/subject">
                        <button>Subject Editor</button>
                    </Link>
                </>
            )}
        </nav>
    );
}