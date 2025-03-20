document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = { name, email, message };

    fetch("https://script.google.com/macros/s/AKfycbyDisBarkAbjI1KNCzSWFzFLAVSExSuCZHnB4yEv1pNXL34jYl1y7OzG2cGJriQGr_1uQ/exec", {  // Replace with your Web App URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        async function loadGoogleSheetCSV() {
    const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqA5Utyz2ItcgUnMgWppHqIBpEYBW6Ia0vsJst5mBSTpOh_WSp7eyv4K2Ew2RSXS9Q6c08m8YHpqto/pub?output=csv"); // Replace with your Google Sheet CSV URL
    const data = await response.text();
    displayData(data);
}

// Reuse the same `displayData()` function from above
document.addEventListener("DOMContentLoaded", loadGoogleSheetCSV);

    .then(response => response.text())
    .then(result => {
        alert("Enquiry submitted successfully!");
        document.getElementById("enquiryForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
