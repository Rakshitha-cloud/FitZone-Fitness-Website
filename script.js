// Join button action
function joinNow() {
    alert("Welcome to FitZone! Our team will contact you soon 💪");
}

// Contact form submit
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all details");
    } else {
        alert("Message sent successfully 🚀");
    }
}