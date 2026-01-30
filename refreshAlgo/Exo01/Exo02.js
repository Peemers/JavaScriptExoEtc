let nombres = [1, 2, 2, 3, 4, 4, 5]
let vide = []

for (let n of nombres)
{
 if (!vide.includes(n))
 {
  vide.push(n);
 }
}

console.log(vide);