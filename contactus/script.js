function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform further validation or send the form data to a server here.
    // For simplicity, we'll just log the values to the console.
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    alert("Thank you for contacting us!");
    // You might want to redirect the user or perform other actions after form submission.
}
