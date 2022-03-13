
let contadorId = 0;
let produtoLista = [];

const cadastrarProduto = (id, descricao, preco) =>{
    contaErro = 0;
    contadorId++;
    id = contadorId;
    descricao = prompt("Entre a descrição do produto:");
    preco = prompt("Digite o preço do produto:");
    if(descricao > 0 || descricao === null || descricao === undefined || descricao === ""){
        alert("Entre uma descrição válida.")
        contaErro++
    }else if(isNaN(preco) || preco === null || preco === undefined || preco < 0 || preco === ""){
        alert("Entre um preço válido.")
        contaErro++
    }
    if(contaErro === 0){
        produtoLista.push({id, descricao, preco})
        alert("Cadastro realizado com sucesso.")
        console.log(produtoLista)
    }
    
    return produtoLista

}

const deletarPorId = (deletar) =>{
    deletar = prompt("entre o número de cadastro do produto que deseja deletar");
    if (deletar === null || deletar === "" || !produtoLista.some( () => deletar.id === produtoLista.id)){
        alert("Digite um número válido. Operação cancelada.")
    }else{  
        let confirmacao = confirm(`tem certeza que deseja deletar o produto de número ${deletar}?`)
        if(confirmacao){
            deletar = parseInt(deletar);
            let acharProduto = produtoLista.find(el => el.id === deletar);
            console.log(acharProduto)
            let deletarIndex = produtoLista.indexOf(acharProduto)
            console.log(deletarIndex)
            // deletarIndex = deletarIndex.indexOf();
            produtoLista.splice(deletarIndex, 1);
            alert("Produto deletado do cadastro.");
            console.log(produtoLista)
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

const encontrarDescricao = () =>{
    let descricaoEncontrada = [];
    if(produtoLista.some (el => el.descricao === produtoLista.includes(acharDescricao))){
        descricaoEncontrada = produtoLista.filter ( el => el.descricao.includes(acharDescricao));
        alert("Verifique o console para as informações desejadas.")
        console.log(descricaoEncontrada);
    }else{
        alert("Descrição não encontrada. Operação cancelada.")
    }
}

/*var precosMapa = produtoLista.map(function(item) { return item ["preco"] });
tentei fazer uma função pra mapa de preço, mas quando chamo dentro de outra função, diz que não é uma função dentro da função especifica*/

const patrimonioTotal = () => {
    let precosMapa = produtoLista.map(function(item) { return item ["preco"] });
    
    console.log(precosMapa)
    let soma = precosMapa.reduce ((n1, n2) => parseFloat(n1) + parseFloat(n2), 0)
    alert(`O patrimônio total é de ${soma} reais.`)
}


const validarNumeros = () => {
    let precosMapa = produtoLista.map(function(item) { return item ["preco"] });
    let contaErro = 0;
    precosMapa.forEach ((element) => {
        if(element.toString().includes(",")){
            element = element.replaceAll(",", ".");
            console.log(element)
            element = parseFloat(element);
        }else if(isNaN(element) || element === null || element === undefined || element < 0){
            contaErro++;
        }
    })
    if(contaErro = 0){
        alert("Todos preços cadastrados possuem valores válidos.")
    }else{
        alert("Há preços com valores não válidos.")
    }
}

let menu;
let acharDescricao;
let opcao;
do{
    menu = prompt("Digite 1 para cadastrar um produto.\nDigite 2 para excluir um produto pelo número de cadastro.\nDigite 3 para encontrar um produto pelo número de cadastro.\nDigite 4 para menu de tabelas.\nDigite 5 para mostrar o patrimônio total.\nDigite 6 para confirmar se os preços cadastrados são válidos.\nDigite 7 se deseja sair do menu.");
    
    switch(menu){
        case "1": 
            cadastrarProduto();
            console.log(produtoLista);
            break;
        
        case "2":
            deletarPorId(produtoLista.id);
            console.log(produtoLista);
            break;

        case "3":
            encontrarProdutoId(produtoLista.id);
            break;

        case "4":
            opcao = parseInt(prompt("Digite 1 para imprimir a tabela completa.\nDigite 2 para imprimir a tabela por descrição.\nDigite 3 para buscar uma descrição de produto e imprimi-la junto com seus preços."))
            if (opcao === 1){
                console.table(produtoLista);
                alert("As informações estão disponíveis no console.")
            }else if (opcao === 2){
                console.table(produtoLista.descricao);
                alert("As informações estão disponíveis no console.");
            }else if (opcao === 3){
                acharDescricao = prompt("Digite a descrição de produto desejada.")
                encontrarDescricao(acharDescricao);
                alert("As informações estão disponíveis no console.");
            }else{
                alert("Opção inválida. A operação foi cancelada.")
            } 
            break;
        
        case "5":
            patrimonioTotal();
            break;

        case "6":
            validarNumeros()
            break;
        
        case "7":
            let sair = confirm("Realmente deseja sair?");
            if(sair){
                menu = "7";
                alert("O menu será fechado.")
                break;
            }else{
                menu = "0";
                break;
            }

        case null:
            menu = "7";
            alert("O menu será fechado.");
            break;

        default: 
            alert("Entre uma opção válida.")
    }
}while(menu !== "7")

