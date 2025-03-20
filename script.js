document.addEventListener("DOMContentLoaded", function () {
    displayEnquiries();
});

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let enquiry = { name, email, message };

    let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];
    enquiries.push(enquiry);
    localStorage.setItem("enquiries", JSON.stringify(enquiries));

    document.getElementById("enquiryForm").reset();
    displayEnquiries();
});

function displayEnquiries() {
    let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];
    let outputDiv = document.getElementById("enquiryList");
    outputDiv.innerHTML = "";

    enquiries.forEach((enq, index) => {
        outputDiv.innerHTML += `<p><strong>${enq.name}</strong> (${enq.email}): ${enq.message}</p><hr>`;
    });
}
