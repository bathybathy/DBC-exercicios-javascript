
let id = 0;



class Colaborador{
    id;
    nome = "Não informado";
    marcacoesPonto = [];

    constructor( nome, marcacoesPonto ) {
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

const cadastrarColaborador = (nome, id) =>{
    nome = prompt("Entre o nome do colaborador:")
    id = id++;
    const colaboradorInstanciado = new Colaborador(nome, id);

    colaboradores.push(colaboradorInstanciado);
    console.log(colaboradores)
};

const marcarPonto = (dia, hora, colaborador) => {
    colaborador = parseInt(prompt("Digite o id do colaborador:"))
    dia = parseInt(prompt("Digite o dia para marcar o ponto:"));
    hora = parseInt(prompt("Digite o horário para marcar o ponto:"));
    let colaboradorPonto = colaboradores.find( el => el.id === colaborador)
    const marcacaoInstanciada = new Ponto(dia,hora);
    console.log(typeof(colaboradorPonto))
    console.log(typeof(marcacoesPonto))
    colaboradorPonto.marcacoesPonto.push(marcacaoInstanciada)
}

const verLista = () =>{
    console.log(colaboradores)
    alert("A lista está disponível no console.")
}

const verListaSemPonto = () =>{
    let filtro = colaboradores.filter( array => array.marcacoesPonto.length === 0)
    console.log(filtro)
    alert("A lista está disponível no console.")
}

let opcao;

do{
    opcao = prompt("Escolha uma opção:\n1 - Cadastrar colaborador\n2 - Marcar ponto\n3 - Ver lista de colaboradores\n4 - Ver lista de colaboradores que ainda não marcaram ponto\n9 - Encerrar.")
switch(opcao){
    case "1":
        cadastrarColaborador();
        break;
    case "2":
        marcarPonto()
        console.log(colaboradores)
        break;
    case "3":
        verLista();
        break
    case "4":
        verListaSemPonto()
        break
    default:
    opcao = prompt("digite uma opcao")
}}while(opcao > 0 && opcao < 4)