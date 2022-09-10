import { useContext } from "react"
import { useSelector } from "react-redux"
import { ticketContext } from "./tickets"
import Avatar from "../User/avatar"
import { Card, CardActions, CardContent, Chip, Grid, Rating, Typography } from "@mui/material"
import AddTicketToPool from "./createTicket"


export function TicketTableData(props){
    
    const [tickets] = useContext(ticketContext)
    const email = useSelector((state) => state.loginSlice.email)

    function renderTicket(o) {
    
    return(
        <Grid item md={3}>
            <Card sx={{maxWidth: 275, display: "flex", minheight: 325 }} variant="outlined">
                <CardContent>
                    <Typography textAlign="right" variant="h5" width="100%">
                        <Avatar id={o.email}></Avatar>
                    </Typography>
                    <Typography variant="h5">Description</Typography>
                    <hr></hr>

                    <Typography paragraph> {o.description}</Typography>
                    <hr></hr>

                    <Typography component="legend">Priority</Typography>
                    <Rating name="read-only" value={o.priority} readOnly/>
                    <br></br>
                    <Chip variant="outlined" label={`Status: ${o.status}`}></Chip>
                    

                    <Chip variant="outlined" label={`subject: ${o.subject}`}></Chip>
                    <CardActions>
                        <AddTicketToPool tick={{description: o.description, priority: o.priority, status: o.status, subject: o.subject }} />
                        {email === o.emailc}
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
        );
    }  
    let ticketArray;
    if (props.filter === true){
        console.log("hi");
        ticketArray = tickets
        .filter((t) => t.email === email && t)
        .map((o) => {
            return renderTicket(o);
        });
    } else {
        console.log("no");

        ticketArray = tickets.map((o) => {
            return renderTicket(o);
        });
    }
    console.log(ticketArray);
}

