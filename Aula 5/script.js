let menu = parseInt(prompt("Digite 1 para cadastrar um produto \nDigite 2 para excluir um produto pelo número de cadastro\n Digite 3 para encontrar um produto pelo número de cadastro"));
let contadorId = 0;
let produtoLista = [];

const cadastrarProduto = (id, descricao, preco) =>{
    contadorId++;
    id = contadorId;
    descricao = prompt("Entre a descrição do produto:");
    preco = (prompt("Digite o preco do produto:"));
    produtoLista.push({id, descricao, preco})
    
    alert("Cadastro realizado com sucesso.")

}

const deletarPorId = (deletar) =>{
    deletar = prompt("entre o número de cadastro do produto que deseja deletar");
    if (deletar === null || !produtoLista.some( () => deletar.id === produtoLista.id)){
        alert("Digite um número válido. Operação cancelada.")
    }else{  
        let confirmacao = confirm(`tem certeza que deseja deletar o produto de número ${deletar}?`)
        if(confirmacao){
            let deletarIndex = produtoLista.indexOf(produtoLista.id);
            produtoLista.splice(deletarIndex, 1);
            alert("Produto deletado do cadastro.");
        }else{
        // menu = parseInt(prompt("Digite 1 para cadastrar um produto \n Digite 2 para excluir um produto pelo número de cadastro"));
            console.log(produtoLista);
            alert("Operação cancelada.")
        }
    }
    return produtoLista
    
}

const encontrarProdutoId = (encontrarId) =>{
    encontrarId = prompt("Entre o número de cadastro do produto:");
    // let encontrarProduto = [];
    // if(encontrarProduto === null || !produtoLista.some( () => encontrarId.id === produtoLista.id)){
    //     alert("Digite um número válido. Operação cancelada.")
    // }else{
    //  encontrarProduto = produtoLista.filter ((el) => {encontrarId === el.id})
     console.log("passou pelo filtro");
    
    
    return produtoLista.filter ((el) => {encontrarId === el.id})
}

do{
    if(menu === 1){
    cadastrarProduto(produtoLista.id, produtoLista.descricao, produtoLista.preco);
    console.log(produtoLista);
    menu = parseInt(prompt("Digite 1 para cadastrar um produto \nDigite 2 para excluir um produto pelo número de cadastro\n Digite 3 para encontrar um produto pelo número de cadastro"));
    }
    if(menu === 2){
        deletarPorId(produtoLista.id);
        menu = parseInt(prompt("Digite 1 para cadastrar um produto \nDigite 2 para excluir um produto pelo número de cadastro\n Digite 3 para encontrar um produto pelo número de cadastro"));
        console.log(produtoLista)

    }
    if(menu === 3){
        encontrarProdutoId();
        menu = parseInt(prompt("Digite 1 para cadastrar um produto \nDigite 2 para excluir um produto pelo número de cadastro\n Digite 3 para encontrar um produto pelo número de cadastro"));
        console.log(encontrarProdutoId())
    }
}while(menu === 1 || menu === 2 || menu === 3)

// switch (menu){
//     case 1: 
//     cadastrarProduto(produtoLista.id, produtoLista.descricao, produtoLista.preco);
//     console.log(produtoLista);
//     menu = parseInt(prompt("Digite 1 para cadastrar um produto"));
//     break
//     default 

// }