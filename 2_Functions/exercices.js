// ============================================
// 📦 CONSTANTES DE DÉPART
// ============================================
// Copie ces constantes au début de ton fichier
// Tu les utiliseras dans tous les exercices

const nom_sorcier = "Archibald 🧙‍♂️";

const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};

const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];


// ============================================
// EXERCICE 1 : Salutation Aventurier
// ============================================
// 🎯 Objectif : Créer ta première fonction qui affiche un message personnalisé
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction salutations() ci-dessous

function salutations(nom) {
  console.log(`Salutations ${nom}`);
};


// 🧪 TESTS - Décommente pour tester
 //console.log("=== EXERCICE 1 ===");
 //salutations(nom_sorcier);


// ============================================
// EXERCICE 2 : Quel est le tarif d'une potion ?
// ============================================
// 🎯 Objectif : Créer une fonction qui calcule le prix total d'une commande
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction calculerPrixTotal() ci-dessous

function calculerPrixTotal(nomPotion, array, number) {
  for (potion of array) {
    console.log(potion);
    if (potion.id == nomPotion) {
      console.log(potion.prix);
      return potion.prix * number;
    }
  }
};

// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 2 ===");
// const prix = calculerPrixTotal("potion_soin", inventaire, 3);
// console.log("Prix pour 3 potions:", prix, "🪙");


// ============================================
// EXERCICE 3 : Fabrication de potion
// ============================================
// 🎯 Objectif : Créer une fonction qui fabrique un nouvel objet potion
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotion() ci-dessous

function fabriquerPotion(nomPotion, prixPotion = 50, quantitePotion = 1) {
  return {
    id: nomPotion,
    prix: prixPotion,
    stock: quantitePotion
  }
};


// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 3 ===");
//const potion1 = fabriquerPotion("potion_mana", 15, 5);
// console.log(potion1);
// const potion2 = fabriquerPotion("potion_force");
// console.log(potion2);


// ============================================
// EXERCICE 4 : Ajout de nouvelles potions dans l'inventaire
// ============================================
// 🎯 Objectif : Créer une fonction qui ajoute ou met à jour une potion
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction ajouterPotion() ci-dessous

function ajouterPotion(array, element) {
  array.push(element);
};


// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 4 ===");
// console.log("Inventaire avant ajout", inventaire);
// const nouvellePotion = fabriquerPotion("potion_mana", 20, 3);
// ajouterPotion(inventaire, nouvellePotion);
// console.log("Inventaire après ajout:", inventaire);


// ============================================
// EXERCICE 5 : Cherche moi les potions qui...
// ============================================
// 🎯 Objectif : Créer des fonctions pour filtrer l'inventaire
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée tes fonctions getPotionsEnStock() et getPotionsEnRupture() ci-dessous

function getPotionsEnStock(array) {
  return array.filter((element) => element.stock > 0);
};

function getPotionsEnRupture(array) {
  return array.filter((element) => element.stock <= 0);
};


// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 5 ===");
// console.log("Inventaire complet:", inventaire);
// console.log("Potions en stock:", getPotionsEnStock(inventaire));
// console.log("Potions en rupture:", getPotionsEnRupture(inventaire));


// ============================================
// EXERCICE 6 : Allons faire de la cueillette !
// ============================================
// 🎯 Objectif : Améliorer la fonction de fabrication pour vérifier les ingrédients
// 📖 Consignes : Consulte le README pour les détails
// ⚠️ Note : Crée une NOUVELLE fonction avec un nom différent (ex: fabriquerPotionAvecIngredients)

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotionAvecIngredients() ci-dessous


function fabriquerPotionAvecIngredients(id, ingredientsPotion, prix = 10, stock=1) {
  if (!id in manuel_de_fabrication) return new Error("Cette potion n'est pas dans le manuel.");
 
  for (ingredient of manuel_de_fabrication[id].ingredients) {
    if (!ingredientsPotion.includes(ingredient)) return new Error("Il manque " + ingredient);
  }
  
  return fabriquerPotion(id, prix)
  //return potion_soin;
};

// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 6 ===");
 // Test avec tous les ingrédients
