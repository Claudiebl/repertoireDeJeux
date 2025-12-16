
const emailInput = document.getElementById("email");
const messageEmail = document.getElementById("messageEmail");

function readEmail(){
    const writeEmail = emailInput.value.trim();
    
    if(writeEmail.includes("@") && writeEmail.includes(".")){
        const atPosition = writeEmail.indexOf("@");
        const arrangement = writeEmail.substring(atPosition);

        if(arrangement.includes(".")){
            messageEmail.innerHTML = '<div class="text-success">Félicitation, votre email est valide</div>'; return;
        }
    }
    messageEmail.innerHTML = '<div class="text-danger">Votre email est invalide</div>';
}

emailInput.addEventListener("keyup", readEmail);

// MDP

const messageMDP = document.getElementById("messageMDP");

document.getElementById("inputPasseword").addEventListener("keyup", () => {

    const pwd = document.getElementById("inputPasseword").value;

    let compteur = 0;

    //definition des testes RegExp
    let regexMaj = /[A-Z]/;
    let regexMin = /[a-z]/;
    let regexChiffre = /[0-9]/;
    let regexSpecial = /[^A-Za-z0-9]/;
    
    if (regexMaj.test(pwd)) compteur++
    if (regexMin.test(pwd)) compteur++
    if (regexChiffre.test(pwd)) compteur++
    if (regexSpecial.test(pwd)) compteur++
    if (pwd.length < 8) compteur-- 

    //teste de la force du pwd
    let force = " "

    if (compteur <= 0) force = "dangeureux."
    else if (compteur > 0 && compteur < 3) force = "moyen."
    else if (compteur === 3) force = "sécurisé."
    else if (compteur >= 4) force = "très sécurisé !"

    //les couleurs du texte selon la force
    const cssClass = force === "dangeureux." ? "text-danger" 
                    : force === "moyen." ? "text-warning"
                    : force === "sécurisé." ? "text-success"
                    : force === "très sécurisé !" ? "text-primary"
                    : "text-dark";
                    
    messageMDP.innerHTML = `<div class="${cssClass}"> Votre mot de passe est ${force} </div>`;
});