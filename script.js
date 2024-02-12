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
                    stopRainAnimation(); // Stop rain animation during evaporation
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
        for (let i = 0; i < 10; i++) { // Adjust the number of raindrops as needed
            setTimeout(function () {
                const raindrop = document.createElement("div");
                raindrop.classList.add("raindrop");
                document.body.appendChild(raindrop);
            }, i * 500); // Adjust the delay between each raindrop appearance
        }
    }

    function collectWater() {
        const raindrops = document.querySelectorAll(".raindrop");
        if (raindrops.length > 1) {
            const water = document.createElement("div");
            water.classList.add("water");
            document.body.appendChild(water);
            raindrops.forEach(function (raindrop) {
                raindrop.remove();
            });
        }
    }

    function removeRain() {
        const water = document.querySelector(".water");
        if (water) {
            water.remove();
        }
    }

    function createIndividualRaindrops() {
        for (let i = 0; i < 10; i++) { // Adjust the number of raindrops as needed
            setTimeout(function () {
                const raindrop = document.createElement("div");
                raindrop.classList.add("raindrop");
                document.body.appendChild(raindrop);
            }, i * 500); // Adjust the delay between each raindrop appearance
        }
    }

    function stopRainAnimation() {
        const raindrops = document.querySelectorAll(".raindrop");
        raindrops.forEach(function (raindrop) {
            raindrop.style.animation = "none";
        });
    }
});
