import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AuthCheck from "../../common/authCheck/authCheck";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import AddTicketToPool from "./addTicketToPool";

export default function Dashboard() {

    const email = useSelector((state) => state.loginSlice.email);

    const tickets = useSelector((state) => state.AddTicketToPool);

    const [formData, setFormData] = useState({
        description: "",
        priority: "DEFAULT",
        subject: "",
        status: "PENDING",
    });
    const [submit, setSubmit] = useState(true);

    function defaultSub(e) {
        e.preventDefault();
    }

    async function submitTickets() {
        try {
            addAuthToken();
            const response = await tickITProClient.post("/ticket/multi", tickets);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
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
            <h1>Welcome to TickItPro Dashboard</h1>
            <p>
                Tickets you create will be submitted under the account: {email}
            </p>

            {/* <CreateTicketPool />
            <TicketPoolTable /> */}

            <form onSubmit={defaultSub}>
                <label>Description:</label>
                <textarea class="ticket" placeholder="i.e describe your issue" onChange={formFunctions.description} />
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

                <label>SubjectId:</label>
                <textarea class="ticket" placeholder="i.e enter subject ID" onChange={formFunctions.subject} />
                <br />

                <div>
                    <label>Status:</label>
                    <input type="radio" id="techRadio1" name="status" value="PENDING" onChange={formFunctions.status} />
                    <label>PENDING</label>
                    <input type="radio" id="techRadio2" name="status" value="CONFIRMED" onChange={formFunctions.status} />
                    <label>CONFIRMED</label>
                    <input type="radio" id="techRadio3" name="status" value="RESOLVED" onChange={formFunctions.status} />
                    <label>RESOLVED</label>
                </div>

                <input type="hidden" id="prioritySelect" class="ticket" value=""></input>
                <input type="hidden" id="statusSelect" class="ticket" value=""></input>

                <AddTicketToPool ticket={formData} />
            </form>

            <button onClick={submitTickets}>Send Pool</button>
            
        </>
    );
}
