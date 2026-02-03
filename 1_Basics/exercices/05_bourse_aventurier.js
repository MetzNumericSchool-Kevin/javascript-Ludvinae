// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;

let bourseAventurier = 500;

let choix = prompt(`Combien de potions de soins voulez-vous acheter? `)
let prixTotal = Number.parseInt(choix) * prix_potion_soin

if (bourseAventurier < prixTotal) {
    console.log("Vous n'avez pas assez d'argent  pour cet achat")
} 
if (stock_potion_soin < Number.parseInt(choix)) {
    console.log("Il n'y a pas assez de potions en stock")
}

bourseAventurier -= prixTotal;
console.log(`Vous avez acheter ${choix} potions pour ${prixTotal}.`)

