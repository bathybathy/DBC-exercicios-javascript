//exercício 1

let mensagem = prompt("digite sim ou não")
if(mensagem === "SIM"){
    alert("Parabéns!!")
}
else if(mensagem ==="Não"){
    alert("Digite outra coisa")
}
else(
    alert("Você tem noção dos seus atos?")
)

//exercicio 2
let nomeDoCliente = prompt("Digite o nome do seu cliente")
let nomeDoAtendente = prompt("Digite nome do atendente")

alert(`Olá, ${nomeDoCliente}. Sou ${nomeDoAtendente}, em que posso ajudar?`)

// exercicio 3
let isFriday = confirm("Hoje é sexta-feira?");
let isTwoGreaterThanFour = 2>4;
let isValueEmpty;
let valorDigitado = prompt("Digite algo");

isValueEmpty = valorDigitado === null || valorDigitado === undefined || valorDigitado === "";


console.log(isFriday);
console.log(isTwoGreaterThanFour);
console.log(isValueEmpty);


//exercicio 4
let n1 = prompt("digite um número");
let n2 = prompt("digite outro número");
let operacao = prompt("qual operação?")
let resultado;

if(isNaN(resultado)){
    console.log("entre números válidos")
}else{
switch(operacao){
    case "+":
        resultado = n1+n2;
        console.log(resultado);
        break;
    case "-":
        resultado = n1-n2;
        console.log(resultado);
        break;
    case "/":
        resultado = n1/n2;
        console.log(resultado);
        break;
    case "*":
        resultado = n1*n2;
        console.log(resultado);
        break;
    default:
        console.log("entre uma operação válida")
}};


//exercicio 5
let T1 = parseFloat(prompt("digite a primeira nota"));
let T2 = parseFloat(prompt("digite a segunda nota"));
let P1 = parseFloat(prompt("digite a terceira nota"));
let media = ((T1+T2+P1)/3);

if(isNaN(T1) || isNaN(T2) || isNaN(P1)){
    alert("Digite números válidos")
}else{
    if(media<=4.9){
        alert(`Sua média foi ${media}. Você foi reprovado`)
    }if(media>=5 && media<=6.9){
        alert(`Sua média foi ${media}. Você está de recuperação`)
    }else if(media>=7 && media<=10){
        alert(`Sua média foi ${media}. Você está aprovado`)
    };
};

//exercicio 6

let opcao = prompt("Escolha uma opcao. 1- Fazer checkin. 2- Fazer Checkout. 3-Estender a hospedagem. 4-sair")

switch(opcao){
    case "1":
        alert("Seja bem-vindo!");
        break;
    case "2":
        confirm("Deseja fazer checkout?")
        if(true){
            alert("Até a próxima")
        }
        break;
    case "3":
        let dias = prompt("Gostaria de estender a hospedagem por quantos dias?");
        if(!isNaN(dias)){
            alert(`A hospedagem foi estendida por ${dias}`)
        }
        break;
    case "4":
        alert("ok")
        break;
    default:
        alert("escolha uma opção válida")


}
