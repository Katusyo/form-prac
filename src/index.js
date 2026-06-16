import "./styles.css";

import { saveInfo } from './modules/storage';

const information = saveInfo();
const form = document.getElementById("information");

const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password");

email.addEventListener("input", () => {
    const error = document.getElementById("email-error");

    if(email.validity.valid) {
        error.textContent = "";
        email.classList.remove("invalid");
        email.classList.add("valid");
    } else {
        error.textContent = "Please enter a valid email.";
        email.classList.add("invalid");
        email.classList.remove("valid");
    }
});

password.addEventListener("input", validatePasswords);

function validatePasswords() {
    const error = document.getElementById("confirm-error");

    if (password.value === password.value) {
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