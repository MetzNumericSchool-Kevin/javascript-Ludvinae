// ============================================
// EXERCICE 1 : Quel est le titre de la boutique ?
// ============================================
// 🎯 Objectif : Apprendre à sélectionner un élément HTML et récupérer son contenu
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le <h1> et affiche son texte dans la console

let titre = document.querySelector("h1");
//console.log(titre);

// ============================================
// EXERCICE 2 : Des informations manquent !
// ============================================
// 🎯 Objectif : Créer et ajouter un nouvel élément HTML dans le DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée un nouveau paragraphe et ajoute-le dans #description_boutique

let description = document.querySelector("#description_boutique");
console.log(description);

let paragraphe = document.createElement('p');
paragraphe.textContent =  `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.`;
description.appendChild(paragraphe);
// ============================================
// EXERCICE 3 : Roger, enfoiré !
// ============================================
// 🎯 Objectif : Supprimer un élément HTML du DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Supprime le <span id="blague_de_roger_le_sorcier">
let blague = document.querySelector("#blague_de_roger_le_sorcier");
blague.remove();

// ============================================
// EXERCICE 4 : Archibald n'est pas là, appelons-le !
// ============================================
// 🎯 Objectif : Gérer les événements de clic
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Ajoute un événement 'click' sur le bouton #call_archibald

