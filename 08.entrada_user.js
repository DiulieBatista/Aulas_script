// Entrada de dados do Usuário 

const readline = require('readline');
const ler = readline.createInterface({
    input:process.stdin,output:process.stdout
});
ler.question("digite um numero :  ", (num1)=>{
   ler.question("didite outro numero:  ",(num2 ) => {
     let soma = Number(num1)+ Number(num2);
     console.log("o resultado da soma è "+ soma);
     ler.close();
    });
});

