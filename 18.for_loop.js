// Estrura de repetição FOR 

const ler = require('readline-sync')

let x = ler.questionInt("imforme um numero ")
// ordem crescente 

for (let i = 0; i <= x; i++) {
   console.log(i);
}
console.log("-------------------------------------------");   

// ordem descrecente 

for (let i = x; i >= 0; i--) {
    console.log(i);
     
 }