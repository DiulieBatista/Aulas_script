//Arrow Functions Simples -aplicando calculos de desconto 

// function result(valor ,desconto) {
//     return valor - (valor * (desconto/100));
// }
// console.log(result(125.99,15).toFixed(2));

const ler =require("readline-sync");

let result=(valor,desconto) => valor - (valor * (desconto/100));// declaração varaivel/declarção funcão /dessclarção da equação 
let valor = ler.questionFloat("digite um valor : ");
let desconto= ler.questionFloat("imforme qual sera o desconto %");

let re =result (valor, desconto).toFixed(2);

console.log("o valor de "+ valor + " com deesconto de "+ desconto +"%  sera de R$ "+ re );

