// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [];

const potion_soin = {
    nom: "Potion de soins",
    prix: 50,
    stock: 18
};
inventaire.push(potion_soin);

const potion_force = {
    nom: "Potion de force",
    prix: 100,
    stock: 3
};
inventaire.push(potion_force);

const potion_antidote = {
    nom: "Potion d'antidote",
    prix: 35,
    stock: 20
};
inventaire.push(potion_antidote);

inventaire.forEach(element => {
    console.log("Nom: ", element.nom);
    console.log("Prix: ", element.prix);
    console.log("Stock: ", element.stock);
});

inventaire.forEach(element=> {
    for (champ in element) {
        console.log(champ)
    }
})