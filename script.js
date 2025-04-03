document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("form-message");

        if (name && email && message) {
            formMessage.style.color = "green";
            formMessage.textContent = "Thank you for your message, " + name + "!";
            document.getElementById("contact-form").reset();
        } else {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";
        }
    });
});
