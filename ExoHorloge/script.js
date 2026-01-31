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

function horlogeMonde(fuseau = "Paris") //fonction avec para optionnel avec par defaut Paris (merci MDN!!)
{
 const timeNow = new Date();

 let timeParis = timeNow.toLocaleString(navigator.language, {
  timeZone: "Europe/Paris",
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

 let timeMoscou = timeNow.toLocaleString(navigator.language,{
  timeZone: "Europe/Moscow",
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

 let timeNewYork = timeNow.toLocaleString(navigator.language,{
  timeZone: "America/New_York",
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})

 let timeTokio = timeNow.toLocaleString(navigator.language,{
  timeZone: "Asia/Tokyo",
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})

 let horlogeActuel = "Paris"

 setInterval(() => {
  horlogeMonde(horlogeActuel);
  changerCouleur();
 }, 1000);

h1.addEventListener("mouseover", function(){
 h1.style.transform = "scale(1.05)";
 h1.style.transition = "transform 0.3s ease-in";
});

h1.addEventListener("mouseout", function(){
 h1.style.transform = "scale(1)";
})}

btnParis.addEventListener("click", () => { fuseauCourant = "Paris"; });
btnMoscou.addEventListener("click", () => { fuseauCourant = "Moscou"; });







