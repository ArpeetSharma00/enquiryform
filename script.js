document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = { name, email, message };

    fetch("https://script.google.com/macros/s/AKfycbwMvQgINJznMRo2NOa1ahGPANxjClgo0Md4bqFbPIYNAxKYARwmdtSafnHI-zP3s6G0iQ/exec", {  // Replace this
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
