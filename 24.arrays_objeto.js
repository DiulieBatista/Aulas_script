//arrays e objetos 

//let numeros ={};
//console.log(typeof numeros);

let cliente ={
    nome: "fulano",
    idade:34
};
//console.log(cliente.nome);// imprimir o nome 
//console.log(cliente.idade );// imprimir a idade 

console.log(`nome: ${cliente.nome}- idade :${cliente.idade}`);

cliente.telefone ="(31) 99999-9999"

console.log(`nome: ${cliente.nome}- idade :${cliente.idade}- tel: ${cliente.telefone}`);

delete cliente.idade;// excluir o valor da chave idade 

console.log(`nome: ${cliente.nome}- idade :${cliente.idade}- tel: ${cliente.telefone}`);
 
cliente.nome= "maria"; //atualizar o valor setano a chave correspondente 

console.log(`nome: ${cliente.nome}- idade :${cliente.idade}- tel: ${cliente.telefone}`);
