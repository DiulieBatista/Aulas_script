// ordenando valores do arrys com for 

let numeros =[12,34,51,11,78,41,23];

// lista de dados no arrays 
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}
// lista de dados no arrys invertida 
for (let i = numeros.length -1;i > 0; i--) {
    console.log(numeros[i]);
}
// lista de dados do arrys ,pulando alguns numeros 
 
for (let i = 0; i < numeros.length; i+=2) {
    console.log(`posição : ${i}= ${numeros[i]}`);

}