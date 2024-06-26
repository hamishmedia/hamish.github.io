document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const loadingMessage = document.getElementById('loading-message');
    const body = document.body;

    // Hide the body initially
    body.style.visibility = 'hidden';

    let allImagesLoaded = false;
    let timeoutReached = false;

    // Show the message after 5 seconds if assets are still loading
    const messageTimeout = setTimeout(() => {
        if (!allImagesLoaded) {
            loadingMessage.style.display = 'block';
            timeoutReached = true;
        }
    }, 5000);

    // Function to check if all images are loaded
    function checkImagesLoaded() {
        const images = document.images;
        for (let i = 0; i < images.length; i++) {
            if (!images[i].complete) {
                return false;
            }
        }
        return true;
    }

    // Interval to keep checking if all images are loaded
    const interval = setInterval(() => {
        if (checkImagesLoaded()) {
            allImagesLoaded = true;
            clearInterval(interval);
            clearTimeout(messageTimeout);
            loadingSpinner.style.display = 'none';
            loadingMessage.style.display = 'none';
            body.style.visibility = 'visible';
        }
    }, 100);

    // Ensure body visibility if all images are already loaded
    if (checkImagesLoaded()) {
        allImagesLoaded = true;
        clearInterval(interval);
        clearTimeout(messageTimeout);
        loadingSpinner.style.display = 'none';
        loadingMessage.style.display = 'none';
        body.style.visibility = 'visible';
    }
});
