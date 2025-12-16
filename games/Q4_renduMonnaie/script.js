//version avec l'aide du corriger

let prix;
let monnaie;
let aRendre;
let nb10;
let nb5;
let nb1;

const button = document.getElementById("button");
const message10 = document.getElementById("message10");
const message5 = document.getElementById("message5");
const message1 = document.getElementById("message1");

message10.innerHTML = "0"
message5.innerHTML = "0"
message1.innerHTML = "0"

function calculeRendu() {
    prix = document.getElementById("saisiePrix").value;
    monnaie = document.getElementById("saisieMonnaie").value;

    aRendre = monnaie - prix;

    nb10 = 0;
    while(aRendre >= 10){
        nb10++
        aRendre -= 10;
    }

    nb5 = 0;
    while(aRendre >= 5){
        nb5++
        aRendre -= 5;
    }
    
    message10.innerHTML = nb10;
    message5.innerHTML = nb5;
    message1.innerHTML = aRendre;
}

button.addEventListener("click", calculeRendu);