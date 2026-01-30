//Demo 2 les Variables

/* 1.0 Déclaration
-> let
-> const
 */

//Les variables ont un typage dynamique

//1.1. Déclaration d'une variable :
//Par défaut le type de la variable est Undefined :

let maVariable;

//Interpolation
console.log(`maVariable ${maVariable} : `, typeof maVariable ); //Undefined

//1.2 Affectation Variable :

maVariable = "Mathieu"
console.log(`maVariable ${maVariable} : `, typeof maVariable ); //String

maVariable = 12;
console.log("maVariable : ", typeof maVariable ); //Number

maVariable = 12.2;
console.log("maVariable : ", typeof maVariable ); //Number

maVariable = true;
console.log("maVariable : ", typeof maVariable ); //Bool

maVariable = []
console.log(`maVariable ${maVariable} : `, typeof maVariable );
console.log(maVariable.constructor.name);

maVariable = {lastname: "Peeters", firstname: "Mathieu"}
console.log(`maVariable ${maVariable} : `, typeof maVariable );
console.log(maVariable.constructor.name);

maVariable = function () { };
maVariable = () =>{ };
console.log(`maVariable ${maVariable} : `, typeof maVariable );
console.log(maVariable.constructor.name);

//Constantes

const BASE_URL_API = "https://lovalhost:7828/api/;"
// BASE_URL_API = "coucou" biensur ça ne fonctionne pas.
const btn1 = document.getElementById("btn1");

//Différence entre let/const vs var

//Var n'a pas la notion de scope tandis que let et const oui

//4. Récupération d'une valeur utilisateur
//4.1 Methode Prompt (message : string, response? : string) : string | nul

let age = prompt("Quel Age as tu ?", "18" );
//let age = prompt("Quel Age as tu ?" );

console.log(`${age} : ${typeof age}`)



