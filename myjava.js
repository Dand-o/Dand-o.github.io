let scrollSpeed = 0.5; // adjust this value for faster or slower star movement
let lastPosition = window.pageYOffset || document.documentElement.scrollTop;

console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const scrollSpeed = 0.5;

    window.addEventListener('scroll', function() {
        // Parallax effect
        let scrolledY = window.scrollY;
        let yOffset = -(lastScrollY * scrollSpeed);
        document.body.style.backgroundPosition = `0px ${yOffset}px`;
        lastScrollY = scrolledY;

        // Infinite scroll
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
            const content = document.getElementById("content");
        }
    });
});
