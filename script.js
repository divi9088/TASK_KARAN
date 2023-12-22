// script.js

// Function to submit the enquiry form
// script.js
// script.js
// Function to submit the enquiry form
function submitEnquiryForm() {
    // Get form element values
    const nameElement = document.getElementById("name");
    const contactNoElement = document.getElementById("contact-no");
    const locationElement = document.getElementById("location");
    const flatPlanElement = document.getElementById("flat-plan");

    // Check if elements are present before accessing their values
    const name = nameElement ? nameElement.value : '';
    const contactNo = contactNoElement ? contactNoElement.value : '';
    const location = locationElement ? locationElement.value : '';
    const flatPlan = flatPlanElement ? flatPlanElement.value : '';

    // Placeholder: You might want to validate the form data before storing it
    const enquiryData = { name, contactNo, location, flatPlan };

    // Store the enquiry data in localStorage
    storeEnquiryData(enquiryData);

    // Display a thank you message
    const thankYouMessage = document.getElementById("thank-you-message");
    if (thankYouMessage) {
        thankYouMessage.style.display = "block";
    }

    // Optionally, reset the form fields after submission
    resetFormFields();

    // Redirect back to the home page after a brief delay (e.g., 2 seconds)
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2000);
}

// Function to store enquiry data in localStorage
function storeEnquiryData(data) {
    // Retrieve existing data or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("enquiryData")) || [];

    // Add the new data to the array
    existingData.push(data);

    // Save the updated array back to localStorage
    localStorage.setItem("enquiryData", JSON.stringify(existingData));
}

// Function to reset form fields after submission
function resetFormFields() {
    const nameElement = document.getElementById("name");
    const contactNoElement = document.getElementById("contact-no");
    const locationElement = document.getElementById("location");
    const flatPlanElement = document.getElementById("flat-plan");

    // Check if elements are present before resetting their values
    if (nameElement) {
        nameElement.value = "";
    }
    if (contactNoElement) {
        contactNoElement.value = "";
    }
    if (locationElement) {
        locationElement.value = "";
    }
    if (flatPlanElement) {
        flatPlanElement.value = "";
    }
}

// Function to handle admin login redirection
function redirectToAdminLogin() {
    // Redirect to the admin login page
    window.location.href = "admin-login.html";
}

// Function to submit the admin login form
function submitAdminLoginForm() {
    // Placeholder logic for admin login form submission
    const adminUsername = document.getElementById("admin-username").value;
    const adminPassword = document.getElementById("admin-password").value;

    // Placeholder for admin credentials (replace with your actual credentials)
    const adminCredentials = {
        username: "admin",
        password: "admin123"
    };

    if (adminUsername === adminCredentials.username && adminPassword === adminCredentials.password) {
        // Successful login, redirect to the admin page
        window.location.href = "admin.html";
    } else {
        // Display an error message (replace this with your actual error handling)
        alert("Invalid credentials. Please try again.");
    }
}

// Function to generate the enquiry page for a specific company
function generateEnquiryPage(companyName) {
    // Redirect to the enquiry page with the selected company name
    window.location.href = `enquiry.html?company=${encodeURIComponent(companyName)}`;
}
