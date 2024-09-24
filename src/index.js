const gnomeImgPath = require('./img/goblin.png'); 
import './style.css';

function createGameField() {
    const body = document.body;
    const gameField = document.createElement('div');
    gameField.className = 'game-field';

    const gnome = document.createElement('img');
    gnome.id = 'gnome';
    gnome.alt = 'Gnome';
    gnome.src = "src/img/goblin.png"
    gnome.style.position = 'absolute'; 
    gnome.style.display = 'none'; 
    gameField.appendChild(gnome);

    for (let i = 0; i < 16; i++) { 
        const cell = document.createElement('div');
        cell.className = 'cell'; 
        gameField.appendChild(cell);
    }

    body.appendChild(gameField);
}

createGameField(); 

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

