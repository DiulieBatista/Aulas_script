//Estrutura de repetição DO WHILE 

const ler = require('readline-sync')
let soma = 0,num = 0;

do {
    soma += num;// soma= soma+num 
    num=ler.questionInt(" digite um numero ou -1 para sair ")
    
} while (num > 0);
 console.log( " a soma dos numeros digitos e :"+ soma);