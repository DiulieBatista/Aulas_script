// ordenar arrys - objetos e matriz  - ordem alfabética / crecente e decrecente 

let nomes =["Marta","Aline","Maria","Geralda","Jonas","Bruna","Ziraldo"];
let numeros =[12,34,51,11,78,41,23];

let usuarios=[

    {nome:"Martha Rocha", idade:46 , email:"marta@gmail.com"},
    {nome:"Marcos Sena ", idade:24 , email:"marcos@gmail.com"}, 
    {nome:"luiza Silva", idade:19 , email:"luiza@gmail.com"},
    {nome:"jonas Maia", idade:21 , email:"jonas@gmail.com"},
    {nome:"ricardo souza ", idade:31 , email:"ricardo@gmail.com"}


];
let ordem_alfa = nomes.sort();
//let ordem_alfa=nomes.sort((a,b)=>a.localeCompare(b));
console.log(ordem_alfa);

let ordem_cres = numeros.sort((x,y)=>x-y);
console.log(ordem_cres)

// let let ordem_desc = numeros.reverse();
let ordem_desc = numeros.sort((x,y)=>y-x);
console.log(ordem_desc)

let users_alfa = usuarios.sort((a,b)=>a.nome.localeCompare(b.nome));

console.table(users_alfa);
let user_idade_cres = usuarios.sort((x,y)=>x.idade-y.idade);// o - não e subtração e comparativo 

console.table(user_idade_cres);

console.table(users_alfa);
let user_idade_desc = usuarios.sort((x,y)=>y.idade-x.idade);

console.table(user_idade_desc);


