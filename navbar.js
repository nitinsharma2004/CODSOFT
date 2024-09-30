# navbar 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Responsive Navbar">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navbar Container -->
    <nav class="navbar">
        <div class="navbar-logo">
            <a href="#">BrandLogo</a>
        </div>
        <!-- Menu Links -->
        <ul class="nav-links" id="navLinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <!-- Toggle Button for Mobile Menu -->
        <div class="menu-toggle" id="menuToggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>

    <script src="script.js"></script>
</body>
</html>

 // index.css

/* Base Styles */
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}

.navbar {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    position: fixed;
    width: 100%;
    z-index: 10;
}

.navbar-logo a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
}

.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-links li {
    margin-left: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
}

/* Responsive Styling */
@media screen and (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 60px;
        right: -250px;
        width: 250px;
        height: 100vh;
        background-color: #333;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right 0.3s ease-in-out;
    }

    .nav-links li {
        margin: 20px 0;
    }

    .nav-links.show {
        right: 0;
    }

    .menu-toggle {
        display: flex;
    }
}

// index.js

// Toggle the visibility of the menu on smaller screens
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
