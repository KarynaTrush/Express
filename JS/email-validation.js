document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");
    const emailInput = document.querySelector("#email");
    const errorText = document.createElement("p");
    errorText.style.color = "red";
    errorText.style.display = "none";
    form.insertBefore(errorText, emailInput.nextSibling);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            errorText.textContent = "Invalid email address. Please enter a valid one.";
            errorText.style.display = "block";
            emailInput.style.border = "2px solid red";
        } else {
            errorText.style.display = "none";
            emailInput.style.border = "2px solid green";
            alert("Email submitted successfully!");
        }
    });

    emailInput.addEventListener("input", () => {
        errorText.style.display = "none";
        emailInput.style.border = "1px solid #ccc"; 
    });
});
