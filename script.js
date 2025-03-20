document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = { name, email, message };

    fetch("YOUR_GOOGLE_SCRIPT_DEPLOYMENT_URL", {  // Replace with your Web App URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        alert("Enquiry submitted successfully!");
        document.getElementById("enquiryForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
