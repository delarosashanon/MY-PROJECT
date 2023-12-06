document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple example of username and password validation
    if (
        (username === 'Dela Rosa' && password === 'shanon') ||
        (username === 'Fernandez' && password === 'eddielene') ||
        (username === 'Gigantone' && password === 'kyla') ||
        (username === 'Admin' && password === 'admin')
    ) {
        // Redirect to the Attendance System after successful login
        window.location.href = 'fillupform.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
