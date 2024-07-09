// capturando dados do usuário e exibindo os dados do while 

const ler =require('readline-sync')

let frutas =[];
let check = true;

while (check) {

    console.log("----------------------As frutas cadstradas foram :---------------------------");
    for (let i = 0; i < frutas.length; i++) {
       console.log("=> "+ frutas[i]);
        
    }
    if (fruta ==='sair') {
        check = false;
    } else {
        frutas.push(fruta);
    }
     
}
console.log("----------------------As frutas cadstradas foram :---------------------------");
for (let i = 0; i < frutas.length; i++) {
   console.log("=> "+ frutas[i]);
    
}