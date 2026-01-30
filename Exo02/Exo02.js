// h1
const h1 = document.getElementById("h1");

// inputs
const userInputNom = document.getElementById("userInputNom");
const userInputPrenom = document.getElementById("userInputPrenom");
const userInputDateDeNaissance = document.getElementById("userInputDateDeNaissance");

// bouton
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
 const nom = userInputNom.value;
 const prenom = userInputPrenom.value;

 const dateDeNaissance = new Date(userInputDateDeNaissance.value);
 const anneeNaissance = dateDeNaissance.getTime();

 h1.textContent = `Tu t'appelles : ${nom} ${prenom} et tu es né en ${anneeNaissance}`;
});