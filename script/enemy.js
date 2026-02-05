import { playerX, playerY, HeightArena, WidthArena } from './playerMovement.js';


function Enemy() {
    const div = document.createElement("div");
    const arena = document.getElementById("Arena");

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.position = "absolute";
    div.style.backgroundColor = "red";
    div.style.borderRadius = "50%";

    arena.appendChild(div);
    return div;

}

function RandomSpawn() {
    const enemyDiv = Enemy();
    const maxX = WidthArena - 200;
    const maxY = HeightArena - 200;

    let enemyX = Math.random() * (maxX - (playerX)) + (playerX + 100);
    let enemyY = Math.random() * (maxY - (playerY)) + (playerY + 100);

    if (Math.random() < 0.5) {
        enemyX = playerX - (enemyX - playerX);
    } else {
        enemyX = enemyX;
    }

    if (Math.random() < 0.5) {
        enemyY = playerY - (enemyY - playerY);
    } else {
        enemyY = enemyY;
    }
    enemyX = Math.min(Math.max(enemyX, 0), maxX);
    enemyY = Math.min(Math.max(enemyY, 0), maxY);
    enemyDiv.style.left = enemyX + "px";
    enemyDiv.style.top = enemyY + "px";

}
setInterval(RandomSpawn, 3000);
