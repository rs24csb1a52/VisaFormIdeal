document.getElementById("visaForm").onsubmit = function(event) {
    event.preventDefault(); // Always prevent default form submission
    
    let isValid = true;
    let errorMessages = [];
    clearErrorMessages();
    let name = document.getElementById("name").value;
    let passport = document.getElementById("passport").value;
    let country = document.getElementById("country").value;
    let password = document.getElementById("password").value;

    if (name.trim() === "") {
        isValid = false;
        errorMessages.push("Name is required.");
    }
    if (passport.trim() === "") {
        isValid = false;
        errorMessages.push("Passport number is required.");
    }
    if (country === "S") {
        isValid = false;
        errorMessages.push("Please select a country.");
    }
    if (password.trim() === "") {
        isValid = false;
        errorMessages.push("Password is required.");
    } else if (password.length < 6) {
        isValid = false;
        errorMessages.push("Password must be at least 6 characters long.");
    }
    
    if (!isValid) {
        displayErrorMessages(errorMessages);
    } else {
        // Form is valid, proceed with AJAX submission
        const formData = new FormData(document.getElementById("visaForm"));
        
        fetch('process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Display the response in the result div
            document.getElementById("result").innerHTML = data;
            document.getElementById("result").style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
            displayErrorMessages(["An error occurred while processing your request."]);
        });
    }
};

function clearErrorMessages() {
    let errorDivs = document.querySelectorAll(".error");
    errorDivs.forEach(function(div) {
        div.remove();
    });
}

function displayErrorMessages(messages) {
    let form = document.getElementById("visaForm");
    messages.forEach(function(message) {
        let errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.textContent = message;
        form.appendChild(errorDiv);
    });
}
