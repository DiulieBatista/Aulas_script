//Entrada IF ternário 

const ler = require('readline-sync');
let valor =ler.questionInt("imforme um valor:  ");

var resul = valor > 15.99 ? "valor maior que 15.99 ": "valor menor  que 15.99";

 console.log(resul);
