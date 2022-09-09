
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
            console.log(response.data)
        } catch (error){
            console.log(error.response.data)
        }
    }

    const formFunctions = {
        description: function(event){
            setFormData({ ...formData, description: event.target.value})
        },
        status: function(event){
            setFormData({...formData, status: event.target.value})
        },
        priority: function(event){
            setFormData({...formData, status: event.target.value})
        },
        itPro: function(event){
            setFormData({...formData, status: event.target.value})
        }
    }


    return (
        <>
        </>
    )
}