import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthCheck from "../../common/authCheck/authCheck";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import SubjectDropDown from "../Subject/subjectDropdown";
import AddTicketToPool from "./addTicketToPool";
import { sendTicket } from "./ticketPoolSlice";

export const ticketCreationContext = createContext();

export default function CreateTicket() {
    {/* AuthCheck(false); */}
    const email = useSelector((state) => state.loginSlice.email);
    const [message, setMessage] = useState();

    {/* const tickets = useSelector((state) => state.AddTicketToPool); */}

    const [formData, setFormData] = useState({
        description: "",
        priority: "DEFAULT",
        subjectId: ""
    });
    const [submit, setSubmit] = useState(true);

    function defaultSub(e) {
        e.preventDefault();
    }

    async function submitTicket(e) {
        e.preventDefault();
        try {
            addAuthToken();
            console.log(formData);
            const response = await tickITProClient.post("/ticket", formData);
            console.log(response.data);
            setMessage(`Ticket has been successfully submitted! ${response.data.ticketId}`);
        } catch (error) {
            console.log(error.response.data);

            if(error.response.status === 400){
                setMessage(`Could not create ticket: ${error.response.data}`);
            }
        }
    }

    const formFunctions = {
        description: function (event) {
            setFormData({ ...formData, description: event.target.value });
        },
        priority: function (event) {
            setFormData({ ...formData, priority: event.target.value });
        },
        subjectId: function (event) {
            setFormData({ ...formData, subjectId: event.target.value });
        }
    };

    return (
        <>

            <form onSubmit={defaultSub}>
                <label>Description:</label>
                <textarea className="ticket" placeholder="i.e describe your issue" onChange={formFunctions.description} />
                <br />

                <div>
                    <label>Priority:</label>
                    <input type="radio" id="techRadio1" name="priority" value="DEFAULT" onChange={formFunctions.priority} />
                    <label>DEFAULT</label>
                    <input type="radio" id="techRadio2" name="priority" value="LOW_PRIORITY" onChange={formFunctions.priority} />
                    <label>LOW_PRIORITY</label>
                    <input type="radio" id="techRadio3" name="priority" value="HIGH_PRIORITY" onChange={formFunctions.priority} />
                    <label>HIGH_PRIORITY</label>
                </div>

                <label>Subject:</label>
                <ticketCreationContext.Provider value={[formData,setFormData]}>
                    {/*<SubjectDropDown />*/}
                </ticketCreationContext.Provider>
                <br />

                <input type="hidden" id="prioritySelect" className="ticket" value=""></input>

                {/*<AddTicketToPool ticket={formData} /> */}
                <button onClick={submitTicket}>Submit Ticket</button>
            </form>
            <p>{message}</p>
            
        </>
    );
}
