// JSX looks like HTML but is JavaScript!
function App() {
    const myName = "Bella"; 
    const isLoggedIn = true;

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // Get current hour for time‑of‑day message
    const currentHour = new Date().getHours();
    const timeMessage = currentHour < 12 
        ? "Good morning! ☀️" 
        : currentHour < 18 
        ? "Good afternoon! 🌤️" 
        : "Good evening! 🌙";

    return (
        <div>
            {/* This is a comment in JSX */}
            <h1>Hello, {myName}!</h1>

            {/* JavaScript expressions in curly braces */}
            <p>2 + 2 = {2 + 2}</p>

            {/* Three paragraphs about yourself */}
            <p>I love building web apps with React and exploring new technologies.</p>
            <p>In my free time, I enjoy hiking, reading sci‑fi novels, and learning guitar.</p>
            <p>My goal is to create useful, accessible software that makes people's lives easier.</p>

            {/* Display current date */}
            <p>Today's date is: {currentDate}</p>

            {/* Conditional message based on time of day */}
            <p>{timeMessage}</p>

            {/* Original conditional rendering examples */}
            {isLoggedIn && <p>Welcome back!</p>}
            <p>{isLoggedIn ? "Logged in" : "Please log in"}</p>
        </div>
    );
}

export default App; // Added export for modular usage