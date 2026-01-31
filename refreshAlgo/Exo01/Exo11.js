const produits = [
 { nom: "Clavier", prix: 150, enStock: true },
 { nom: "Souris", prix: 25, enStock: false },
 { nom: "Écran", prix: 150, enStock: true },
 { nom: "Tapis", prix: 10, enStock: true }
];

// let totalPrix = 0
//
// for (i = 0; i < produits.length; i++){
//  if (produits[i].enStock === true){
//   totalPrix += produits[i].prix;
//  }
//  console.log(totalPrix);
// }

// let totalPrix = 0
//
// for (i = 0; i < produits.length; i++){
//  let nomMinuscules = produits[i].nom.toLowerCase();
//
//  if (nomMinuscules.includes("s")){
//   totalPrix += produits[i].prix;
//  }
// }
// console.log(totalPrix)


for (i = 0; i < produits.length; i++){
 if (produits[i].prix >= 100){
  produits[i].prix = produits[i].prix * 0.9;

  console.log(`Le prix de ${produits[i].nom} à été réduit`)
 }
}
console.log(produits);
