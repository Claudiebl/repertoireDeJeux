// code que j'ai fais moi sans me corriger avec chatgpt

let heure;
let minutes;
let secondes;
let button = document.getElementById("button");
let message = document.getElementById("message");

function secondeApres(){
    heure = parseInt(document.getElementById("saisieHeure").value);
    minutes = parseInt(document.getElementById("saisieMinutes").value);
    secondes = parseInt(document.getElementById("saisieSecondes").value);
    
    secondes++;

    if(secondes === 60){
        secondes = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        heure++;
    }

    if(heure === 24){
        heure = 0;
    }

    if(heure === 25){
        heure = 1;
    }

    message.innerHTML = `
    <div class="alert alert-primary" role="alert">
    ${String(heure).padStart(2,"0")}h${String(minutes).padStart(2,"0")}min${String(secondes).padStart(2,"0")}sec.
    </div>`;
}

button.addEventListener("click", secondeApres, false)