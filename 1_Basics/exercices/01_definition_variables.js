// Définition de variables

const nomBoutique = "L'incoyable Bric-à-brac sans broc";
let stockPotionSoin = 18;
let prixPotionSoin = 100;
let estOuvert = true;


if (estOuvert) {
    console.log(`La boutique ${nomBoutique} est ouverte.`);
} else {
    console.log(`La boutique ${nomBoutique} est fermée.`);
}
console.log(`Il y'a ${stockPotionSoin} potions de soins en stock, au prix unitaire de ${prixPotionSoin}`);