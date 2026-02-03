// Ajout d'une nouvelle potion

// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

potions.push("Potion d'antidote");
potions.forEach(element => {
    console.log(element);
});

potions.pop();
potions.forEach(element => {
    console.log(element);
});