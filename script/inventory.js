import { attack } from "./combat.js";

const equipment = document.getElementById("equipment");
export let weaponInventory;
export let weapon;

export function inventory(attackCallback) {
    weaponInventory = ["Miecz","Topór","Włócznia","Halabarda","Maczuga","Młot bojowy","Sztylet","Tasak","Rapier"];

    for (let i = 0; i < weaponInventory.length; i++) {
        const slot = document.createElement("div");
        slot.classList.add("itemSlot");
        slot.textContent = weaponInventory[i];
        equipment.appendChild(slot);

        selectWeapon(i, slot, attackCallback); 
    }
}

function selectWeapon(i, slot, attackCallback) {
    slot.addEventListener("click", () => {
        weapon = weaponInventory[i];

        if(attackCallback){ 
            attackCallback(); 
        }
    });
}

export function getWeapon() {
    return weapon;
}
inventory(attack)