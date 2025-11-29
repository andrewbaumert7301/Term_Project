// Image file paths to rotate through
const images = [
    "img/food1.jpg", //https://www.pexels.com/photo/burger-with-fried-fries-on-black-plate-with-sauce-on-the-side-1199957/
    "img/food2.jpg", //https://www.pexels.com/photo/fries-and-burger-on-plate-70497/
    "img/food3.jpg", //https://www.pexels.com/photo/hamburger-and-fries-photo-2983101/
    "img/food4.jpg" //https://www.pexels.com/photo/close-up-photo-of-burger-1639562/
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
// === HOURS PAGE SCRIPT ===
document.addEventListener("DOMContentLoaded", function () {
    const hoursBox = document.getElementById("hours-box");
    if (!hoursBox) return; // Only run this code on the Hours page

    const hours = [
        "Monday: 9 AM – 8 PM",
        "Tuesday: 9 AM – 8 PM",
        "Wednesday: 9 AM – 8 PM",
        "Thursday: 9 AM – 8 PM",
        "Friday: 9 AM – 10 PM",
        "Saturday: 10 AM – 10 PM",
        "Sunday: 10 AM – 6 PM"
    ];

    let html = "<ul>";
    for (let i = 0; i < hours.length; i++) {
        html += `<li>${hours[i]}</li>`;
    }
    html += "</ul>";

    hoursBox.innerHTML = html;
});
