document.addEventListener('DOMContentLoaded', function() {
    // Array of image sources
    var imageSources = [
        'http://localhost/aif/01/images/image1.png',
        'http://localhost/aif/01/images/image2.png',
        'http://localhost/aif/01/images/image3.png'
    ];

    // Get the header element
    var header = document.querySelector('header');

    // Set the header height to 400px
    header.style.height = '300px';

    // Generate a random index to select an image source
    var randomIndex = Math.floor(Math.random() * imageSources.length);

    // Set the background image of the header
    header.style.backgroundImage = 'url(' + imageSources[randomIndex] + ')';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';

    // Center the existing text within the header
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'center';
    
	var h1 = header.querySelector('h1');
    h1.style.fontSize = '50px'; // Adjust the size as needed
});
