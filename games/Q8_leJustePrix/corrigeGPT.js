document.addEventListener("DOMContentLoaded", () => {

  // ======== DONNÉES DU JEU ========
  const jeu = {
    objets: [
      { nom: "une Chaise de bureau", img: "./image/chaise.png", prix: 49 },
      { nom: "un Costume d'Halloween", img: "./image/costumeHalloween.png", prix: 11 },
      { nom: "un BBQ", img: "./image/bbqGrill.png", prix: 149 },
      { nom: "une Guitard acoustique", img: "./image/guitare.png", prix: 129 },
      { nom: "un Sac à Main", img: "./image/sacaMain.png", prix: 2200 },
    ],
    tentativeMax: 10,
    tentativeCourante: 1,
    victoire: false,
  };

  // Choisir un objet aléatoire
  const objetChoisi = jeu.objets[Math.floor(Math.random() * jeu.objets.length)];
  const prixSecret = objetChoisi.prix;

  // ======== SÉLECTEURS DOM ========
  const mesImages = document.getElementById("mesImages");
  const saisieUser = document.getElementById("saisieUser");
  const msgTentative = document.getElementById("nbTentative");
  const msgPlusOuMoins = document.getElementById("plusOUmoins");
  const boutonValider = document.getElementById("boutonValide");
  const boutonRejouer = document.getElementById("boutonRejouer");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");

  // Afficher l'image de l'objet à deviner
  mesImages.src = objetChoisi.img;

  // ======== FONCTIONS ========
  const afficherOverlay = (message) => {
    overlayContent.innerHTML = message;
    overlay.style.display = "flex";
  };

  const masquerOverlay = () => {
    overlay.style.display = "none";
  };

  const afficherTentative = () => {
    msgTentative.innerHTML = `<div class="alert alert-warning">
      Tentative n°<strong>${jeu.tentativeCourante}</strong> / ${jeu.tentativeMax}.
    </div>`;
  };

  const afficherPlusOuMoins = (message) => {
    msgPlusOuMoins.innerHTML = `<div class="alert alert-info">${message}</div>`;
  };

  function lancerConfettis() {
    const couleurs = ["#f94144", "#f3722c", "#f8961e", "#90be6d", "#577590", "#f9c74f"];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        document.body.appendChild(confetti);

        // Supprimer le confetti après l'animation
        confetti.addEventListener("animationend", () => confetti.remove());
    }
}

  // ======== ÉVÉNEMENTS ========
  overlay.addEventListener("click", masquerOverlay);

  boutonValider.addEventListener("click", () => {
    if (jeu.victoire || jeu.tentativeCourante > jeu.tentativeMax) return;

    const saisie = Number(saisieUser.value);
    afficherTentative();

    if (saisie === prixSecret) {
      jeu.victoire = true;
      boutonRejouer.disabled = false;
      afficherOverlay(`🎉🎉 BRAVO ! Tu as trouvé le Juste Prix ! 🎉🎉`);
      lancerConfettis();
    } else if (saisie < prixSecret) {
      afficherPlusOuMoins("C'est plus !");
    } else {
      afficherPlusOuMoins("C'est moins !");
    }

    jeu.tentativeCourante++;

    if (jeu.tentativeCourante > jeu.tentativeMax && !jeu.victoire) {
      boutonRejouer.disabled = false;
      afficherOverlay(`😭😭 PERDU ! Le prix était ${prixSecret}€ 😭😭`);
    }
  });

  boutonRejouer.addEventListener("click", () => location.reload());

});
