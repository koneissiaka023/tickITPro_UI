import { useContext } from "react"
import { useSelector } from "react-redux"
import { ticketContext } from "./tickets"
import Avatar from "../User/avatar"
import { Card, CardContent, Grid, Typography } from "@mui/material"


export function TicketTableData(props){
    
    const [tickets] = useContext(ticketContext)
    const email = useSelector((state) => state.loginSlice.email)

    function renderTicket(o) {
    
    return(
        // <Grid item md={3}>
        // <Ticket sx={{ maxWidth: 275, display: "flex", minHeight: 325 }} variant="outlined">
        //     <TicketContent>
        //         <Typography textAlign="right" variant="h5" width="100%">
        //             <Avatar id={o.userEmail}></Avatar>
        //         </Typography>
        //         <Typography variant="h5">Description</Typography>
        //         <hr></hr>

        //         <Typography paragraph> {o.description}</Typography>
        //         <hr></hr>

        //         <Typography component="legend">Submission Date</Typography>
        //         <Rating name="read-only" value={o.submissionDate} readOnly />
        //         <Typography component="legend">ProID</Typography>
        //         <Rating name="read-only" value={o.proId} readOnly />
        //         <Typography component="legend">Subject ID</Typography>
        //         <Rating name="read-only" value={o.subjectId} readOnly />
        //         <br></br>
        //         <Chip variant="outlined" label={`Tech: ${o.priority}`}></Chip>

        //         <Chip variant="outlined" label={`Status: ${o.status}`}></Chip>

        //         <TicketActions>
        //             <AddTicketToPool ticket={{ description: o.description, points: o.points, tech: o.tech, status: o.status }} />
        //             {email === o.userEmail && <DeleteTicket id={o.ticketId} />}
        //         </TicketActions>
        //     </TicketContent>
        // </Ticket>
        // </Grid>
        <Grid item md={3}>
            <Card sx={{maxWidth: 275, display: "flex", minheight: 325 }} variant="outlined">
                <CardContent>
                    <Typography textAlign="right" variant="h5" width="100%">
                        <Avatar id={o.email}></Avatar>
                    </Typography>
                    <Typography variant="h5">Description</Typography>
                    <hr></hr>

                    <Typography paragraph> {}</Typography>
                </CardContent>
            </Card>
        </Grid>
        )
    }   
}

