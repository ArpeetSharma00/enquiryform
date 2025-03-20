document.addEventListener("DOMContentLoaded", function () {
    loadEnquiries();

    document.getElementById("enquiry-form").addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });
});

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    google.script.run.withSuccessHandler(updateTable).submitEnquiry(name, email, message);
    
    document.getElementById("enquiry-form").reset();
}

function updateTable(data) {
    var table = document.getElementById("enquiry-table");
    table.innerHTML = "<tr><th>Date</th><th>Name</th><th>Email</th><th>Message</th><th>Action</th></tr>";
    data.forEach((row, index) => {
        var tr = document.createElement("tr");
        row.forEach(cell => {
            var td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("span");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() { deleteEnquiry(index); };
        deleteTd.appendChild(deleteBtn);
        tr.appendChild(deleteTd);

        table.appendChild(tr);
    });
}

function deleteEnquiry(index) {
    google.script.run.withSuccessHandler(updateTable).deleteEnquiry(index);
}

function loadEnquiries() {
    google.script.run.withSuccessHandler(updateTable).getEnquiries();
}
