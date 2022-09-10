import { useDispatch, useSelector } from "react-redux";
import { logoutStore } from "./loginSlice";


export default function Logout(){
    const email = useSelector((state) => state.loginSlice.email);
    const dispatch = useDispatch();

    function logout(){
        window.localStorage.removeItem("token");
        dispatch(logoutStore);
    }
    return (
        <div style={{float: "right"}}>
            <span>Login as: {email} </span>
            <button onClick={logout}>Logout</button>
        </div>
    )


}