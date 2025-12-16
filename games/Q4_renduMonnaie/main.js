//version corriger clean et à jour avec ChatGPT

const button = document.getElementById("button");
const message10 = document.getElementById("message10");
const message5 = document.getElementById("message5");
const message1 = document.getElementById("message1");

message10.textContent = "0"
message5.textContent = "0"
message1.textContent = "0"

function calculeRendu() {
    const prix = Number(document.getElementById("saisiePrix").value);
    const monnaie = Number(document.getElementById("saisieMonnaie").value);

    let aRendre = monnaie - prix;

    const nb10 = Math.floor(aRendre / 10);
    aRendre %=10;

    const nb5 = Math.floor(aRendre / 5);
    aRendre %=5;
    
    message10.textContent = nb10;
    message5.textContent = nb5;
    message1.textContent = aRendre;
}

button.addEventListener("click", calculeRendu);