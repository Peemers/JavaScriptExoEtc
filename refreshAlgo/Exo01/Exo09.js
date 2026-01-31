// let note = [15, 8, 12, 14, 19, 5, 9]
//
// let select = note.filter((number) => number >= 10);
// let sum = 0;
//
// for (i = 0; i < select.length; i++){
//  sum += select[i];
// }

// console.log(sum);

let note = [15, 8, 12, 14, 19, 5, 9]
let sum = 0

for (i = 0; i < note.length; i++){
 if(note[i] >= 10){
  sum += note[i]
 }
}
console.log(sum)