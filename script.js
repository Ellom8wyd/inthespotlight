// script.js

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");

    function showStep(stepIndex) {
        steps.forEach(function (step, index) {
            if (index === stepIndex) {
                step.classList.add("show");
                if (step.id === "precipitation") {
                    createRain();
                } else if (step.id === "collection") {
                    collectWater();
                } else if (step.id === "evaporation") {
                    removeRain();
                } else if (step.id === "condensation") {
                    createIndividualRaindrops(); // Update to call function for individual raindrops
                }
            } else {
                step.classList.remove("show");
            }
        });
    }

    let currentStep = 0;
    showStep(currentStep);

    setInterval(function () {
        currentStep = (currentStep + 1) % steps.length;
        showStep(currentStep);
    }, 3000); // Change this value to adjust the interval (in milliseconds) between each step

    function createRain() {
        const container = document.querySelector(".container");
        const rain = document.createElement("div");
        rain.classList.add("rain");
        container.appendChild(rain);
    }

    function collectWater() {
        const container = document.querySelector(".container");
        const water = document.createElement("div");
        water.classList.add("water");
        container.appendChild(water);
    }

    function removeRain() {
        const rain = document.querySelector(".rain");
        if (rain) {
            rain.remove();
        }
        const water = document.querySelector(".water");
        if (water) {
            water.remove();
        }
    }

    function createIndividualRaindrops() {
        const container = document.querySelector(".container");
        const containerWidth = container.offsetWidth; // Get the width of the container
        const raindropCount = 10; // Number of raindrops
        const minLeft = -50; // Minimum left position (percentage of container width)
        const maxLeft = 50; // Maximum left position (percentage of container width)
    
        for (let i = 0; i < raindropCount; i++) {
            const raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");
    
            // Generate a random left position within the container width
            const left = Math.random() * (maxLeft - minLeft) + minLeft;
            raindrop.style.left = `calc(50% + ${left}%)`;
    
            container.appendChild(raindrop);
        }
    }
    
});
