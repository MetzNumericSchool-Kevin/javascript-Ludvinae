// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
const nom_boutique = "L'incoyable Bric-à-brac sans broc";
const nom_sorcier = "Archibald";
let stock_potion_soin = 10;
let prix_potion_soin = 50;


let choixUser = prompt(`Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔`
    - `1. Le nom de la boutique`
    - `2. Le nom du Sorcier`
    - `3. Le prix d'un potion de soin`
    - `4. La quantité d'une potion de soin`);

let message = "";
switch (Number.parseInt(choixUser)) {
    case 1 : 
        message = nom_boutique;
        break;
    case 2 : 
        message = nom_sorcier;
        break;
    case 3 : 
        message = prix_potion_soin;
        break;
    case 4 : 
        message = stock_potion_soin;
        break;
    default : 
        message ="Je ne comprends pas votre choix, veuillez ré-essayer.";
}
console.log(message);