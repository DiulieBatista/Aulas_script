// Estrutura de Repetição - FOR  - Condicional IF ELSE 

const ler = require('readline-sync')

const C =5;
let x =ler.questionInt(" digite um numero : ")
let cont =C;
for (let i = 0; i <= x; i++) {
   console.log(i);
    if (i >= cont) {
       let sair=ler.question("'enter' continuar contando ou 'sair' para finalizar '");
       sair=sair.toLowerCase();

       if  (sair === "sair" || i==x){
        console.log("contagem finalizada !");
        break;

       }
       cont += C;

    }


}