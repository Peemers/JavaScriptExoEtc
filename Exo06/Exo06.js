const inputValues = document.getElementById("inputValues");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const result = document.getElementById("result");

function celsiusToFarhrenhet()
{
 const valeur = parseFloat(inputValues.value);
 if (isNaN(valeur)) return "Uniquement des nombres svp";
 const resultat = (valeur * 9/5) + 32;
 return `${valeur} °C = ${resultat.toFixed(2)} °F`;
}

function farhrenheitToCelsius()
{
 const valeur = parseFloat(inputValues.value);
 if (isNaN(valeur)) return "Uniquement des nombres svp";
 const resultat = (valeur -32) / 1.8;
 return `${valeur} °F = ${resultat.toFixed(2)} °C`;
}

function kilometreToMiles()
{
 const valeur = parseFloat(inputValues.value);
 if (isNaN(valeur)) return "Uniquement des nombres svp";
 const resultat = (valeur *0.621371);
 return `${valeur} KM = ${resultat.toFixed(2)} °Miles)`;
}

function milesToKm()
{
 const valeur = parseFloat(inputValues.value);
 if (isNaN(valeur)) return "Uniquement des nombres svp";
 const resultat = (valeur *1.60934);
 return `${valeur} Miles = ${resultat.toFixed(2)} KM)`;
}

btn1.addEventListener("click", () => {
 result.textContent = farhrenheitToCelsius();
});

btn2.addEventListener("click", () => {
 result.textContent = celsiusToFarhrenhet();
});

btn3.addEventListener("click", () => {
 result.textContent = kilometreToMiles();
});
btn4.addEventListener("click", () => {
 result.textContent = milesToKm();
})


