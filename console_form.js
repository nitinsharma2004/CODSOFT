// this is login page using html css and js
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Responsive Login Page">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <form class="login-form" id="loginForm">
            <h2>Login</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit">Login</button>
            <p class="error-message" id="errorMessage"></p>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>


// index.css

/* Base Styling */
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    margin-bottom: 5px;
    display: block;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background: #2575fc;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #6a11cb;
}

.error-message {
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 15px;
}

/* Responsive Design */
@media screen and (max-width: 480px) {
    .login-container {
        padding: 20px;
    }

    button {
        padding: 12px;
    }
}

// index.js

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill out both fields.';
    } else if (username !== 'user' || password !== 'password') {
        errorMessage.textContent = 'Incorrect username or password.';
    } else {
        alert('Login successful!');
        // Perform the actual login (e.g., redirect, API call)
    }
});


