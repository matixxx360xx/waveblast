const equipment = document.getElementById("equipment");

function inventory(){
    let tab = ["Miecz","Topór","Włócznia","Halabarda","Maczuga","Młot bojowy","Sztylet","Tasak","Rapier"];

    for(let i = 0; i < 9; i++){
        const slot = document.createElement("div");
        slot.classList.add("itemSlot");
        slot.innerHTML = tab[i];
        equipment.appendChild(slot);
    }
}inventory()