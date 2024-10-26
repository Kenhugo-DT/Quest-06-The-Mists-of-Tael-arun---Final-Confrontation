document.addEventListener('DOMContentLoaded', () => {
    // Location navigation elements
    const nextLocationBtn = document.getElementById('next-location');
    const prevLocationBtn = document.getElementById('prev-location');
    const locations = document.querySelectorAll('.location');
    let currentLocationIndex = 0;

    // Initially show only the first location
    locations[0].classList.add('active');

    function showLocation(index) {
        locations.forEach(location => location.classList.remove('active'));
        locations[index].classList.add('active');
    }

    function nextLocation() {
        currentLocationIndex = (currentLocationIndex + 1) % locations.length;
        showLocation(currentLocationIndex);
    }

    function prevLocation() {
        currentLocationIndex = (currentLocationIndex - 1 + locations.length) % locations.length;
        showLocation(currentLocationIndex);
    }

    // Add event listeners for location navigation
    nextLocationBtn.addEventListener('click', nextLocation);
    prevLocationBtn.addEventListener('click', prevLocation);
});