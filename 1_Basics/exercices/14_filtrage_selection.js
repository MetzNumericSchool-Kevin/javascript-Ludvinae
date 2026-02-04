// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

const potionsEnStock = [];
const potionsAbordables = [];

inventaire.forEach(potion => {
  if (potion.stock > 0) potionsEnStock.push(potion);
  if (potion.prix < 40) potionsAbordables.push(potion);
})

console.log("potions en stock: ", potionsEnStock.length)
console.log("potions avec un prix inferieur a 40: ", potionsAbordables.length);

console.log(potionsEnStock);
console.log(potionsAbordables);
