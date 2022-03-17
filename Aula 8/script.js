const validarEmail = () => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

    let emailInformado = document.getElementById("email-input").value;
    let emailSpread = [...emailInformado]
    
    // primeiro caractere é uma letra
    let primeiroCaractere = emailInformado.charAt(0).toUpperCase() !== emailInformado.charAt(0).toLowerCase();
    
    
    // se tem arroba
    let arroba = emailInformado.includes("@");
    
    // se arroba e ponto estão juntos
    let arrobaPonto = emailInformado.includes("@.");
    
    // se existe o dominio dbccompany
    let dominio = emailInformado.includes("dbccompany")
    let dominioIndex = emailInformado.lastIndexOf("dbccompany");
    
    // existe ponto depois do arroba
    let arrobaIndex = emailInformado.lastIndexOf("@");
    let pontoIndex = emailInformado.lastIndexOf(".")
    let pontoDepoisdoArroba = pontoIndex > arrobaIndex;
    let existePontoEArroba = pontoIndex !== -1 && arrobaIndex !== -1;

    
    // se o dominio tá depois do arroba
    let dominioPosArroba = arrobaIndex < dominioIndex;

    
    let doisCaracteresDepoisDoPonto = (pontoIndex + 3) <= emailSpread.length 
    console.log(arrobaIndex)
    console.log(arrobaIndex, pontoIndex, pontoDepoisdoArroba)
    
    

    const ehValido = primeiroCaractere && arroba && !arrobaPonto && dominio && existePontoEArroba && dominioPosArroba && doisCaracteresDepoisDoPonto && pontoDepoisdoArroba; 
    console.log(ehValido, "se é valido")
    return ehValido;
}


const validarSenha = (event) => {
    /* 
      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validarSenha
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;

      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    return ehValido;
}


const adicionarMascaraData = (input, data) => {
  let dataInformada = document.getElementById("data-input").value;
  dataInformada = dataInformada.replaceAll("/", "")
  let dia = dataInformada.substring( 0, 2)
  let mes = dataInformada.substring( 2, 4)
  let ano = dataInformada.substring(4)

  let dataInfSpread = [...dataInformada]
  
  switch(dataInfSpread.length){
    case 2:
    document.getElementById("data-input").value = `${dia}/`
    break;
    case 5:
    document.getElementById("data-input").value = `${dia}/${mes}/${ano}`
    break
  }
  // document.getElementById("data-input").value = `${dia}/${mes}/${ano}`
  

}


const validarData = () => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    
    const dataInformada = document.getElementById("data-input").value;
    let data = moment( `${dataInformada}`)
    let data26 = moment().subtract(26, "years");
    let data18 = moment().subtract(18, "years");

    let entre = data.isBetween(data26, data18)
    console.log(`${entre} é entre`)
    
    
    let dataEhValida = data.isValid();
    console.log(dataEhValida)

    const ehValido = entre && dataEhValida;
    return ehValido;
}



const validarCadastro = (event) => {
  event.preventDefault();
  console.log(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
}