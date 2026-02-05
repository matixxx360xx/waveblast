const player = document.getElementById('Player');

export let playerX = 550;
export let playerY = 330;
export const HeightArena = 800;
export const WidthArena = 1200;

const speed = 5; 
const playerSize = 90; 

const keys = {
    w: false,
    s: false,
    a: false,
    d: false
};

// Nasłuchiwanie na wciśnięcie klawisza (keydown)
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = true;
        event.preventDefault(); 
    }
});

// Nasłuchiwanie na zwolnienie klawisza (keyup)
document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = false;
    }
});

// Główna pętla
function gameLoop() {

    let newPlayerX = playerX;
    let newPlayerY = playerY;

    if(keys.w){
        newPlayerY -= speed;
    }
    if(keys.s){
        newPlayerY += speed;
    }
    if(keys.a){
        newPlayerX -= speed;
    }
    if(keys.d){
        newPlayerX += speed;
    }

    const minX = 0;
    const minY = 0;
    const maxX = WidthArena - playerSize; 
    const maxY = HeightArena - playerSize; 

    if(newPlayerX < minX){
        newPlayerX = minX;
    }
    if(newPlayerX > maxX){
        newPlayerX = maxX;
    }
    if(newPlayerY < minY){
        newPlayerY = minY;
    }
    if(newPlayerY > maxY){
        newPlayerY = maxY;
    }

    playerX = newPlayerX;
    playerY = newPlayerY;

    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';

    // Wywołanie tej funkcji ponownie przy następnym renderowaniu
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);