import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthCheck from "../../common/authCheck/authCheck";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketTable from "./ticketTable";

export default function CreateTicket() {
   
    AuthCheck(false);

    const [formData, setFormData] = useState({
        description: "",
        priority: "DEFAULT",
        subject: "",
        status: "PENDING",
    });
    const [submit, setSubmit] = useState(true);

    async function newTicket(e) {
        e.preventDefault();
        try {
            addAuthToken();
            await tickITProClient.post("/ticket/multi", formData);
            submit ? setSubmit(false) : setSubmit(true);
        } catch (error) {
            console.log(error);
        }
    }

    const formFunctions = {
        description: function (event) {
            setFormData({ ...formData, description: event.target.value });
        },
        priority: function (event) {
            setFormData({ ...formData, priority: event.target.value });
        },
        subject: function (event) {
            setFormData({ ...formData, subject: event.target.value });
        },
        status: function (event) {
            setFormData({ ...formData, status: event.target.value });
        },
    };

    return (
        <>
            <form>
                <label>Description:</label>
                <textarea class="ticket" placeholder="i.e describe your issue" onChange={formFunctions.description} />
                <br />

                <div>
                    <label>Priority:</label>
                    <input type="radio" id="techRadio1" name="priority" value="DEFAULT" onChange={formFunctions.priority} />
                    <label>Default</label>
                    <input type="radio" id="techRadio2" name="priority" value="LOW_PRIORITY" onChange={formFunctions.priority} />
                    <label>LowPriority</label>
                    <input type="radio" id="techRadio3" name="priority" value="HIGH_PRIORITY" onChange={formFunctions.priority} />
                    <label>HighPriority</label>
                </div>

                <label>SubjectId:</label>
                <textarea class="ticket" placeholder="i.e enter subject ID" onChange={formFunctions.subject} />
                <br />

                <div>
                    <label>Status:</label>
                    <input type="radio" id="techRadio1" name="status" value="PENDING" onChange={formFunctions.status} />
                    <label>Default</label>
                    <input type="radio" id="techRadio2" name="status" value="CONFIRMED" onChange={formFunctions.status} />
                    <label>LowPriority</label>
                    <input type="radio" id="techRadio3" name="status" value="RESOLVED" onChange={formFunctions.status} />
                    <label>HighPriority</label>
                </div>

                <input type="hidden" id="prioritySelect" class="ticket" value=""></input>
                <input type="hidden" id="statusSelect" class="ticket" value=""></input>

                <button onClick={newTicket}>Create Ticket</button>
            </form>
            <TicketTable></TicketTable>
        </>
    );
}
