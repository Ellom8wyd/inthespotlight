function animateWaterCycle(stage) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = '';

    switch (stage) {
        case 'evaporation':
            createEvaporationAnimation();
            break;
        case 'condensation':
            createCondensationAnimation();
            break;
        case 'precipitation':
            createRaindrops();
            break;
        default:
            break;
    }
}

function createEvaporationAnimation() {
    const animationContainer = document.getElementById('animation-container');
    const evaporateElement = document.createElement('div');
    evaporateElement.classList.add('evaporate');
    animationContainer.appendChild(evaporateElement);
    setTimeout(() => {
        evaporateElement.remove();
    }, 1000);
}

function createCondensationAnimation() {
    const animationContainer = document.getElementById('animation-container');
    const condenseElement = document.createElement('div');
    condenseElement.classList.add('condense');
    animationContainer.appendChild(condenseElement);
    setTimeout(() => {
        condenseElement.remove();
    }, 1000);
}

function createRaindrops() {
    const animationContainer = document.getElementById('animation-container');

    for (let i = 0; i < 20; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + '%';
        raindrop.style.animationDelay = Math.random() + 's';
        animationContainer.appendChild(raindrop);
    }
}
