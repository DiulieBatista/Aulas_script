const ler = require('readline-sync');
const {listarProduto,cadProduto,atualizarProduto, listarProdutoPorId,ExcluirProdutos}=require('./54.functions_system'); // tem que chamar todas as funcoões com {,}.

let check =true; 
// repetição  enquanto for verdadeiro roda

while (check) {
    
console.log("--------------sistema de gerenciamento  de estoque ------------");
console.log("-- escolha  as opções abaixo-----------------------------------");
console.log("1.Adiocionar---------------------------------------------------");
console.log("2.Atualizar  produto-------------------------------------------");
console.log("3.listar produto-----------------------------------------------");
console.log("4.Listar produto por ID----------------------------------------");
console.log("5.Excluir produto----------------------------------------------");
console.log("6. Sair do sistema---------------------------------------------");
console.log("---------------------------------------------------------------");
let opt = ler.questionInt("=>");

switch (opt) {
    case 1:
        console.clear();// apagar o menu acima 
        cadProduto();// cadastra mais intens no arrys 
        break;


    case 2:
        console.clear();
        atualizarProduto(); // mostra pruduto pelo id se ta cadastrado ou não 
        
        break;

    case 3:
        console.clear();
        listarProduto();// mostrar todos os intens do arrys 
        break;

    case 4:
        console.clear();
        listarProdutoPorId();
        break;

    case 5:
        console.clear();
        ExcluirProdutos();
        break;

    case 6:
         check=false; // encerrar o sistema 
    
        break;

     default:
        console.log("opção Invalida! tente novamente");
        break;
};

}
console.log("sistema finalizado !");