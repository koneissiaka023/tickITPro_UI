import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <nav>

            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <Link to="/register">
                <Button>Register</Button>
            </Link>

        </nav>
    );
}