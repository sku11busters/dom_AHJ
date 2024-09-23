const gnomeImgPath = require('./img/goblin.png');
import './style.css';


function getRandomPosition() {
    const rows = 4;
    const cols = 4;
    const position = {
        top: Math.floor(Math.random() * rows) * 100,
        left: Math.floor(Math.random() * cols) * 100,
    };
    return position;
}

function moveGnome() {
    const gnome = document.getElementById('gnome');

    if (!gnome.src) {
        gnome.src = gnomeImgPath;
    }

    const { top, left } = getRandomPosition();

    gnome.style.top = `${top}px`;
    gnome.style.left = `${left}px`;
    gnome.style.display = 'block';
}

setInterval(moveGnome, 1000); 
