// Entrada de dados ultilizando a Biblioteca readLine-sync

const ler = require('readline-sync');

let num1= ler.questionInt("Digite um numero");
let num2 = ler.questionInt("digite  ouitro numero");

let soma = num1+num2;

console.log("O Resultado da soma é : "+ soma);
