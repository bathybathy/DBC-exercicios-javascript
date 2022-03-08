//exercicio 1

//  let salario = 1000.00;
//  let anoAtual = 2022;
//  let aumento = 0.03;

//  for(ano = 2016; ano <= anoAtual ; ano++){
//      if (ano<=2018){
//          salario = salario + (salario * 0.015)
//      }else{
//          salario = salario + (salario*aumento);
//          aumento = aumento*2;
//      };
//      console.log(salario.toFixed(2))
//  }


//exercicio 2
//  let soma = 0;

//   for(pares = 0; pares <=100; pares+=2){
//      soma = soma + pares; 
//      }
//   console.log(soma);

//exercicio 3

// let numero = parseInt(prompt("escolha o numero para a tabuada"));

// for(i = 0; i<= 10; i++){
//     tabuada = numero*i;
//     console.log(tabuada)
// }


//exercicio 4

// for(i = 1; i<=100; i++){
//     if(i%2==0){
//         numero = i**2
//         console.log(numero)
//     }
// }


//exercicio 5

// let relogio = 0;

// let limparRelogio = setInterval(
//      function(){
//         if(relogio<10){(console.log("0"+relogio))
//         }else{console.log(relogio)}
//         parseInt(relogio);
//         relogio++;
//     }, 1000);

// setTimeout(
//     function(){
//         clearInterval(limparRelogio)
//     }, 61*1000
// )


//exercicio 6


let total = 0;
//let opcao = prompt("escolha opcao 1 para inserir um numero ou opcao 2 finalizar");

  do{
     var opcao = parseInt(prompt("escolha opcao 1 para inserir um numero ou opcao 2 finalizar"));
      if(opcao===1)
          {let soma = parseInt(prompt("digite um número válido"));
          total+=soma;
      }
  }while(opcao===1)

if(total!==0){alert(total)};
    
