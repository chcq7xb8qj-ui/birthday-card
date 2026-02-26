/* SPRINKLES FONDO */

const sprinkleColors = ["#ff4d6d","#ffd60a","#4cc9f0","#80ed99","#c77dff"];

for(let i=0;i<80;i++){

let sprinkle = document.createElement("div");
sprinkle.classList.add("sprinkle");

sprinkle.style.left = Math.random()*100+"vw";
sprinkle.style.background = sprinkleColors[Math.floor(Math.random()*sprinkleColors.length)];
sprinkle.style.animationDuration = (Math.random()*5+5)+"s";
sprinkle.style.opacity = Math.random();

document.querySelector(".sprinkles-container").appendChild(sprinkle);
}

/* SOPLAR VELA */

function blowCandle(){

document.getElementById("flame").style.opacity="0";

setTimeout(()=>{
document.getElementById("page").style.opacity="0";
},400);

setTimeout(()=>{
window.location.replace("page2.html");
},1000);

}