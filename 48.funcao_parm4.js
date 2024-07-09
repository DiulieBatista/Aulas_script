// trabalhar com funções no javascript - ultilizando  dois ou mais paramêtros
// obleto arrays 

const ler = require('readline-sync')

function criarEvento(nome, local ,data ,hora ,participantes, custoPorPart) {
    let custoTotal=calcularCustoTotal(participantes,custoPorPart);
    return {
        Nome:nome, // chave valor 
        Local:local,
        Data:data,
        Hora:hora,
        Participantes:participantes,
       ' Custo Por Participante':custoPorPart,
       'Custo Total ':custoTotal
    };
}

function calcularCustoTotal(part,custoPP) {
    return new Intl.NumberFormat('pt-BR' ,{ 
        style:'currency',currency:'BRL'}).format(part*custoPP);
}

function cadastrar(){
let nome = ler.question("imforme o nome do envento:");
let local = ler.question("imforme o local do evento:");
let data = ler.question(" imforme a data do evento :");
let hora = ler.question("imforme  a hora do envento :");
let part= ler.questionInt("imforme a quantidade de participantes:");
let custoPP = ler.questionFloat("imforme o valor que cada um vai pagar");

let EVT =criarEvento(nome, local ,data ,hora ,part,custoPP);
console.clear();

exibirEvento(EVT);

}
 let exibirEvento = function(evento){
console.log("----------------imformaçãoes do evento --------------------");

for ( let [chave,valor ] of Object.entries(evento)) {
    console.log( `=> ${chave}: ${valor}`);
}
console.log("-----------------------------------------------------------");
 }
 cadastrar();
