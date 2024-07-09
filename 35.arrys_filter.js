// filter elementos dentro de um arrys 

let nomes =[ "Marta ","Joao","Maria", "Geralda ","Jonas","Alice"];
let numeros =[12,34,51,11,78,41,23];

let usuarios=[

    {nome:"Martha Rocha", idade:46 , email:"marta@gmail.com"},
    {nome:"Marcos Sena ", idade:24 , email:"marcos@gmail.com"}, 
    {nome:"luiza Silva", idade:19 , email:"luiza@gmail.com"},
    {nome:"jonas Maia", idade:21 , email:"jonas@gmail.com"},
    {nome:"ricardo souza ", idade:31 , email:"ricardo@gmail.com"}


];

let filtrar_nome = nomes.filter( nome => nome.toLowerCase().includes('j'));

 console.log(filtrar_nome);

 let filtrar_nuns = numeros.filter(num => num >15);

 console.log(filtrar_nuns);

 let filtrar_idade = usuarios.filter(user => user.idade > 21);

 console.table(filtrar_idade);
 