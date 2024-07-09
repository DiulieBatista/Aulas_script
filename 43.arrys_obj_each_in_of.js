// Exibindo as imformações de um objeto arrys  com lop FOR EACH IN OF 

let produtos =[
        {nome: "teclado USB", preco: 99.90, quant: 3 },
        { nome: "mouse sem fio", preco: 49.99, quant: 5 },
        { nome: "monitor LED 24\"", preco: 599.00, quant: 1 },
        { nome: "webcam HD", preco: 79.99, quant: 2 },
        { nome: "caixa de som Bluetooth", preco: 129.00, quant: 4 },
        { nome: "roteador Wi-Fi AC1200", preco: 149.99, quant: 1 },
        { nome: "SSD 500GB", preco: 199.90, quant: 3 },
        { nome: "impressora a laser", preco: 299.00, quant: 2 }
]
// nomes do produtos com valores maiores que 500 reais 
produtos.forEach(produto=> {
    if (produto.preco > 500) {
        console.log("=> produtos "+ produto.nome +"valor"+produto.preco);
    }
});
console.log("----------------------------------------------------------------");
 
// nome dos produtos com valor menor que 300,0 somar total de um valor e geral

let soma=0;
let total=0;

for (let produto in produtos ) {
    if (produtos[produto]. preco<300) {
  soma =produtos [produto].preco* produtos[produto].quant;
  total += soma;// total = total + soma 
  console.log(`produto :${produtos[produto].nome}- total :${soma.toFixed(2)}`);

    }
}
console.log(`total geral :${total.toFixed(2)}`);

console.log("------------------------------------------------------------------");

// nome dos produtos maiores que 800 e com quantiddae no estoque menor que 3 

for (let produto of produtos) {

    if (produto.preco > 800  && produto.quantidade < 3 ) {
       console.log("=>produto"+ produto.nome +"quantidade"+ produtos.quant); 
    } 
}
