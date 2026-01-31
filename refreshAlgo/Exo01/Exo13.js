const note = [12, 15, 18, 9, 14]
let aReussi = true
console.log(aReussi)

for (j = 0; j < note.length; j++){
 if (note[j] < 10){
  aReussi = false
 }
}

console.log(aReussi)