// const resultat1 = fabriquerPotionAvecIngredients(
//   "potion_soin",
//   ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
//   10,
//   1
// );
// if (resultat1 instanceof Error) {
//   console.error(resultat1.message);
// } else {
//   console.log("✅ Potion créée:", resultat1);
//   ajouterPotion(inventaire, resultat1);
// }

 // Test avec ingrédients manquants
// const resultat2 = fabriquerPotionAvecIngredients(
//   "potion_soin",
//   ["eau_de_source"],
//   10,
//   1
// );
// if (resultat2 instanceof Error) {
//   console.error("❌", resultat2.message);
// } else {
//   console.log("✅ Potion créée:", resultat2);
// }


// ============================================
// EXERCICE 7 : Une potion n'est jamais fabriquée en retard !
// ============================================
// 🎯 Objectif : Découvrir les callbacks et l'asynchrone avec setTimeout
// 📖 Consignes : Consulte le README pour les détails
// ⚠️ Note : Crée une NOUVELLE fonction (ex: fabriquerPotionAvecDelai)

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotionAvecDelai() ci-dessous

function fabriquerPotionAvecDelai(id, ingredientsPotion, callback, prix=10, stock=1) {
  if (!id in manuel_de_fabrication) return new Error("Cette potion n'est pas dans le manuel.");
 
  for (ingredient of manuel_de_fabrication[id].ingredients) {
    if (!ingredientsPotion.includes(ingredient)) return new Error("Il manque " + ingredient);
  }

  setTimeout(() => {
    // Code à exécuter après le délai
    const potion = { id, prix, stock };
    callback(potion); // On appelle le callback avec la potion
  }, manuel_de_fabrication[id].temps_de_fabrication * 1000);
}


// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 7 ===");
// function quandPotionPrete(potion) {
//   console.log("✅ Fabrication terminée:", potion);
//   ajouterPotion(inventaire, potion);
// }
//
// const erreur = fabriquerPotionAvecDelai(
//   "potion_soin",
//   ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
//   quandPotionPrete,
//   15,
//   2
// );

// if (erreur instanceof Error) {
//   console.error(erreur.message);
// } else {
//   console.log("⏳ Fabrication en cours...");
// }


// ============================================
// EXERCICE 8 : Inventaires indépendants avec les Closures
// ============================================
// 🎯 Objectif : Découvrir les closures pour créer plusieurs inventaires indépendants
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction creerInventaire() ci-dessous

function creerInventaire() {
  let inventaire = [];

  return {
    ajouterPotion: function (potion) {
      inventaire.push(potion);
    },

    getPotionsEnStock: function () {
      return inventaire.filter((element) => element.stock > 0);
    },

    getPotionsEnRupture: function () {
      return inventaire.filter((element) => element.stock <= 0);
    }
  }
}


// 🧪 TESTS - Décommente pour tester
//console.log("=== EXERCICE 8 ===");
// const boutiqueA = creerInventaire();
// const boutiqueB = creerInventaire();
//
// boutiqueA.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
// boutiqueB.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));
//
// console.log("Boutique A - Potions en stock:", boutiqueA.getPotionsEnStock());
// console.log("Boutique B - Potions en rupture:", boutiqueB.getPotionsEnRupture());


// ============================================
// EXERCICE 9 : Bonus - Un sorcier a toujours la classe !
// ============================================
// 🎯 Objectif : Découvrir la syntaxe des classes en JavaScript
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta classe Inventaire ci-dessous

class Inventaire {
  #inventaire; // Propriété privée (avec #)

  constructor() {
    this.#inventaire = []; // Initialisation dans le constructeur
  }

  ajouterPotion(potion) {
    // Ton code ici (utilise this.#inventaire)
    this.#inventaire.push(potion);
  }

  getPotionsEnStock() {
    // Ton code ici
    return this.#inventaire.filter((element) => element.stock > 0);
  }

  getPotionsEnRupture() {
    // Ton code ici
    return this.#inventaire.filter((element) => element.stock <= 0);
  }
}


// 🧪 TESTS - Décommente pour tester
 console.log("=== EXERCICE 9 ===");
 const boutiqueC = new Inventaire();
 const boutiqueD = new Inventaire();

 boutiqueC.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
 boutiqueD.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));

 console.log("Boutique C - Potions en stock:", boutiqueC.getPotionsEnStock());
 console.log("Boutique D - Potions en rupture:", boutiqueD.getPotionsEnRupture());
