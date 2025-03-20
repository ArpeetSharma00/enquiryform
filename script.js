document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = { name, email, message };

    fetch("https://script.google.com/macros/s/AKfycbwyxuzosEJRtXAH64Ka5rHDYpHNo19lgRygY3vX9mOrjM2AKkOYXbCctTpimT1E23PwIg/exec", {  // Replace with your Web App URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        alert("Enquiry submitted successfully!");
        document.getElementById("enquiryForm").reset();
        loadEnquiries();  // Fetch latest enquiries
    })
    .catch(error => console.error("Error:", error));
});

function loadEnquiries() {
    fetch("https://docs.google.com/spreadsheets/d/1Og5z-xy4tpvDjS9axcMdjS74Jxb0s6Fx5yEsKGnbPAQ/gviz/tq?tqx=out:csv

") // Replace with your Google Sheets public CSV URL
    .then(response => response.text())
    .then(csvData => {
        let rows = csvData.split("\n").slice(1);  // Skip headers
        let enquiryList = document.getElementById("enquiryList");
        enquiryList.innerHTML = "";

        rows.forEach(row => {
            let columns = row.split(",");
            if (columns.length < 3) return;

            let div = document.createElement("div");
            div.classList.add("enquiry");
            div.innerHTML = `
                <strong>${columns[0]}</strong> (${columns[1]})
                <p>${columns[2]}</p>
            `;
            enquiryList.appendChild(div);
        });
    })
    .catch(error => console.error("Error loading enquiries:", error));
}

// Load existing enquiries on page load
document.addEventListener("DOMContentLoaded", loadEnquiries);
