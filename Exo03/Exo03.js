// h1
const h1 = document.getElementById("h1");

// input
const userInput = document.getElementById("userInput");

// bouton
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
 const year = Number(userInput.value);

 if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0)
 {
  h1.textContent = `${year} est une année bissextile`;
 }
 else
 {
  h1.textContent = `${year} n'est pas une année bissextile`;
 }
});
