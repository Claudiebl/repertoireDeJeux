// code simplifier et à jour avec les bonnes methodes courante ecrite avec chatgpt

const button = document.getElementById("button");
const message = document.getElementById("message");

function secondeApres() {
    const h = parseInt(document.getElementById("saisieHeure").value);
    const m = parseInt(document.getElementById("saisieMinutes").value);
    const s = parseInt(document.getElementById("saisieSecondes").value);
    
    const d = new Date(2025, 1, 1, h, m, s,);

    d.setSeconds(d.getSeconds() + 1);

    const hh = String(d.getHours()).padStart(2,"0");
    const mm = String(d.getMinutes()).padStart(2,"0");
    const ss = String(d.getSeconds()).padStart(2,"0");

    message.innerHTML =`${hh}h${mm}min${ss}sec.`;
}

button.addEventListener("click", secondeApres);