const h1 = document.getElementById("h1")
const couleurs = ["#FF8A65", "#FFB399", "#FFD1A9", "#FFE5CC", "#FFCC99", "#FFAB91"]
const btnParis = document.getElementById("btnParis")
const btnMoscou = document.getElementById("btnMoscou")

let index = 0;

function changerCouleur(){
 document.body.style.backgroundColor = couleurs[index];
 index++;
 if(index >= couleurs.length){
  index = 0;
 }
}
//setInterval(changerCouleur, 1000);

function horlogeParis()
{
 const timeNow = new Date();

 h1.textContent = timeNow.toLocaleString(
   navigator.language,
   {
    timeZone: "Europe/Paris",
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
setInterval(horlogeParis, 1000);


function horlogeMoscou()
{
 const timeNow = new Date();

 h1.textContent = timeNow.toLocaleString(
   navigator.language,
   {
    timeZone: "Europe/Moscow",
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
setInterval(horlogeMoscou, 1000);

h1.addEventListener("mouseover", function(){
 h1.style.transform = "scale(1.05)";
 h1.style.transition = "transform 0.3s ease-in";
});

h1.addEventListener("mouseout", function(){
 h1.style.transform = "scale(1)";
});

btnParis.addEventListener("click", function(){
 horlogeParis();
});

btnMoscou.addEventListener("click", function(){
 horlogeMoscou();
})








