# comment

//index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Homepage with Google Map">
    <title>Homepage with Google Map</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Include Google Maps JavaScript API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" defer></script>
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Welcome to My Homepage</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="map-section">
        <!-- Map Container -->
        <div id="map"></div>
    </section>

    <footer>
        <p>© 2024 My Website</p>
    </footer>
</body>
</html>

// index.css

/* Base Styling */
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
}

/* Header Styling */
header {
    background-color: #333;
    color: white;
    padding: 15px 20px;
    text-align: center;
}

header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.map-section {
    margin: 20px auto;
    max-width: 1200px;
    padding: 10px;
}

#map {
    width: 100%;
    height: 500px; /* Adjust the height of the map */
    border: 2px solid #333;
}

/* Footer Styling */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}

// index.js

// Function to initialize and add the map
function initMap() {
    // The location to center the map (e.g., New York City)
    const location = { lat: 40.7128, lng: -74.0060 };

    // Map options
    const mapOptions = {
        center: location,
        zoom: 12, // Adjust the zoom level as needed
    };

    // Create the map and place it in the 'map' div
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Optional: Add a marker at the center of the map
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'New York City',
    });
}
