let opcao = prompt("digite uma opcao")

do{
    opcao = prompt("digite uma opcao")
switch(opcao){
    case "1":
        console.log("chegou no 1")
        break;
    case "2":
        console.log("chegou no 2")
        break;
    case "3":
        console.log("chegou no 3")
    case "4":
        break
    default: 
    opcao = prompt("digite uma opcao")
}}while(opcao > 0 && opcao < 4)