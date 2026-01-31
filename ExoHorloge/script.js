const h1 = document.getElementById("h1")
const couleurs = ["#FF8A65", "#FFB399", "#FFD1A9", "#FFE5CC", "#FFCC99", "#FFAB91"]

let index = 0;

function changerCouleur(){
 document.body.style.backgroundColor = couleurs[index];
 index++;
 if(index >= couleurs.length){
  index = 0;
 }
}
setInterval(changerCouleur, 1000);

function horlogeNow()
{
 const timeNow = new Date();

 h1.textContent = timeNow.toLocaleString(
   navigator.language,
   {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    millisecond: "2-digit",
   }
 );
}

h1.addEventListener("mouseover", function(){
 h1.style.transform = "scale(1.2)";
 h1.style.transition = "transform 0.3s ease-in";
});

h1.addEventListener("mouseout", function(){
 h1.style.transform = "scale(1)";
});

setInterval(horlogeNow, 1000);






