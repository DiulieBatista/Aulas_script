// Entrada IF ELSE - Estrutura Condicional 
 
 const ler = require('readline-sync');

 let nome = ler.question("Digite o nome do aluno: ");
 let nota1 = ler.questionFloat("imforme a nota1:  ");
 let nota2 = ler.questionFloat("imforme a nota 2: ");
 let nota3 = ler.questionFloat("imforme a nota 3: ");

 let media = (nota1 + nota2 + nota3)/3;
 media =  media.toFixed(2);// arrendodando o que esta dentro da media 

if (media>= 60) {
    console.log("o aluno"+ nome+ " foi proavado com a nota "+ media);

} else if (media>=30 && media <= 59){
 console.log ("o aluno", nome, " esta de recupeção com a nota ", media );    

}else{

    console.log(`o aluno${nome} foi reprovado com a nota ${media}`);
}
   
