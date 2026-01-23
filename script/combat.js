import { weaponInventory ,  getWeapon} from "./inventory.js";

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

 export function attack() {
    const stats = WeaponDamage();
    const currentWeapon = getWeapon();

    if (!currentWeapon) {
        console.log("Nie wybrano broni!");
        return;
    }
    console.log("Atakujesz bronią:", currentWeapon);

    for(let i = 0; i < stats.length; i++){
        if(stats[i].name == currentWeapon){
            currentDmg = stats[i].dmg;
            currentWeaponName = currentWeapon;
            break;
        }
    }

    document.addEventListener('mousedown', function (event) {
    if (event.button === 0 && currentWeaponName) {
        console.log('Lewy przycisk myszy wciśnięty i atakujesz bronią ', currentWeaponName," i zadajesz ",currentDmg," Dmg");
    }
});
}







