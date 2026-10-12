function showDemoMessage(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

const validationForm = document.getElementById("validationForm");
if (validationForm) {
  validationForm.addEventListener("submit", function (event) {
    if (!validationForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    validationForm.classList.add("was-validated");
  });
}

const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageBox = document.getElementById("registrationMessage");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (!registrationForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      messageBox.className = "alert alert-danger d-block";
      messageBox.textContent =
        "Please correct the highlighted fields and try again.";
    } else {
      event.preventDefault();
      messageBox.className = "alert alert-success d-block";
      messageBox.textContent =
        "Registration form is valid. Demo only: no account was created.";
    }

    registrationForm.classList.add("was-validated");
  });
}
