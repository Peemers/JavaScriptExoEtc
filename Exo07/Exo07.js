

function calculer(x, y, operation){
 return operation (x, y);
}

let resultat = calculer(10, 5, function(x, y){
 return x + y;
});

let resultat2 = calculer(10, 5, (x, y) => x + y)

console.log(resultat);
console.log(resultat2)

/*----------------------------------------------------------------------------------*/
// function Modifier (nom, callback){
//  return callback(nom)
// }
//
// let enMaj = Modifier("Alice", (tu) => tu.toUpperCase());
//
// let enMin = Modifier("Mathieu", function(tl){
//  return tl.toLowerCase()});
//
// console.log(enMaj)
// console.log(enMin)
/*----------------------------------------------------------------------------------*/
// function verifierPrix(prix, test){
//  return test(prix);
// }
//
// const prix = verifierPrix(40, (t) => t > 100);
//
//
// const prix2 = verifierPrix(40, function (p){
//  return p < 50;
// });
//
// console.log(prix);
// console.log(prix2);
/*----------------------------------------------------------------------------------*/

// function executer(action){
//  return action();
// }
// const salutation = executer (() => "bonjour");
//
// console.log(salutation);

/*----------------------------------------------------------------------------------*/

// setTimeout(function() {
//  console.log("3 secondes sont passées");
// }, 3000);

// setInterval(function() {
//  console.log("1 secondes est passée");
// }, 1000);

/*----------------------------------------------------------------------------------*/

const notes = [10, 15, 20]

notes.forEach((note) => console.log(`note : ${note}`));