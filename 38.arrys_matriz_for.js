//Exibir valores de uma matriz com FOR LOOP 

let numeros = [

[12,7,34,19,20],
[10,89,21,65,66],
[25,35,47,17,6,],
[15,71,52,61,41]

];

let sacolao = [

["frutas ","legumes"],
["abacaxi","abobrinha"],
["uva ","batata"],
["abacate","cebola"],
["maça ","cenoura"],
["banana","pimentão"]

];
//console.log(numeros.length);// retorna o numero de linhas na matriz 
//consol.log (numeros[0].length);// retorna o numero de dados da posição da matriz 


for (let i = 0; i < numeros.length; i++) { // length so pega as linhas // primeiro for pega as linhas 
    for (let j = 0; j < numeros[i].length; j++) {// segundon for pegas as colunas 

        console.log(`linha ${i}- coluna ${j}: ${numeros[i][j]}`); 
    }
    
}
 
for (let x = 0; x < sacolao[0].length; x++) {// coluna x

console.log(`[${sacolao [0][x]}]`);
   for (let y = 0; y < sacolao.length; y++) {// linha y
   console.log(sacolao[y][x]);
}
}