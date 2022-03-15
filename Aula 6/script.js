
let id = 1;



class Colaborador{
    id;
    nome = "Não informado";
    marcacoesPonto = [];

    constructor( nome ) {
        this.nome = nome !== undefined ? nome : this.nome;
        this.id = id++;
        
    }

}
let colaboradores = []

class Ponto{
    hora = "Não informado";
    dia = "Não informado";

    constructor ( hora, dia ){
        this.hora = hora;
        this.dia = dia
    }
}

class Validacoes {

    validaNome = (nome) =>{
        if(nome === "" || nome === undefined){
            return false
        }if(nome.toUpperCase() !== nome.toLowerCase()){
            return true
        }
    }

    validaId = (id) =>{
        if(parseInt(id) < 0 || colaboradores.some(id => colaboradores.id === parseInt(id))){
            console.log(id)
            return false
        }else{
            return true
        }
    }

    validaHora = (hora) =>{
        if(parseInt(hora) < 0 || parseInt(hora) > 24 || hora === ""){
            return false
        }else{
            return true
        }
    }

    validaDia = (dia) =>{
        if(parseInt(dia) < 0 || parseInt(dia) > 31 || dia === ""){
            return false
        }else{
            return true
        }
    }
}

const validar = new Validacoes();

const cadastrarColaborador = (nome, id) =>{
    nome = prompt("Entre o nome do colaborador:")
    id = id++;
    const colaboradorInstanciado = new Colaborador(nome, id);
    if(validar.validaNome(nome)){
        colaboradores.push(colaboradorInstanciado);
        alert("Colaborador cadastrado!")
    }else{
        alert("Verifique os dados registrados.")
    }
    console.log(colaboradores)
};

const marcarPonto = (dia, hora, id) => {
    id = parseInt(prompt("Digite o id do colaborador:"))
    if(!validar.validaId(id)){
        alert("Verifique se a id correspondente existe no cadastro.")
    }else{
        dia = prompt("Digite o dia para marcar o ponto:")
        if(validar.validaDia(dia) === false){
            alert("Verifique os dados inseridos")
        }else{
            hora = prompt("Digite o horário para marcar o ponto:");
            if(validar.validaHora(hora) === false){
                alert("Verifique os dados inseridos")
            }else{
                let colaboradorPonto = colaboradores.find( el => el.id === id)
                const marcacaoInstanciada = new Ponto(dia,hora);
                alert("Ponto marcado com sucesso!")
                colaboradorPonto.marcacoesPonto.push(marcacaoInstanciada);
            }
        }
    }
}

const verLista = () =>{
    console.log(colaboradores)
    alert("A lista está disponível no console.")
}

const verListaSemPonto = () =>{
    let filtro = colaboradores.filter( array => array.marcacoesPonto.length === 0)
    console.log(filtro)
    if(filtro.length > 0){
        alert("A lista está disponível no console.")   
    }else if(filtro.length === 0){
        alert("Todos os colaboradores marcaram ponto.")
    }else{
        alert("Confira se há colaboradores cadastrados.")
    }
        
}

let opcao;

do{
    opcao = prompt("Escolha uma opção:\n1 - Cadastrar colaborador\n2 - Marcar ponto\n3 - Ver lista de colaboradores\n4 - Ver lista de colaboradores que ainda não marcaram ponto\n9 - Encerrar.")
switch(opcao){
    case "1":
        cadastrarColaborador();
        break;
    case "2":
        marcarPonto();
        console.log(colaboradores)
        break;
    case "3":
        verLista();
        break
    case "4":
        verListaSemPonto();
        break
    case null:
        opcao = 5
    default:
        alert("Entre uma opção válida.")
}}while(opcao > 0 && opcao < 5)