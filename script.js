const container = document.querySelector('.container');
const text = document.querySelector('#text');
const counter = document.getElementById('counter'); // Get the counter element

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'Breath In Khyle!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold Your Breathe Khyle!';
        
        setTimeout(() => {
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
