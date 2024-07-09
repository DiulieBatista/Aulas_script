// trabalhar com funções no javascript - ultilizando paramêtros= varaiavel que vai receber outra 

function  dobra (num) { 
  let result = num*2;
  console.log("o dobro do numero imformado e"+ result);
}
dobra(6);

function dobro(num) {
    return"o dobro  do numero imformado e "+ num*2; 
    
}
console.log(dobro(6));

function contar_txt (txt) {
    total =txt.length;
    console.log("o texto ou palavra digitada contem  "+ total + "caracteres.");   
}
let texto= "era uma vez nova lima.";

contar_txt(texto);

