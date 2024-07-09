// ultilizando arrow funcion com IF e ELSE 

// function teste (a,b) {
// if (a==b) {
//     return a;
// } else {
//     return a*b
// }    
// }

let  verificarValor =(idade,tipo,valorIngresso ) =>{ 
    // chave para resultados 
if (idade>=18 && tipo ==="normal") {
    return valorIngresso-(valorIngresso*0.25);

} else if (idade >=18 && tipo==="estudante") {
    return valorIngresso-(valorIngresso*0.50);


}else if (idade >= 18 && tipo==="vip") {
    
return valorIngresso+(valorIngresso*0.20);

}else {

    return "entrada não permitida ou ingresso invalido "
}

}

const ler= require('readline-sync');
let idade =ler.questionInt("digite sua idade : ");
let tipo =ler.question("imforme o tipo do ingresso: ").toLowerCase();
let valorIngresso= ler.questionFloat("digite o valoe do ingresso: ");
console.log(verificarValor(idade ,tipo,valorIngresso));


