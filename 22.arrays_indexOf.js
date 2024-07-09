// // arrays -vetores- string
let nomes =[ "marta ","joao","maria", "geralda ","jonas","alice"];

const ler =require('readline-sync')
let nome = ler .question("digite um nome:   ")// para pegar o nome que o usuario digitar 
// let nome ="maria" // salva o nome dentro da variavel Nome 
//console.log(nomes.indexOf(nome));// mostra em qual posição o nome se encontra dentro da variavel Nomes 
let x = nomes.indexOf(nome);

if (x >= 0) {// determinar se o nome estava dentro do arry ele tem que ser maior que 0 .

    console.log("o nome " + nome + "esta  na posição " +x+  "no array nomes.");// se sim retorna 
} else {
    console.log( "o nome " + nome+  "não existe no arry nomes ");// se não da a mensagem 
}
