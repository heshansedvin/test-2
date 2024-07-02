document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    KeyAuthApp.login(username, password).then(response => {
        if (response.success) {
            window.location.href = 'dashboard.php';
        } else {
            document.getElementById('error-message').textContent = response.message;
        }
    }).catch(err => {
        document.getElementById('error-message').textContent = "An error occurred. Please try again.";
    });
});
