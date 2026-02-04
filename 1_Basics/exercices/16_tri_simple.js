// Tri simple

// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];



for (let i = 0; i < inventaire.length; i++) {
  for (let j = 0; j < inventaire.length; j++) {
    if (i == j) continue;

    if (inventaire[i].prix > inventaire[j].prix && i < j) {
      let temp = inventaire[i];
      inventaire[i] = inventaire[j];
      inventaire[j] = temp;
    }
    else if (inventaire[i].prix < inventaire[j].prix && i > j) {
      let temp = inventaire[i];
      inventaire[i] = inventaire[j];
      inventaire[j] = temp;
    }
  }
}

inventaire.forEach(potion => {
  console.log(`Potion ${potion.nom}: prix ${potion.prix} 🪙`)

})
