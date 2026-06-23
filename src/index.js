import "./styles.css";

export function saveInfo() {
    return {};
}
const form = document.getElementById("information");

const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");


password.addEventListener("input", () => {
    validatePasswordLength();
    validatePasswords();
});

function validatePasswordLength() {
    const error = document.getElementById("password-error");

    if (password.value.length >= 8) {
        error.textContent = "";

        password.classList.remove("invalid");
        password.classList.add("valid");
    } else {
        error.textContent = "Passwords must be a minimum of 8 characters long."

        password.classList.add("invalid");
        password.classList.remove("valid");
    }
}

confirmPassword.addEventListener("input", validatePasswords);

function validatePasswords() {
    const error = document.getElementById("confirm-error");

    if (confirmPassword.value === "") {
        error.textContent = "";

        confirmPassword.classList.remove("invalid");

        return;
    } 
    
    if (password.value === confirmPassword.value) {
        error.textContent = "";

        confirmPassword.classList.remove("invalid");
        confirmPassword.classList.add("valid");
    } else {
        error.textContent = "Passwords do not match.";

        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
    }
}

email.addEventListener("input", () => {

    validateField(
        email,
        "email-error",
        "Please enter a valid email."
    );
});

email.addEventListener("blur", () => {
    validateField(
        email,
        "email-error",
        "Please enter a valid email."
    );
});

country.addEventListener("input", () => {
    validateField(
        country,
        "country-error",
        "Please enter a valid country."
    );
});

postalCode.addEventListener("input", () => {
    validateField(
        postalCode,
        "postal-error",
        "Please enter a valid postal code."
    );
});

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }

    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Passwords must match.")
    }
});

function validateField(input, errorId, message) {
    const error = document.getElementById(errorId);

    if (input.validity.valid) {
        error.textContent = "";
    } else {
        error.textContent = message;
    }
}