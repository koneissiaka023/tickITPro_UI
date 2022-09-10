import { createContext, useContext, useEffect, useState } from "react";
import { tickITProClient } from "../../common/remote/tickitpro-client.js";
import { TicketTableData } from "./ticketData.jsx";
import {
    Button,
    FormControlLabel,
    Grid,
    Switch,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { creationRenderContext } from "./ticketDashboard.jsx";


export const ticketContext = createContext();

export default function TicketTable() {
    const [tickets, setTickets] = useState();
    const [showTable, setShowTable] = useState(true);
    const [filterMine, setFilterMine] = useState(false);
    const [creation] = useContext(creationRenderContext);

    // one more hook - useEffect - this causes a side effect whenever a page is render or a state variable is changed
    useEffect(() => {
        console.log("effect invoked");
        showTable && findAll();
    }, [creation, showTable]); // the empty array indicates to only render this side effect when the page is first loaded

    async function findAll() {
        try {
            const response = await tickITProClient.get("/ticket");
            console.log(response.data);
            setTickets(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function renderTable() {
        showTable ? setShowTable(false) : setShowTable(true);
    }
    function filterTable() {
        filterMine ? setFilterMine(false) : setFilterMine(true);
    }

    return (
        <>
            <Box textAlign="center">
                <Button variant="contained" onClick={renderTable}>
                    Show Tickets
                </Button>
            </Box>
            <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
                <FormControlLabel control={<Switch />} label="Filter My Tickets" onChange={filterTable} />
            </Box>
            {showTable === true ? (
                <Grid container spacing={2}>
                    <ticketContext.Provider value={[tickets, setTickets]}>
                        {tickets === undefined || <TicketTableData filter={filterMine}></TicketTableData>}
                    </ticketContext.Provider>
                </Grid>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
