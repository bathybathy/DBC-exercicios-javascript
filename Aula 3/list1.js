// exercicio 1

// function lista(lista){
//     console.log(parametro1, parametro2, parametro3, parametro4)
// }

// lista(1, "Olá", undefined, 99999, "Texto qualquer")


// exercicio 2 e 2a

/*let texto = "      Oi, essa é uma    string    qualquer    ";
let textoNovo;

function strSemEspacoInicial (string){
    console.log(string.trim().toUpperCase())
    textoNovo = string.trim().toUpperCase() ;
    return textoNovo
}

strSemEspacoInicial (texto);

function strSemEspacoDuplo (string){
    let splitado = string.split(" ");
    console.log(splitado)
    let finalizado = [];
    for(i = 0; i < splitado.length; i++){
        if (splitado[i] !== ""){
            finalizado.push(splitado[i])
            console.log(splitado[i])
        }
    };
    console.log(finalizado.join(" "));
    return finalizado.join(" "); 
}

strSemEspacoDuplo(textoNovo);*/

// strSemEspacoDuplo(textoNovo);


// exercicio 3

// function erro(){
//     alert("Algum número digitado é inválido")
// }

// function soma(n1, n2, erro()){
//     n1 = parseInt(prompt("Digite um número para realizar adição"));
//     n2 = parseInt(prompt("Digite outro número para realizar adição"));
//     if(!isNaN(n1) && !isNaN(n2)){
//         let total = alert(`A soma dos dois números é ${n1+n2}`)
//     }else{
//         erro()
//     }
// }

// soma();


// exercicio 4

let lista = ['a', 'cachorro', 255]


function busca(item){
    if(lista.includes(item)){
        alert(`"${item}" existe no array e a posicao é ${lista.indexOf(item)}`)
    }else{
        alert("O elemento não existe no array")
    }
}

busca(255, 0);