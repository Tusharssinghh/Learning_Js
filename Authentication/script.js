function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform a simple check for demonstration purposes
    if (username === "user" && password === "password") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("welcome-container").classList.remove("hidden");
        document.getElementById("user-display").innerText = username;
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function logout() {
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("welcome-container").classList.add("hidden");
    // You might want to clear any user-related data or perform additional logout actions.
}
