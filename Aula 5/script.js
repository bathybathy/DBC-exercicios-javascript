
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
            console.log(produtoLista);
            alert("Operação cancelada.")
        }
    }
    return produtoLista
    
}

const encontrarProdutoId = (encontrarId) =>{
    encontrarId = parseInt(prompt("Entre o número de cadastro do produto:"))
    console.log("passou pelo filtro");
    let produtoEncontrado = [];
    
    produtoEncontrado = produtoLista.filter (el => el.id === encontrarId)
    console.log(produtoEncontrado)
    return produtoEncontrado
    
}

let menu = 0;
do{
    menu = parseInt(prompt("Digite 1 para cadastrar um produto \nDigite 2 para excluir um produto pelo número de cadastro\nDigite 3 para encontrar um produto pelo número de cadastro"));
    
    switch(menu){
        case 1: 
            cadastrarProduto();
            console.log(produtoLista);
            break;
        
        case 2:
            deletarPorId(produtoLista.id);
            console.log(produtoLista);
            break;

        case 3:
            encontrarProdutoId(produtoLista.id);
            break;

        case 4:
            console.table(produtoLista);
            alert("As informações estão disponíveis no console.")
            break;
        default:
            alert("Entre uma opção válida")
    }
}while(menu >0 && menu < 5)

