let nbPhotocopie;
let prix;
let button = document.getElementById("button");
let message = document.getElementById("message");

function coutTotal(){
    nbPhotocopie = document.getElementById("nbPhotocopie").value;

    if(nbPhotocopie <= 10){
        prix = nbPhotocopie * 0.1;
    }else if(nbPhotocopie <= 30){
        prix = (nbPhotocopie - 10) * 0.09 + 1;
    }else{
        prix = (nbPhotocopie - 30) * 0.08 + 2.80;
    }
    
    message.innerHTML = `
    <div class="alert alert-primary" role="alert">
        Vous faites ${nbPhotocopie} photocopie(s), le coût total est donc de ${prix.toFixed(2)} euros
    </div>`
}

button.addEventListener("click", coutTotal, false)