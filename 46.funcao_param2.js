// trabalhar com funções no javascript - ultilizando  dois ou mais paramêtros
// calcular valores 
function somar (x,y) {
    return x+y;
}
console.log( " a soma dos valores retonados e "+ somar(3,4));


function calc(x,y,op) {
    if (op == 'somar') {
        return x+y;
        
    } else if (op== 'sub ') {
        return x-y;


    } else if (op== 'mul ') {
        return x*y;

    } else {
        return x/y;

    }
    
}
console.log("o calculo  dos valores imfomados e " + calc(5,7,'mult'));


