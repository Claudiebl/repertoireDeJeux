import { dico } from "./dico.js";

document.addEventListener("DOMContentLoaded", () => { 

  // ---- Variables principales ----
  const imgPendu = document.getElementById("imgPendu");
  const board = document.getElementById("board");
  const clavier = document.querySelectorAll(".lettre");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");
  const overlayImg = document.getElementById("overlay-img");
  
  const motSecret = choisirMot();
  let lettresTrouvees = Array(motSecret.length).fill("_");
  let erreurs = 0;
  const maxErreurs = 9;  // tu peux réduire selon le nombre d’images


  // ---- GÉNÉRATION DU MOT ALÉATOIRE ----
  function choisirMot() {
    const index = Math.floor(Math.random() * dico.length);
    return dico[index].toLowerCase();
  }


  // ---- AFFICHAGE DU MOT ----
  function afficherMot() {
    board.textContent = lettresTrouvees.join(" ");
  }


  // ---- MISE À JOUR DE L'IMAGE ----
  function afficherImage() {
    imgPendu.src = `./images/${erreurs}.png`;
  }
  
  // ---- BLOQUER LE CLAVIER ----
  function desactiverClavier() {
    clavier.forEach(touche => touche.classList.add("disabled"));
  }
  
  // ---- AFFICHAGE DU MESSAGE DE FIN ----
  function afficherFin(message, image) {
    overlay.style.display = "flex";
    overlayImg.src = image;
    overlayContent.innerHTML = `
    <h2>${message}</h2>
    <p>Le mot était : <strong>${motSecret}</strong></p>
    <p class="mt-2">(Touchez l’écran pour rejouer)</p>
    `;
  }

    // ---- FERMER L'OVERLAY AU CLIC ----
  function fermerOverlay() {
    location.reload();
  }

  overlay.addEventListener("click", fermerOverlay);

  // ---- TRAITER UNE LETTRE ----
  function traiterLettre(lettre, bouton) {

    // On désactive la touche cliquée
    bouton.classList.add("disabled");

    if (motSecret.includes(lettre)) {

      // On remplace les "_" par les bonnes lettres
      for (let i = 0; i < motSecret.length; i++) {
        if (motSecret[i] === lettre) {
          lettresTrouvees[i] = lettre;
        }
      }

      afficherMot();

      // Victoire ?
      if (!lettresTrouvees.includes("_")) {
        desactiverClavier();
        afficherFin("Bravo ! 🎉", "./images/win.png");
      }

    } else {

      erreurs++;
      afficherImage();

      // Défaite ?
      if (erreurs >= maxErreurs) {
        desactiverClavier();
        afficherFin("Perdu 😭", "./images/9.png");
      }
    }
  }


  // ---- ÉCOUTEURS DES TOUCHES ----
  clavier.forEach(touche => {
    touche.addEventListener("click", () => {
      const lettre = touche.textContent.toLowerCase();
      traiterLettre(lettre, touche);
    });
  });


  // ---- Initialisation affichage ----
  afficherMot();
  afficherImage();

});
