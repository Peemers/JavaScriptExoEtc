let btn = document.getElementById("btn")
let userInput = document.getElementById("userInput");
let h1 = document.getElementById("h1")

btn.addEventListener("click", () =>
{
 let table = userInput.value;
 let resultat = "" ;

 for (let i = 1; i <= 20; i++)
 {
  resultat += `${table} x ${i} = ${table * i}<br>`;
 }

 h1.innerHTML = resultat;
})