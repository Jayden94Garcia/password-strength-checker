const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = assessPasswordStrength(password);
    displayStrength(strength);
});

function assessPasswordStrength(password) {
    // Implement your password assessment logic here
    // You can use regular expressions or external libraries like zxcvbn
    // For simplicity, let's use a basic logic here
    if (password.length < 6) {
        return "Weak";
    } else if (password.length < 10) {
        return "Moderate";
    } else {
        return "Strong";
    }
}

function displayStrength(strength) {
    strengthText.textContent = `Password Strength: ${strength}`;
}
