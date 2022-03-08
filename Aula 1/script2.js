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