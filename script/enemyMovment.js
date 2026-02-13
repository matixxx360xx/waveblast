import { playerX, playerY } from './playerMovement.js';
import { enemies } from './enemy.js';

export function EnemyMove() {
    const speed = 2;

    enemies.forEach(enemy => {
        const dx = playerX - enemy.enemyX;
        const dy = playerY - enemy.enemyY;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance > 0) {
            enemy.enemyX += (dx / distance) * speed;
            enemy.enemyY += (dy / distance) * speed;

            enemy.div.style.left = enemy.enemyX + "px";
            enemy.div.style.top = enemy.enemyY + "px";
        }
    });
}
