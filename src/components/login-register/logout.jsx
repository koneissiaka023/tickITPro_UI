import { Button, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutStore } from "./loginSlice";


export default function Logout(){
    const email = useSelector((state) => state.loginSlice.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout(){
        window.localStorage.removeItem("token");
        dispatch(logoutStore());
        navigate("/");
    }
    return (
        <div>
            <img className="profile" src={`https://avatars.dicebear.com/api/bottts/${email}.svg`}/>
            <span>Login as: {email} </span>
            <Button className = "navbarButtons" onClick={logout}>Logout</Button>
        </div>
           
    )
}