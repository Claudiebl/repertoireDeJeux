// Mon corrigé 

let message = document.getElementById("message");
const button = document.getElementById("button");

function etatAssurance() {
    const age = parseInt(document.getElementById("saisieAge").value);
    const annPermis = parseInt(document.getElementById("saisieAnnPermis").value);
    const accidents = parseInt(document.getElementById("saisieAccidents").value);
    const fidelite = parseInt(document.getElementById("saisieFidelite").value);

    let couleur = " ";

    if (accidents >= 3) {
        couleur = "Refusé";

        } else if ( (age < 25 && annPermis >= 2) || (age>= 25 && annPermis < 2) ) {
            couleur = accidents === 0 ? "Orange" : "Rouge";

        } else if (age < 25 && annPermis < 2) {
            couleur = accidents === 0 ? "Rouge" : "Refusé";
        
        } else if (age >= 25 && annPermis >= 2) {
            if (accidents === 0) couleur = "Vert";
            else if (accidents === 1) couleur = "Orange";
            else if (accidents === 2) couleur = "Rouge";
        }
        
    if (couleur !== "Refusé" && fidelite >= 1) {
         if (couleur === "Rouge") couleur = "Orange";
         else if (couleur ==="Orange") couleur = "Vert";
         else if (couleur === "Vert") couleur = "Bleu";
        }

    let cssClass = "";
    switch (couleur) {
        case "Rouge": cssClass = "text-danger"; break;
        case "Orange": cssClass = "text-warning"; break;
        case "Vert": cssClass = "text-success"; break;
        case "Bleu": cssClass = "text-primary"; break;
        default: cssClass = "text-dark"; // refusé
    }

    message.innerHTML = `<div class="${cssClass}"> ${couleur} </div>`;
}



button.addEventListener("click", etatAssurance);