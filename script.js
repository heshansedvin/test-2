const KeyAuthApp = new KeyAuth(
    "Bishan18", // Application Name
    "uMo5GzEQ1E", // Owner ID
    "40517e6653ef6aa39682cf3b57a79a3c07fb67c2ca33a6f49e19b48c670e6755", // Application Secret
    "5.7" // Application Version
);

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');

            try {
                const response = await KeyAuthApp.login(username, password);
                if (response.success) {
                    localStorage.setItem('username', username);
                    window.location.href = 'dashboard.html';
                } else {
                    errorMessage.textContent = response.message;
                }
            } catch (error) {
                errorMessage.textContent = 'Login failed. Please try again.';
            }
        });
    }

    const usernameDisplay = document.getElementById('usernameDisplay');
    if (usernameDisplay) {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = username;
        } else {
            window.location.href = 'login.html';
        }
    }
});
