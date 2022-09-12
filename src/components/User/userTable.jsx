import { findAllByAltText } from "@testing-library/react";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { userEditorRenderContext } from "./adminUserEditor";
import UserTableData from "./userTableData";

export const userContext = createContext();

export default function UserTable() {
    const [users,setUsers] = useState();
    const [creation] = useContext(userEditorRenderContext);

    useEffect(() => {
        console.log("Effect used in User Table");
        findAll();
    },[creation])

    async function findAll() {
        try {
            addAuthToken();
            const response = await tickITProClient.get(`/user/all`);
            setUsers(response.data);
            console.log(users);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
                <table align="center">
                    <thead>
                        <tr>
                            <th align="center">Email</th>
                            <th align="center">First Name</th>
                            <th align="center">Last Name</th>
                            <th align="center">Department</th>
                            <th align="center">Role</th>
                            <th align="center">Change Role?</th>
                        </tr>
                    </thead>
                    {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                    <userContext.Provider value={[users,setUsers]}>
                        {users === undefined || <UserTableData />}
                    </userContext.Provider>
                </table>
        </>
    );
}