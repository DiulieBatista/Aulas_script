// ultilizando arrow funcion com IF Ternário e array com objetos 

let usuarios = [
{nome:"Ana", idade:20},
{ nome: "João", idade: 25 },
{nome: "Maria", idade :30 },
{ nome:"Pedro", idade: 22 },
{nome: "Mariana", idade: 27 },
{nome:"Carlos", idade: 29 },
{nome: "Juliana",idade: 26 },
{nome: "Lucas", idade: 23 },
{ nome: "Isabela", idade: 31 },
{ nome: "Ana", idade: 20 },
{ nome: "Luiza", idade:18 },
{ nome: "Felipe", idade: 15 },
{ nome: "Gabriela", idade: 24 },
{nome: "Rafael", idade: 28 },
{nome: "Camila", idade: 19 },
{nome: "Diego", idade:17 },
{ nome:"Bianca", idade: 21 }


];
let verificaIdade = usuario => {

    console.log(`o ${usuario.nome}tem ${usuario.idade}anos e é ${usuario.idade >= 18? "MAIOR":"MENOR"} de idade`);   
};
//  verificaIdade(usuario[4]); //   achar a posição 

usuarios.forEach(verificaIdade); // roda em todas as posições 

// for (let i= 0; i < usuarios .length; i++) {// usando for para pecorrer todas as posições 
//     verificaIdade(usuarios[i]);
    
// }





