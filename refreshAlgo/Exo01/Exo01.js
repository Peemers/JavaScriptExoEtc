const phrase = "Salut tout le monde"
const voyelles = "aeiouyAEIOUY"
let compteur = 0

for (let i = phrase.length - 1; i >= 0; i--)
{
 let lettreActu = phrase[i]

 if (voyelles.includes(lettreActu)) {
  compteur++
 }
}