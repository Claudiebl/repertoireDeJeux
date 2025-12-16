document.addEventListener("DOMContentLoaded", () => {

//Définir les objets et leurs images
const nomObjets = [
    "une Chaise de bureau", 
    "un Costume d'Halloween",
    "un BBQ",
    "une Guitard acoustique",
    "un Sac à Main", 
];

//Créer un tableau images dans la même ordre que les objets
const imgObjets = [
    "./image/chaise.png",
    "./image/costumeHalloween.png",
    "./image/bbqGrill.png",
    "./image/guitare.png",
    "./image/sacaMain.png",
];

//Définir les prix
const prixObjet = [
    49,
    11,
    149,
    129,
    2200,
];

//Choisir un objet aléatoire
let nbAleatoire = Math.floor(Math.random() * nomObjets.length);
let objetChoisi = nomObjets[nbAleatoire];
let imageChoisie = imgObjets[nbAleatoire];
let prixSecret = prixObjet[nbAleatoire];

//Afficher l'image
document.getElementById("mesImages").src = imageChoisie;


//Initialiser les tentatives
const tentativeMax = 10;
let tentativeCourante = 1;
let victoire = false;

//Initialiser les messages/saisie
let msgTentative = document.getElementById("nbTentative");
let msgPlusOuMoins = document.getElementById("plusOUmoins");

//bouton
let boutonValider = document.getElementById("boutonValide");
let boutonRejouer = document.getElementById("boutonRejouer");

const overlay = document.getElementById("overlay");
const content = document.getElementById("overlay-content");

// Masquer overlay au clic (attaché une seule fois)
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Fonction pour afficher overlay
function afficherOverlay(message) {
    content.innerHTML = message;
    overlay.style.display = "flex";
}

//La boucle du jeu
boutonValider.addEventListener("click", () => {

    // Vérifie si la partie est terminée
    if (victoire || tentativeCourante > tentativeMax) return;

    let saisiePrix = Number(document.getElementById("saisieUser").value);

    // Afficher tentative
    msgTentative.innerHTML =
    `<div class="alert alert-warning">Tentative n°<strong> ${tentativeCourante} </strong>/ ${tentativeMax}.</div>`;

    // Vérifier la saisie
    if (saisiePrix === prixSecret ) {
        victoire = true;
        boutonRejouer.disabled = false;
        afficherOverlay("🎉🎉 BRAVO ! Tu as trouvé le Juste Prix ! 🎉🎉");
    } else if (saisiePrix < prixSecret) {
        msgPlusOuMoins.innerHTML = `<div class="alert alert-info">C'est plus !</div>`;
    } else {
        msgPlusOuMoins.innerHTML = `<div class="alert alert-info">C'est moins !</div>`;
    }

    tentativeCourante++;
    
    // Vérifier défaite
    if (tentativeCourante > tentativeMax && !victoire) {
        boutonRejouer.disabled = false;
        afficherOverlay(`😭😭 PERDU ! Le prix était ${prixSecret}€ 😭😭`);
    }
});

boutonRejouer.addEventListener("click", () => {
    location.reload();
});

});