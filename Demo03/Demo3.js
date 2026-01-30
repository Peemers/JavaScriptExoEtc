//Opération entrée sortie

//1.Sortie


//1.1. Console
//Voire Demo 01 et 02

//1.2. Boite de dialogue
//Bof peu utilisé

//1.3 Dom Document Objet World

//Récupérer le paragraphe

const p1 = document.getElementById("p1");
p1.textContent = "texte modifié depuis Js"

//2. Entrées

//2.1 boite de dialogue
let prenom = prompt("Quel Prenom: ");
p1.textContent = "tu t'appelles : " + prenom;

//2.2 DOM

let userInput = document.getElementById("userInput");
p1.textContent = "tu t'appelles : " + userInput.value;

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {p1.textContent = "Tu t'appelles : " + userInput.value;});

//userInput.addEventListener("input", e => {p1.textContent = "Tu t'appelles " + userInput.value;});




