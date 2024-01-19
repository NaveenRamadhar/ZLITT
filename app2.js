// Wait for the page to fully load
window.addEventListener("load", function () {
    // Find the loader element
    var loader = document.getElementById("loader");

    // Trigger the logo's fade-out animation
    loader.querySelector("img").style.opacity = 0;

    // After the animation duration, hide the loader
    setTimeout(function () {
        loader.style.display = "none";
    }, 1700); // Adjust the duration (in milliseconds) as needed
});