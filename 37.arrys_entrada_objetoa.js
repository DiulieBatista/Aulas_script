// ultilizando o redline para capturar dados para o objeto arrys matriz 

const ler = require ('readline-sync')

let cliente =[{}];

let check= true;

while (check) {
    let nome = ler.question("digite seu nome");
    let idade = ler.question("imforme sua idade");
    let email = ler.question("digite seu email :");
    let carteira = ler.questionFloat("quanto ele tem de dinheiro?")


    cliente.push({nome: nome,idade:idade,email:email,carteira:carteira });

    let x=ler.question("dados cadrastrados deseja cadastra outros clientes ou 'sair' para finalizar ").toLowerCase();

    if (x==='sair') {
        check= false;
        console.log("sistema finalizado")
        
    } else {
        
    }
}
console.log(cliente);
console.log("Imforme umas das opçãoes:");
console.log("1.Listar carteira do cliente com valor menor que 100 reais ");
console.log("2. lista clientes em ordem alfabetica");
console.log("3. sair");
 let opt = ler.questionInt("=>");

 if (opt == 1) {
    let cli_card = cliente .filter (c=> c.carteira<100);
    console.table(cli_card);

 } else if(opt==2) {
    let ordem_alfa= cliente.sort((a,b)=> a.nome.localeCompare(b.nome));
    console.table(ordem_alfa)

 }else{
    check= false;
 }

 while (check) {
    console.log("sistema finalizado");
    
 }