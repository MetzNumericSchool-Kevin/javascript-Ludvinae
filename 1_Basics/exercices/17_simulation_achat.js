// Mini-simulation d'achat

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;

console.log("Voici les potions disponibles: ")
let numero = 1;
inventaire.forEach(element => {
  console.log(`${numero} - ${element.nom}`)
  numero ++;
})


let choixPotion = prompt("Quelle potion souhaitez-vous acheter? ");

let potion;
choixPotion = Number.parseInt(choixPotion) - 1;

while (true) {
  switch (choixPotion) {
    case 0: 
      potion = inventaire[choixPotion];
      break;
    case 1:
      potion = inventaire[choixPotion];
      break;
    case 2:
      potion = inventaire[choixPotion];
      break;
    default:
      console.log("Veuillez selectionner un numero de potion valide.");
      potion = null;
  }
  if (potion === null) break;

  let choixQuantite = prompt("Combien en voulez-vous? ");

  let quantite = Number.parseInt(choixQuantite);
  console.log(quantite);
  
  if (Number.isNaN(quantite)) {
    console.log("Veuillez entrer un nombre valide");
    break;
  } 

  if (potion.stock < quantite) {
    console.log("Pas assez de potions en stock");
    break;
  }

  let total = potion.prix * quantite;
  if (bourse_aventurier < total) {
    console.log("Vous n'avez pas assez d'argent.");
    break;
  }
  
  // Toutes les conditions sont ok
  bourse_aventurier -= total;
  potion.stock -= quantite;
  console.log("Achat effectué, il vous reste ", bourse_aventurier);
  break;
}

