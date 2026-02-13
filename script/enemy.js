import { playerX, playerY, HeightArena, WidthArena } from './playerMovement.js';
import { EnemyMove } from './enemyMovment.js';

export let enemies = [];

function Enemy() {
    const div = document.createElement("div");
    const arena = document.getElementById("Arena");

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.position = "absolute";
    div.style.backgroundColor = "red";
    div.style.borderRadius = "50%";

    arena.appendChild(div);

    const hpBar = document.createElement("div");
    hpBar.style.width = "100px";
    hpBar.style.height = "10px";
    hpBar.style.position = "absolute";
    hpBar.style.backgroundColor = "gray";
    hpBar.style.borderRadius = "5px";
    hpBar.style.top = "-15px";
    hpBar.style.left = "0px";

    const hpFill = document.createElement("div");
    hpFill.style.width = "100%";
    hpFill.style.height = "100%";
    hpFill.style.backgroundColor = "green";
    hpFill.style.borderRadius = "5px";
    hpBar.appendChild(hpFill);
    div.appendChild(hpBar);

    const enemy = {
        div: div,
        enemyX: 0,
        enemyY: 0,
        hpBar: hpFill,
        hp: 100,      
        maxHp: 100
    };
    enemies.push(enemy);
    return div;
}

function RandomSpawn() {
    const enemyDiv = Enemy(); 
    const maxX = WidthArena - 200;
    const maxY = HeightArena - 200;

    let x = Math.random() * (maxX - playerX) + (playerX + 100);
    let y = Math.random() * (maxY - playerY) + (playerY + 100);

    let enemyX, enemyY;

    if (Math.random() < 0.5) {
        enemyX = playerX - (x - playerX);
    } else {
        enemyX = x;
    }

    if (Math.random() < 0.5) {
        enemyY = playerY - (y - playerY);
    } else {
        enemyY = y;
    }

    enemyX = Math.min(Math.max(enemyX, 0), maxX);
    enemyY = Math.min(Math.max(enemyY, 0), maxY);

    enemyDiv.style.left = enemyX + "px";
    enemyDiv.style.top = enemyY + "px";

    const lastEnemy = enemies[enemies.length - 1];
    lastEnemy.enemyX = enemyX;
    lastEnemy.enemyY = enemyY;
}

setInterval(RandomSpawn, 3000);
setInterval(EnemyMove, 20);
