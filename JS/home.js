function switchTheme() {
    const themeLink = document.getElementById('theme-style');
    themeLink.href = themeLink.href.includes('home.light-theme.css') ? 'home.dark-theme.css' : 'home.light-theme.css';
    console.log('Тема переключена');
}
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-icon a");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-icon a");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");
    const form = modal.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "admin" && password === "12345") {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", username);
            modal.style.display = "none";
            updateLoginState();
        } else {
            alert("Invalid username or password. Try again.");
            passwordInput.value = "";
        }
    });

    function updateLoginState() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            loginButton.outerHTML = `<div class="logout-container">
                <span class="welcome-text">Welcome, ${loggedInUser}</span>
                <button id="logoutButton" class="button">Logout</button>
            </div>`;
            addLogoutFunctionality();
        }
    }

    function addLogoutFunctionality() {
        const logoutButton = document.getElementById("logoutButton");
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser"); 
            alert("You have been logged out.");
            location.reload(); 
        });
    }

    updateLoginState();
});
