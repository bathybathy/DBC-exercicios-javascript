// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
// 	caracteres e que remova todas as ocorrências daquele caracter no array; 
//    // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');

/*let resultado = [];

function percorreBusca(elemento, array){
    
    if(array.includes(elemento)){
        for(i = 0; i<array.length; i++){
            if(array[i] === elemento){
            array.splice(i, 1);
            console.log(array);
            i--;}
        }
        alert(`o seu novo array é ${array}`)
    }else{
        alert("entre informações válidas")
    }
    return array
    
}
percorreBusca("a", ["a", 1, "a", 2, 3, "a", "maravilha"])*/

// 2) Crie uma função que receba como parâmetro um array de números e retorne
//  	um array ordenado (NÃO pode usar a função array.sort());
//    // ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 

// function ordernar (array){

//     for(i = 0; i<array.length;i++){
//         for(a = i+1; a<array.length;a++){
//             if(array[i] > array[a]){
//                 let ordenando = array[i];
//                 array[i] = array[a];
//                 array[a] = ordenando;
//             }
//         }
//     }
//     console.log(array);
// }

// ordernar([4, 5, 7, 3, 0, 5, 2, 2])


// 3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
// 	e retorne uma concatenação destes 2 arrays;

// function concatenando (array1, array2){
//     let concatenado = array1.concat(array2);
//     alert(concatenado);
// }

// concatenando([1, 2, 3, 4], ["a", 3, "b"])


// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
// 	 qualquer como parâmetro e que adiciona esse elemento à lista;

/*let vazio = [];

function adicionar (elemento){
    vazio.unshift(elemento);
    console.log(vazio)
}

adicionar("cachorro");
adicionar("papagaio");

// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;

function removerUltimo(){
    vazio.pop();
    console.log(vazio);
}

removerUltimo()
adicionar("cabra")
adicionar("papagaio");
adicionar("gato");
adicionar("cachorro");

function removerPrimeiro(){
    vazio.shift();
    console.log(vazio)
}
removerPrimeiro();

// 4c) Crie uma função para remover um elemento específico da lista;
// 	 // ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
// 	 // e chamamos a função  removeElemento('Tiago')
// 	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
// 	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.*/
let vazio = ['1', 2, "papagaio", "cachorro", "papagaio"]

function removerEspecifico(array, elemento){
    if(array.includes(elemento)){
        for(i = 0; i<array.length; i++){
            if(array[i] === elemento){
            array.splice(i, 1);
            console.log(array);
            i=array.length}
        }
        alert(`o seu novo array é ${array}`)
    }else{
        alert("o elemento nao existe na lista")
    }
    return array
}

removerEspecifico(vazio, "papagaio")


// 5) Crie uma função que gera um número aleátorio entre 0 e 100;

// function numeroAleatorio(){
//     return (Math.round(Math.random() * 1000)) 
// }

// numeroAleatorio()

// let listaVazia = []

// function adicionaNumero(lista){
//     do{
//         let numero = numeroAleatorio();
//         if(numero%2==1 && numero>14 && numero<50){
//             lista.unshift(numero)
//             console.log(lista)
//         }else if(numero%12===0){
//             lista.unshift(numero)
//             console.log(lista)
//         }
//     }while(lista.length<10)
//     return lista

// }

// adicionaNumero(listaVazia)
// console.log(listaVazia)
