const vendeurs = [
 { nom: "Alice", CA: 1500 },
 { nom: "Bob", CA: 3200 },
 { nom: "Charlie", CA: 2100 }
];

let maximum = vendeurs[0].CA;
let name = vendeurs[0].nom;

for (i = 0; i < vendeurs.length; i++){
 if (vendeurs[i].CA > maximum){
  maximum = vendeurs[i].CA
   name = vendeurs[i].nom;
 }
}
console.log(`Le meilleur vendeur est : ${name} avec ${maximum} de CA`);

