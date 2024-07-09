// trabalhar com funções no javascript - ultilizando  dois ou mais paramêtros

// sistema de conversão de moedas 

const ler = require('readline-sync');

(async ()=> {
const {default: cor }= await import('chalk');
//console.log(cor.red("esse texto e da cor vermelha")); colocar cor 

const  DOLAR = 5.50 , EURO = 6.05 , LIBRA= 7.12,IENE = 0.033;

function dolar (valor) {
    result=valor / DOLAR;
    return new Intl.NumberFormat('en-US' ,{ // Conversão da moeda para dolar
        style:'currency',currency:'USD'}).format(result);

    }   

function euro (valor) {
    result=valor / EURO;
    return new Intl.NumberFormat('de-DE' ,{ // Conversão da moeda para EURO
    style:'currency',currency:'EUR'}).format(result);

}     
function libra (valor) {
    result=valor / LIBRA;
     return new Intl.NumberFormat('en-GB' ,{ // Conversão da moeda para LIBRA
    style:'currency',currency:'GBP'}).format(result);

}  

function iene (valor) {
    result=valor / IENE;
     return new Intl.NumberFormat('ja-JA' ,{ // Conversão da moeda para IENE
    style:'currency',currency:'JYP'}).format(result);
     }



function converterMoeda (valor , moeda) {

    switch (moeda) {
        case 1:// dolar 
         
            console.log(cor.green(` o valor imformado convertido para dolar  e ${ dolar(valor)}`));
            
            break;
        case 2:// euro 
         
            console.log(cor.magenta(` o valor imformado convertido para euro  e ${ euro(valor)}`));
            
            break;
        case 3://libra 
         
            console.log( cor.yellow(` o valor imformado convertido para libra  e ${ libra(valor)}`));
            
            break;
        case 4:// iene
         
            console.log( cor.blue(` o valor imformado convertido para iene e ${ iene(valor)}`));
            
            break;
    
    
        default:
             console.log(cor.red("opção digitada e invalida!!"));
            break;
    }
    
}
function menu () {
    let valor = ler.questionFloat(cor.blue("imforme um valor em reais"));
    console.log(cor.blue("----------------------Menu de Câmbio--------------------"));
    console.log(cor.blue("---selecione qual moeda deseja realizar a conversão-----"));
    console.log(cor.blue("1.DÓLAR----------"));
    console.log(cor.blue("2.EURO-----------"));
    console.log(cor.blue("3.LIBRA----------"));
    console.log(cor.blue("4.IENE-----------"));
    let opt =ler.questionInt("=>");
    converterMoeda(valor,opt)
}

menu();

})();

