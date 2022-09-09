
export default function UserDashboard(){
    const email = useSelector((state) => state.loginSlice.email)

    return(
        <>
            <h1>{email} Dashboard</h1>
            <p>
                user features
            </p>
            <CreateTicketPool></CreateTicketPool>
            <CreateTicketTable></CreateTicketTable>
        </>
    )
}