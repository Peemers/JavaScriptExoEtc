const inputValues = document.getElementById("inputValues");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const result = document.getElementById("result");

function celsiusToFarhrenhet(valeur) {
 return (valeur * 9 / 5) + 32;
}

function farhrenheitToCelsius(valeur) {
 return (valeur - 32) / 1.8;
}

function kilometreToMiles(valeur) {
 return valeur * 0.621371
}

function milesToKm(valeur) {
 return valeur * 1.60934
}

function convertir(fonctionConversion, samere, lapute) {

 const valeur = parseFloat(inputValues.value);
 if (isNaN(valeur))
 {
  result.textContent = "Que des chiffres ou des nombres svp"
 }
 const resultatConversion = fonctionConversion(valeur);
 const resultatArrondi = resultatConversion.toFixed(2);

 result.textContent = `${valeur} ${samere} ${resultatArrondi} ${lapute}`;
}

btn1.addEventListener("click", () => {
 convertir(celsiusToFarhrenhet, "C°", "F°")
});

btn2.addEventListener("click", () => {
 convertir(farhrenheitToCelsius, "F°", "C°")
});

btn3.addEventListener("click", () => {
 convertir(kilometreToMiles, "Km", "Miles")
});

btn4.addEventListener("click", () => {
 convertir(milesToKm, "Miles", "Km")
});


