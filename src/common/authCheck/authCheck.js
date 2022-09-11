import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function AuthCheck(adminRequired) {
    const { email, admin } = useSelector((state) => state.loginSlice);
    const navigate = useNavigate();

    useEffect(() => {
        email === "anon" && navigate("/login");
        if (adminRequired) {
            admin || navigate("/login");
        }
    }, [email]);
}
