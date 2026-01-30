const inputValues = document.getElementById("inputValues");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

 const inValeur = inputValues.value.split(",");


 let nombreTab = [];
 for (let i = 0; i < inValeur.length; i++) {
  nombreTab.push(Number(inValeur[i].trim()));
 }


 let somme = 0;
 for (let i = 0; i < nombreTab.length; i++) {
  somme += nombreTab[i];
 }

 let moyenne = somme / nombreTab.length;


 result.textContent = `[ ${nombreTab.join(", ")} ] - Moyenne: ${moyenne}`;
});
