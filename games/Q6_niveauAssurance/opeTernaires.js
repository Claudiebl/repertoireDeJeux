// autre facon d'écrire plusieurs if...else


const button = document.getElementById("button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    // Récupérer et convertir les valeurs au moment du clic
    const age = Number(document.getElementById("saisieAge").value);
    const annPermis = Number(document.getElementById("saisieAnnPermis").value);
    const accidents = Number(document.getElementById("saisieAccidents").value);
    const fidelite = Number(document.getElementById("saisieFidelite").value);

    // Calculer la couleur selon les règles
    let couleur = accidents >= 3
        ? "Refusé"
        : (age < 25 && annPermis < 2)
            ? accidents === 0 ? "Rouge" : "Refusé"
            : ((age < 25 && annPermis >= 2) || (age >= 25 && annPermis < 2))
                ? accidents === 0 ? "Orange" : "Rouge"
                : (age >= 25 && annPermis >= 2)
                    ? accidents === 0 ? "Vert"
                      : accidents === 1 ? "Orange"
                      : accidents === 2 ? "Rouge"
                      : "Refusé"
                    : "Refusé";

    // Amélioration fidélité
    couleur = (couleur !== "Refusé" && fidelite >= 1)
        ? couleur === "Rouge" ? "Orange"
          : couleur === "Orange" ? "Vert"
          : couleur === "Vert" ? "Bleu"
          : couleur
        : couleur;

    // Choix de la classe CSS
    const cssClass = couleur === "Rouge" ? "text-danger"
                    : couleur === "Orange" ? "text-warning"
                    : couleur === "Vert" ? "text-success"
                    : couleur === "Bleu" ? "text-primary"
                    : "text-dark";

    // Affichage
    message.innerHTML = `<div class="${cssClass}">${couleur}</div>`;
});
