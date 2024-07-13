const produtos = require('./54.functions_bd');
const ler =require('readline-sync')

    const cadProduto = () => {
        let x = produtos.length;// contagem de produtos no arrys 
        let id = x+1;
        let nome = ler.question("Digite o nome do produto:  ");
        let quantidade= ler.questionInt("imforme a quantiade :");
        let preco = ler.questionFloat(" digite o valor do produto: ")
  adiocionarProdutos (id , nome ,quantidade,preco);
};

const adiocionarProdutos =(id , nome ,quantidade,preco)=>{// cadastra  os produtos
produtos.push({id:id,nome:nome,quantidade:quantidade,preco:preco});
console.log("produtos cadastrados com sucesso !!");
console.log("....");
ler.question("pressione Enter para voltar ao MENU");
console.clear();

};

const listarProduto =()=>{// codigo para exibir tudo dentro do arryas 
console.log("------produtos cadastrados------");
produtos.forEach(produto=>console.log( 
    `ID :${produto.id}-------------
    nome:${produto.nome}
    quantidade${produto.quantidade}
    preço${produto.preco}`
));
console.log("------------------------------");
console.log("....");
ler.question("pressione Enter para voltar ao MENU");
console.clear();

};

const atualizarProduto =() =>{

let check= true;
while (check) {

let id = ler.questionInt(" imforme o ID do produto : ");
let produto= produtos.find(prod => prod.id === id )
if (produto) { 
       console.log( 
        `ID :${produto.id}-------------
        nome:${produto.nome}
        quantidade${produto.quantidade}
        preço${produto.preco}`
    );
    console.log("------------------------------");
    let opt =ler.questionInt("deseja alterar esse produto ? 1.SIM -2.NAO: ");
    if (opt=== 1 ) {
        console.clear();
        attProduto(id)
        check= false;

    } else {
        console.clear();

    }
}else{
    console.clear();
    console.log("....");
    console.log("produto não encontrado!!");
}
}
};

const attProduto = (id)=>{
let produto = produtos.find(prod=>prod.id === id);
let attnome= ler.question(` imforme o  novo nome  do produto ${produto.nome}`);
let attqtd= ler.questionInt(` imforme a nova quantidade do produto  ${produto.quantidade}`);
let attpreco= ler.questionFloat(` imforme o novo preço do produto ${produto.preco}`);

produto.nome=attnome;
produto.quantidade=attqtd;
produto.preco=attpreco;
console.log("produto alterado com sucesso!!");
console.log( 
    `ID :${produto.id}-------------
    nome:${produto.nome}
    quantidade${produto.quantidade}
    preço${produto.preco}`
);

console.log("....");
ler.question("pressione Enter para voltar ao MENU");
console.clear();


};
const listarProdutoPorId=() =>{

    let check= true;
    while (check) {
    
    let id = ler.questionInt(" imforme o ID do produto : ");
    let produto= produtos.find(prod => prod.id === id )
    if (produto) { 
           console.log( 
            `ID :${produto.id}-------------
            nome:${produto.nome}
            quantidade${produto.quantidade}
            preço${produto.preco}`
        );
        console.log("------------------------------");
        let opt =ler.questionInt("deseja buscar  outro  produto ? 1.SIM -2.NAO: ");
        if (opt=== 1 ) {
            console.clear();
        
           
    
        } else {
            check= false;
            console.clear();
    
        }
    }else{
        console.clear();
        console.log("....");
        console.log("produto não encontrado!!");
    }
    }
    };
    const ExcluirProdutos=() =>{

        let check= true;
        while (check) {
        
        let id = ler.questionInt(" imforme o ID do produto : ");
        let produto= produtos.find(prod => prod.id === id );
        let id_ex = produtos.findIndex(prod => prod.id === id );

        if (produto) { 
               console.log( 
                `ID :${produto.id}-------------
                nome:${produto.nome}
                quantidade${produto.quantidade}
                preço${produto.preco}`
            );
            console.log("------------------------------");
            let opt =ler.questionInt("tem certeza que deseja excluir o Produto ? 1.SIM -2.NAO: ");
            if (opt=== 1 ) {
                produtos.splice(id_ex,1);
                console.log("produto excluido  com sucesso!!");
                console.log("....");
                ler.question("pressione Enter para voltar ao MENU");
                check= false;

            } else {
                check= false;
                console.clear();
        
            }
        }else{
            console.clear();
            console.log("....");
            console.log("produto não encontrado!!");
        }
        }
        };



module.exports={listarProduto,cadProduto,atualizarProduto,listarProdutoPorId,ExcluirProdutos};

