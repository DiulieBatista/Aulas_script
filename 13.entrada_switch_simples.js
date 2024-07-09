// Entrada  usuario condicional escolha caso (Switch Case)

const ler = require('readline-sync');

console.log("----------------------MENU---------------------");
console.log("*** Imforme o valor do empréstimo:  ***");
let valor = ler.questionFloat("=>");

console.clear();//limpa tela 

console.log("---------------MENU OPÇÕES DE PAGAMENTO--------");
console.log(" 1.PIX \n 2.DÉBITO \n 3.CRÉDITO \n 4.DINHEIRO \n ");
console.log("-------------------------------------------------");
let opt= ler.questionInt("=>");
let result;


switch (opt) {
    case 1:
       result= valor += valor *0.15 ;
        console.log("pix acrecimo  de 15%");
        console.log(`realizando o pagamennto do emprestimo em PIX o valor ficara em ${result}`);
        break;
    case 2:
            result= valor += valor *0.20 ;
             console.log("DÉBITO acrecimo de 20%");
             console.log(`realizando o pagamennto do emprestimo em DÉBITO o valor ficara em ${result}`);
         break;

    case 3:
            result= valor += valor *0.30 ;
             console.log("CRÉDITO acrecimo  de 30%");
             console.log(`realizando o pagamennto do emprestimo em CRÉDITO  o valor ficara em ${result}`);
         break;

    
    case 4:
            result= valor += valor *0.10 ;
             console.log("DINHEIRO acrecimo  de 10%");
             console.log(`realizando o pagamennto do emprestimo em DINHEIRO  o valor ficara em ${result}`);
         break;
     
    default:
        console.log("Opção inválida !!!")
        break;
}


