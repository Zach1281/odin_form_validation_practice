const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // each time the user types something, we check
  // if the form fields are valid

  if (email.validity.valid) {
    //in case there is anerror message visible, if the
    // field is valid, we remove the error message
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    // still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if email field is valid, let form submit
  if (!email.validity.valid) {
    // display appropriate error message
    showError();
    // then prevent the form from being sent
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // if field is empty, display error message
    emailError.textContent = "you need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // if field doesn't contain an email, display message
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // if data is too short, display message
    emailError.textContent =
      "Email should be at least ${email.minLength} characters; you entered ${email.value.length}.";
  }

  //set styling
  emailError.className = "error active";
}
