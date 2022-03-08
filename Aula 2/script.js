//exercicio 1

// let dia = confirm("hoje é sexta?")

// let mensagemSexta = dia
//     ? alert("sextou")
//     : alert("ainda não sextou")


//exercicio 2
// for (let i = 1; i <= 10; i+=1){
//     console.log(i)
// }


//exercicio 3
// var array = [1, 2, 7, 10, 18]
// var soma = 0;

// for(let i = 0; i < array.length; i+=1){
//     soma += array[i];
// }
// console.log(soma);


//exercicio 4

do{
let opcao = parseInt(prompt("opcao 1 - continuar perguntando ou opcao 2 - parar de perguntar"));
    if(opcao !==1 && opcao !==2){
        alert('Seleciona uma opção válida')}
} while(opcao !==2);