let btn = document.querySelector("#call_archibald");
btn.addEventListener("click", () => {
  // Ton code ici
  alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`)
  
});


// ============================================
// EXERCICE 5 : Faisons un peu de magie 🪄
// ============================================
// 🎯 Objectif : Sélectionner plusieurs éléments et modifier leurs styles
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère toutes les boîtes et les boutons de couleur
// Ajoute des événements pour changer les couleurs
const bouton1 = document.querySelector(`#btn_change_red`);
const bouton2 = document.querySelector(`#btn_change_blue`);
const bouton3 = document.querySelector(`#btn_change_green`);

const boites = document.querySelectorAll(".boite");

bouton1.addEventListener("click", () => {boites[0].style.backgroundColor = "red";});
bouton2.addEventListener("click", () => {boites[1].style.backgroundColor = "blue";});
bouton3.addEventListener("click", () => {boites[2].style.backgroundColor = "green";});




// ============================================
// EXERCICE 6 : Aventurier, voici ma boutique !
// ============================================
// 🎯 Objectif : Utiliser les templates HTML pour créer des éléments complexes
// 📖 Consignes : Consulte le README pour les détails

// 📦 Données des potions
const potions = [
  {
    nom: "Potion de soin",
    description:
      "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description:
      "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];

// ✍️ TON CODE ICI
// Crée une fonction pour afficher une potion à partir du template
// Parcours le tableau potions et affiche chaque potion

const conteneur = document.querySelector("#liste_potions");
const template = document.querySelector("#template_potion");

potions.forEach((potion) => {
  const clone = template.content.cloneNode(true);

  // Modifier le clone
  clone.querySelector(".nom_potion").textContent = potion.nom;
  clone.querySelector(".description_potion").textContent = potion.description;
  clone.querySelector(".prix_potion").textContent = potion.prix;
  // ... etc

  conteneur.appendChild(clone);
});

// ============================================
// EXERCICE 7 : Plus de potions, nous avons besoin de plus de potions !
// ============================================
// 🎯 Objectif : Gérer les formulaires et réutiliser du code
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère le formulaire et gère l'événement 'submit'
// Utilise FormData pour extraire les valeurs
// Réutilise la fonction de l'exercice 6 pour ajouter la nouvelle potion


const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", (event) => {
  event.preventDefault(); // IMPORTANT !

  const formData = new FormData(formulaire);
  const nouvellePotion = {
    nom: formData.get("nom"),
    description: formData.get("description"),
    prix: formData.get("prix"),
  };

  afficherPotion(nouvellePotion);
});

function afficherPotion(potion) {
  const conteneur = document.querySelector("#liste_potions");
  const template = document.querySelector("#template_potion");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".nom_potion").textContent = potion.nom;
  clone.querySelector(".prix_potion").textContent = potion.prix;
  clone.querySelector(".description_potion").textContent = potion.description;

  conteneur.appendChild(clone);
}

// ============================================
// EXERCICE 8 : Le Miroir Magique 🪞
// ============================================
// 🎯 Objectif : Utiliser classList pour ajouter/retirer des classes CSS
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le miroir et les éléments à afficher/cacher
// Utilise mouseenter et mouseleave pour détecter le survol
// Utilise classList.remove() et classList.add() pour afficher le reflet

const miroir = document.querySelector("#magic-mirror");
const texte = document.querySelector(".mirror-text");
const reflet = document.querySelector(".mirror-reflection");

miroir.addEventListener("mouseenter", () => {
  //texte.classList.add("hidden");
  reflet.classList.remove("hidden");
});

miroir.addEventListener('mouseleave', () => {
  //texte.classList.remove("hidden");
  reflet.classList.add("hidden");
})

// ============================================
// EXERCICE 9 : L'Arbre Généalogique des Potions 🌳
// ============================================
// 🎯 Objectif : Naviguer dans le DOM avec parentElement, children, etc.
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne toutes les catégories de potions
// Pour chaque catégorie, trouve la liste (children)
// Ajoute la classe 'first' au premier item et 'last' au dernier item

const potion_categories = document.querySelectorAll(".potion-category");
potion_categories.forEach((element) => {
  let liste = element.querySelector('.potion-list');
  let items = liste.querySelectorAll('.potion-item');
  console.log(items[0]);
  items[0].classList.add('first');
  items[items.length - 1].classList.add('last');
});

// ============================================
// EXERCICE 10 : Les Étiquettes Magiques 🏷️
// ============================================
// 🎯 Objectif : Utiliser les attributs data-* et dataset
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les boutons "Plus d'infos"
// Pour chaque bouton, ajoute un événement click
// Récupère les data attributes de la potion parente
// Affiche les infos dans la div .potion-info

//const infos = document.querySelectorAll(`.show-info`);
//infos.forEach((element) => {
//  element.addEventListener("click", () => {
//    let carte = element.closest('.labeled-potion');
//    let rarete = carte.dataset.rarete;
//    let effet = carte.dataset.effetSecondaire;
//    let duree = carte.dataset.duree;
//    let info = carte.querySelector('.potion-info');
//    info.innerHTML = rarete + ' <br> ' +  effet + ' <br> ' + duree;
//  
//    info.classList.toggle('hidden');
//  })
//})

// ============================================
// EXERCICE 11 : Validation Magique en Temps Réel ✨
// ============================================
// 🎯 Objectif : Valider un formulaire en temps réel avec les événements input
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les champs du formulaire
// Ajoute un événement 'input' sur chaque champ
// Valide le champ (min 3 caractères pour texte, > 0 pour prix)
// Ajoute les classes 'valid' ou 'invalid' et affiche un message
// Active/désactive le bouton submit selon la validité globale

`#potion-name`, `#potion-ingredient`, `#potion-price`
const namePopo = document.querySelector("#potion-name");
const ingredient = document.querySelector("#potion-ingredient");
const price = document.querySelector("#potion-price");
let submit = document.querySelector("#custom-potion-form").querySelector('button');

namePopo.addEventListener("input", () => {
  let condition = namePopo.length < 3;

  //submit.classList.toggle('.disabled = true', condition);
  submit.disabled = false;

})


// ============================================
// EXERCICE 12 : Calculateur de Commande 🧮
// ============================================
// 🎯 Objectif : Calculer automatiquement le total d'une commande
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les inputs de quantité
// Pour chaque input, ajoute un événement 'input' ou 'change'
// Calcule le total de la ligne (quantité × prix)
// Affiche le total de la ligne
// Calcule et affiche le total général

// ============================================
// EXERCICE 13 : Recherche de Potions 🔍
// ============================================
// 🎯 Objectif : Filtrer des éléments en temps réel avec une barre de recherche
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le champ de recherche et toutes les cartes de potions
// Ajoute un événement 'input' sur le champ de recherche
// Pour chaque potion, vérifie si le nom ou la description contient le texte recherché
// Affiche/cache les potions avec classList.add/remove('hidden')
// Affiche le nombre de résultats et le message "Aucune potion trouvée" si besoin
