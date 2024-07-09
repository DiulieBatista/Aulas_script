// excluir  e adicionar dados no arrys -Splice 

let animais =["gato", "cachorro ","girafa ","leão ","macaco ","elefante"];

let animais_removidos=animais.splice(2,3); // posição que quer manter e quantas posição vai apagar 

console.log(animais_removidos);
console.log(animais);


console.log("----------------------------------------------------------");
animais.splice(1,  2,"urso","jacaré","esquilo");// apartir do primeiro numero adicionar nomes ou numeros  declarados
console.log(animais);
