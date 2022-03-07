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

valorDigitado === null || valorDigitado === undefined || valorDigitado === "";
isValueEmpty = valorDigitado === null;

console.log(isFriday);
console.log(isTwoGreaterThanFour);
console.log(isValueEmpty);


//exercicio 4
let n1 = prompt("digite um número");
let n2 = prompt("digite outro número");
let operacao = prompt("qual operação?")
let resultado;

switch(operacao){
    case "+":
        resultado = n1+n2;
        if(isNaN(resultado) === false){
            console.log(resultado);
        }else{
            console.log("entre números válidos")
        }
        
        break;
    case "-":
        resultado = n1-n2;
        if(isNaN(resultado) === false){
            console.log(resultado);
        }else{
            console.log("entre números válidos")
        }
        break;
    case "/":
        resultado = n1/n2;
        if(isNaN(resultado) === false){
            console.log(resultado);
        }else{
            console.log("entre números válidos")
        }
        break;
    case "*":
        resultado = n1*n2;
        if(isNaN(resultado) === false){
            console.log(resultado);
        }else{
            console.log("entre números válidos")
        }
        break;
    default:
        console.log("entre uma operação válida")
};


//exercicio 5
let T1 = parseFloat(prompt("digite a primeira nota"));
let T2 = parseFloat(prompt("digite a segunda nota"));
let P1 = parseFloat(prompt("digite a terceira nota"));
let resultado2 = ((T1+T2+P1)/3);

if(isNaN(T1) || isNaN(T2) || isNaN(P1)){
    alert("Digite números válidos")
}else{
    if(resultado2<5){
        alert(`Sua média foi ${resultado2}. Você foi reprovado`)
    }if(resultado2>5 && resultado2<7){
        alert(`Sua média foi ${resultado2}. Você está de recuperação`)
    }if(resultado2>5 && resultado2<11){
        alert(`Sua média foi ${resultado2}. Você está aprovado`)
    }else{
        alert("Digite notas válidas")
    }
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
