function updateSlider() {
    // Select the image container that will be resized
    let divisor = document.querySelector(".explore__image--before"),
        // Select the circle element (the slider thumb)
        circle = document.getElementById("circle"),
        // Select the slider input element
        rangeSlider = document.getElementById("slider");

    // Update the width of the 'before' image based on the slider's value
    divisor.style.width = rangeSlider.value + "%";
    
    // Move the slider thumb (circle) based on the slider's value
    circle.style.left = rangeSlider.value + "%";
}

// Call the updateSlider function on page load to ensure initial state is correct
window.onload = updateSlider;

// Optionally, also call the function whenever the slider value changes
document.getElementById("slider").addEventListener("input", updateSlider);
