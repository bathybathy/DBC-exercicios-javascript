
// function inverteNumero(numero){
//     let array = numero.toString().split("");
//     let newArray = [];

//     for(element of array){
//         newArray.unshift(element);
//         console.log(newArray);
//     }
//     return newArray

// }

// inverteNumero(3456)

// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

// function upperCase(string){
//     let splitado = string.split(" ");
//     let maiusculo;
//     let novoArray = [];
//     for(element of splitado){
//         maiusculo = element.charAt(0).toUpperCase()+element.substring(1);
    
//         novoArray.push(maiusculo)
//     }
    
//     let finalizado = novoArray.join(" ").toString();
//     console.log(finalizado);
// }

// upperCase('hoje faremos o trabalho em dupla, que legal - sqn')


// exercicio 4

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let contadorVogal =0, contadorConsoante=0;
function vogaisConsoantesCount(string) {
    string = string.toLowerCase()
    for (char of string) {
        if (char.includes('a') || char.includes('e') || char.includes('i') || char.includes('o') || char.includes('u')){
            contadorVogal += 1
        } else if (consoantes.includes(char)){
            contadorConsoante +=1
        }
    }
    console.log('Vogal: ' + contadorVogal)
    console.log('Consoante: ' + contadorConsoante)
}

vogaisConsoantesCount('Oi, tenho 5 anos de idade!!! ;D')

// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   // ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri":  
//   't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'

function combinacoes (string){
    
}


