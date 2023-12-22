// admin.js

document.addEventListener("DOMContentLoaded", function () {
    const enquiryListContainer = document.getElementById("enquiry-list");

    // Retrieve and display enquiry details from localStorage
    const storedEnquiryData = localStorage.getItem("enquiryData");

    if (storedEnquiryData) {
        const enquiryData = JSON.parse(storedEnquiryData);

        // Display enquiry details on the admin dashboard
        displayEnquiryDetails(enquiryData);
    } else {
        // No enquiry data found
        enquiryListContainer.innerHTML = "<p>No enquiry details available.</p>";
    }

    function displayEnquiryDetails(enquiryData) {
        let enquiryHTML = "<h3>Enquiry Details</h3>";

        enquiryData.forEach((enquiry, index) => {
            enquiryHTML += `
                <div class="enquiry-item">
                    <p><strong>Name:</strong> ${enquiry.name}</p>
                    <p><strong>Contact Number:</strong> ${enquiry.contactNo}</p>
                    <p><strong>Location:</strong> ${enquiry.location}</p>
                    <p><strong>Flat Plan:</strong> ${enquiry.flatPlan}</p>
                    <p><strong>Company Name:</strong> ${enquiry.companyName}</p>
                    <button onclick="removeEnquiry(${index})">Remove</button>
                    <hr>
                </div>
            `;
        });

        enquiryListContainer.innerHTML = enquiryHTML;
    }

    // Function to remove an enquiry item
    window.removeEnquiry = function (index) {
        const storedEnquiryData = localStorage.getItem("enquiryData");

        if (storedEnquiryData) {
            let enquiryData = JSON.parse(storedEnquiryData);

            // Remove the selected item
            enquiryData.splice(index, 1);

            // Save the updated array back to localStorage
            localStorage.setItem("enquiryData", JSON.stringify(enquiryData));

            // Refresh the displayed enquiry details
            displayEnquiryDetails(enquiryData);
        }
    };
});
