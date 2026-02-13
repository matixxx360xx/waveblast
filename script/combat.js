import { getWeapon } from "./inventory.js";
import { enemies } from "./enemy.js"
import { playerX, playerY } from "./playerMovement.js";

function WeaponDamage(){
   let weaponStats = [
        {name: "Miecz", dmg: 10, speed: 7, length: 1},
        {name: "Topór", dmg: 15, speed: 5, length: 1.2},
        {name: "Włócznia", dmg: 12, speed: 6, length: 2},
        {name: "Halabarda", dmg: 14, speed: 4, length: 2.5},
        {name: "Maczuga", dmg: 11, speed: 6, length: 1},
        {name: "Młot bojowy", dmg: 18, speed: 3, length: 1.5},
        {name: "Sztylet", dmg: 6, speed: 9, length: 0.5},
        {name: "Tasak", dmg: 8, speed: 7, length: 0.8},
        {name: "Rapier", dmg: 7, speed: 8, length: 1.1}
    ]; 
    return weaponStats;
}

let currentDmg = 0;
let currentWeaponName = "";
let currentLength = 0;

document.addEventListener('mousedown', function(event){
    if(event.button === 0){ 
        attack();
    }
});

export function attack() {
    const stats = WeaponDamage();
    const currentWeapon = getWeapon();

    if (!currentWeapon) {
        console.log("Nie wybrano broni!");
        return;
    }


    for(let i = 0; i < stats.length; i++){
        if(stats[i].name == currentWeapon){
            currentDmg = stats[i].dmg;
            currentLength = stats[i].length * 100; 
            currentWeaponName = currentWeapon;
            break;
        }
    }

    console.log('Atakujesz bronią:', currentWeaponName," i zadajesz ",currentDmg," Dmg");

    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        let dx = playerX - enemy.enemyX;
        let dy = playerY - enemy.enemyY;
        let distance = Math.sqrt(dx*dx + dy*dy);

        if(distance <= currentLength){
            enemy.hp -= currentDmg;
            enemy.hp = Math.max(enemy.hp, 0); 
            let hpPercent = (enemy.hp / enemy.maxHp) * 100;
            enemy.hpBar.style.width = hpPercent + "%";
            console.log("Trafiony wróg nr", i, "HP:", enemy.hp);
        }

        if(enemy.hp <= 0){
            enemy.div.remove();       
            enemies.splice(i, 1);    
            console.log("Wróg nr", i, "został zabity!");
        }
       
    }
}



