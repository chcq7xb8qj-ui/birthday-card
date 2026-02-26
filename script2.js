const container = document.querySelector(".sprinkles-container");

/* SPRINKLES */
for(let i=0;i<60;i++){
let sprinkle = document.createElement("div");
sprinkle.classList.add("sprinkle");
sprinkle.style.left = Math.random()*100+"vw";
sprinkle.style.animationDuration = (Math.random()*6+8)+"s";
container.appendChild(sprinkle);
}

/* REPRODUCTOR */
function toggleMusic(){

const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const text = document.getElementById("playSongText");

if(audio.paused){
audio.play();
cover.classList.add("playing");
text.textContent="Pause the song";
text.classList.add("playing");
}else{
audio.pause();
cover.classList.remove("playing");
text.textContent="Play the song";
text.classList.remove("playing");
}

}

/* 🔥 SCROLL INDICATOR — MÉTODO QUE SÍ FUNCIONA EN KODER / MÓVIL */

const scrollIndicator = document.getElementById("scrollIndicator");

function updateScrollIndicator(){

if (window.scrollY > 5){
scrollIndicator.style.display = "none";   // 👈 lo quitamos completamente
}
else{
scrollIndicator.style.display = "block";  // 👈 vuelve a aparecer arriba
}

}

window.addEventListener("scroll", updateScrollIndicator, { passive:true });

updateScrollIndicator();