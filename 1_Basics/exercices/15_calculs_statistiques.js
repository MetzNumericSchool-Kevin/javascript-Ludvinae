// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

let coutInventaire = 0;
let totalPotions = 0;
inventaire.forEach(potion => {
  let total = potion.prix * potion.stock;
  coutInventaire += total;
  totalPotions += potion.stock;
})

console.log("cout total de l'inventaire: ", coutInventaire);
console.log("stock total de potions: ", totalPotions);
console.log("prix moyen: ", coutInventaire / totalPotions);
