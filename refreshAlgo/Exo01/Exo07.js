let mot = ["pomme", "banane", "pomme", "orange", "pomme"]

for (i = 0; i < mot.length; i++)
{
 if (mot[i] === "pomme")
 {
  mot[i] = "peche";
 }
}

console.log(mot);