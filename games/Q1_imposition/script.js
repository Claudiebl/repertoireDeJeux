let age;
let sexe;
let button = document.getElementById("button");
let message = document.getElementById("message");

function verifierImposition(){
    age = document.getElementById("age").value;
    sexe = document.getElementById("sexe").value;

    if(sexe == "Masculin" && age>=18){
        message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes imposable!</div>';
    }else if(sexe == "Feminin" && age >= 20 && age <= 35){
        message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes imposable!</div>';
    }else{
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous n\'êtes pas imposable!</div>';
    }
}

button.addEventListener("click", verifierImposition)