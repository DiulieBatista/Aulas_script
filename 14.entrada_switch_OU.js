// Entrada de opções Ultilizando Condicional OU Switch Case 

const ler = require('readline-sync');

let porta =ler.question("Escolha uma porta :A -B-C ou D: ");

switch (porta) {
    case "a":
    case "A":
     console.log("A Porta A esta aberta!");

     break;

    case "b":
    case "B":
     console.log("A Porta B esta aberta!");
     break;
    
    case "C":
    case "c":
         console.log("A Porta C esta aberta!");
       break;

    case "D":
    case "d":
             console.log("A Porta D esta aberta!");
        break;
        
    default:
        console.log("opção invalida !!!");
        break;
}