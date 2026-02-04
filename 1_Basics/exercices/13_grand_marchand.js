// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

prixMax = 0;
potionPlusChere = null;
inventaire.forEach(potion => {
  if (potion.prix > prixMax) {
    prixMax = potion.prix;
    potionPlusChere = potion;
  }
})
console.log(potionPlusChere);

stockMax = 0;
potionPlusStockee = null;
inventaire.forEach(potion => {
  if (potion.stock > stockMax) {
    stockMax = potion.prix;
    potionPlusStockee = potion;
  }
})
console.log(potionPlusStockee);

let potionEnStock = 0;
inventaire.forEach(potion => {
  if (potion.stock > 0) potionEnStock += 1;
})
console.log(potionEnStock)
