
export default function CreateTicketPool(){
    AuthCheck(false);

    const tickets = useSelector((state) => state.ticketPoolSlice.tickets)

    const [formData, setFormData] = useState({
        description: "",
        status: "", //unsure
        priority: ""
    })

    const[submit, setSubmit] = useState(true);

    function defaultSub(e){
        e.preventDefault();
    }

    async function submitTickets(){
        try{
            addAuthToken();
            const response = await tickITProClient.post("/ticket/multi", tickets)

        }
    }

    const formFunction ={
        description: function(event){
            setFormData({})
        }
    }


}