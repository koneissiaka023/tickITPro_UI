
export default function LandingPage() {
    return (
        <>
            <div class = "tickitproName">
                <h1>TickItPro</h1>
            </div>
            <div class = "technicalSupport">
                <img src="./technicalSupport.jpeg" alt="tickitpro logo" />
            </div>
            <div class="layout">
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                </ul>
            </div>
        </>
    );
}