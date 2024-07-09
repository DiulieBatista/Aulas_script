//  ultilizando arrays bidimensionais - Objeto 

let usuarios=[

    {nome:"Martha Rocha", idade:46 , email:"marta@gmail.com"},
    {nome:"Marcos Sena ", idade:24 , email:"marcos@gmail.com"}, 
    {nome:"luiza Silva", idade:19 , email:"luiza@gmail.com"},
    {nome:"jonas Maia", idade:21 , email:"jonas@gmail.com"}

]
console.table(usuarios);
console.log(usuarios[1].nome);// mostra a opção de varavel selecionada 
usuarios.push({nome:"Martha Rocha", idade:46 , email:"marta@gmail.com"});
console.table(usuarios);
