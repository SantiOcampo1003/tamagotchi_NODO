const button_name = document.querySelector("#click-name")
const title_name = document.querySelector("#name")
const input_name = document.querySelector("#newNam")
let hambre = 0;
let vida = 100;
const barra_hambre = document.querySelector(".progress-bar-hunger")
const barra_vida = document.querySelector(".progress-bar-health")

const button_feed = document.querySelector("#feed-button")
const button_clean = document.querySelector("#clean-button")
const button_play = document.querySelector("#play-button")
const imageT = document.querySelector("#tamagotchi-image")


button_name.addEventListener("click", function() {
    title_name.innerHTML = input_name.value;
});

let intervaloHambre =  setInterval( function() {
    hambre = hambre + 10;
    if (hambre > 100) {
         hambre = 100;
         clearInterval();
    }
    updateHambre();  
    updateImage();
}, 2000); 

let intervaloVida =  setInterval( function() {
    vida = vida - 5;    
    if (vida < 0) {
         vida = 0;
         clearInterval();         
    }
    updateVida(); 
    updateImage();
}, 2000); 


button_feed.addEventListener("click", function() {
    hambre = hambre - 10;
    if (hambre < 0) {
        hambre=0;
    }
    updateHambre();
});

button_clean.addEventListener("click", function() {
    vida = vida + 10;
    if (vida > 100) {
         vida = 100;
    }
    updateVida();
});


button_play.addEventListener("click", function() {
    hambre = hambre + 10;
    if (hambre > 100) {
         hambre = 100;
    }
    vida = vida - 5;
    if (vida < 0) {
         vida = 0;
    }
    updateHambre();
    updateVida();
});

function updateHambre(){
    barra_hambre.style.width = hambre + "%";
    if(hambre <= 50){
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "green";
    }
    else if(hambre > 50 && hambre <= 80){
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "yellow";
    }
    else if(hambre > 80){
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "red";
    }
}

function updateVida(){
    
    barra_vida.style.width = vida + "%";
    if(vida > 50){
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "green";
    }
    else if(vida > 20 && vida <= 50){
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "yellow";
    }
    else if(vida <= 20){
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "red";
    }
}

// function updateImage(){
//     if(vida > 50 ){
//         imageT.style.backgroundImage = "url(./images/happy.gif)";  
//     }
//     else if((vida > 20 && vida <= 50) || (hambre > 50 && hambre <= 80)){
//         imageT.style.backgroundImage = "url(./images/casi.gif)"; 
//     }
//     else if((vida <= 20 && vida >= 10) || (hambre > 80)){
//         imageT.style.backgroundImage = "url(./images/angry.gif)"; 
//     }
//     else if(vida < 10){
//         imageT.style.backgroundImage = "url(./images/mucho-dead.gif)"; 
//     }
// }


function updateImage(){
    if(vida > 50 ){
        imageT.style.backgroundImage = "url(./images/happy.gif)";  
    }
    else if(vida > 20 && vida <= 50) {
        imageT.style.backgroundImage = "url(./images/casi.gif)"; 
    }
    else if(vida <= 20 && vida > 0 ){
        imageT.style.backgroundImage = "url(./images/angry.gif)"; 
    }
    else if(vida == 0){
        imageT.style.backgroundImage = "url(./images/mucho-dead.gif)"; 
    }
}


function int_timer() {
    if(hambre==100){
        return 1000
    }
    else{
        return 2000
    }

}