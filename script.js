// Image file paths to rotate through
const images = [
    "img/food1.jpg",
    "img/food2.jpg",
    "img/food3.jpg",
    "img/food4.jpg"
];

let index = 0;        // Tracks which image is currently shown
let imgElement;       // Will store reference to the <img> element

// Function that updates the image to the next one in the array
function changeImage() {
    index = (index + 1) % images.length; // Move to next image, loop back at end (% gives the remainder)
    imgElement.src = images[index];      // Update the image on the page
}

window.addEventListener("DOMContentLoaded", () => {
    imgElement = document.getElementById("largeFoodImage"); // Get the image element from the html
    setInterval(changeImage, 5000); // Call changeImage every 5 seconds
});
