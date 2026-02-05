const h1 = document.getElementById("h1")
const couleurs = ["#FF8A65", "#FFB399", "#FFD1A9", "#FFE5CC", "#FFCC99", "#FFAB91"]
const btnParis = document.getElementById("btnParis")
const btnMoscou = document.getElementById("btnMoscou")
const btnNY = document.getElementById("btnNY")
const btnTokyo = document.getElementById("btnTokyo")
const fuseauActu = document.getElementById("fuseauActu")
let horlogeActuel = "Paris";
let index = 0;

function changerCouleur() {
 document.body.style.backgroundColor = couleurs[index];
 index++;
 if (index >= couleurs.length) {
  index = 0;
 }
}

function timeInterval(){
 setInterval(() => {
  horlogeMonde(horlogeActuel);
  changerCouleur();
 }, 1000);
}

const DATE_FORMAT = {
 weekday: "long",
 day: "2-digit",
 month: "long",
 year: "numeric",
 hour: "2-digit",
 minute: "2-digit",
 second: "2-digit",
};

const FUSEAU = {
 "Paris": "Europe/Paris",
 "Mouscou": "Europe/Moscow",
 "NY": "America/New_York",
 "Tokio": "Asia/Tokio"
};


function horlogeMonde(ville = "Paris") //fonction avec para optionnel avec par defaut Paris (merci MDN!!)
{
 const timeNow = new Date();

 const zone = FUSEAU[ville] || FUSEAU["Paris"];

 const formatageDef = timeNow.toLocaleDateString("fr-Fr", {
  ...DATE_FORMAT,
  timeZone: zone
 });

 h1.textContent = formatageDef;
 fuseauActu.textContent = ville === "NY" ? "New-York" : ville;
}

h1.addEventListener("mouseover", function () {
 h1.style.transform = "scale(1.05)";
 h1.style.transition = "transform 0.3s ease-in";
});

h1.addEventListener("mouseout", function () {
 h1.style.transform = "scale(1)";
});

btnParis.addEventListener("click", () => {
 horlogeActuel = "Paris";
});
btnMoscou.addEventListener("click", () => {
 horlogeActuel = "Moscou";
});
btnNY.addEventListener("click", () => {
 horlogeActuel = "NY";
});
btnTokyo.addEventListener("click", () => {
 horlogeActuel = "Tokyo";
});

timeInterval();