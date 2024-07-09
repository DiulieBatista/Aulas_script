// arrays manipulação de dados 
let animais =["gato", "cachorro ","girafa ","leão ","macaco ","elefante"];
let numeros =[12,34,51,11,78,41,23];

console.log("exibir os itens iniciais do array -----------------------------------");
console.log(animais);
console.log(numeros);

// adicionar um valor no final do array 
// push final 

animais.push("coelho");
numeros.push(88);
console.log("exibir os novos dados no arry  apos a adição de dados----------------");
console.log(animais);
console.log(numeros);

// excluir  um valor no final do array 
// pop exclir 

animais.pop();
numeros.pop();
console.log("exibir os dados atualizados apos a exclusão dos ultimos dados -------");
console.log(animais);
console.log(numeros);

// adicionar um valor no inicio do arry
// unshift adicionar no começo 

animais.unshift("jacaré");
numeros.unshift(99);
console.log("exibir os dados atualizados apos a exclusão dos ultimos dados -------");
console.log(animais);
console.log(numeros);

// excluir o valor no inicio do array 
// shift excluir 

animais.shift();
numeros.shift();
console.log("exibir os dados atualizados apos a exclusão dos primeiros  dados ----");
console.log(animais);
console.log(numeros);

// organizar os dados do arry em ordem alfabetica 

animais.sort();
numeros.sort();
console.log("exibir os dados em ordem alfabetica ---------------------------------");
console.log(animais);
console.log(numeros);

// Orgnizar os dados do array em ordem contrario 
//reverse contratio 

animais.reverse();
numeros.reverse();
console.log("exibir os dados em ordem reversa ------------------------------- ----");
console.log(animais);
console.log(numeros);

