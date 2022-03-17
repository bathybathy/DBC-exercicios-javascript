let id = 0;
let colaboradores = [];
class Colaborador{
  id = 0;
  nome = "";
  email = "";
  senha = "";
  nascimento = "";

  constructor( nome, email, nascimento, senha){
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.senha = senha;
    this.id = id++;
  }
}

const criarColaborador = ( nome, email, nascimento, senha ) => {
  nome = document.getElementById("nome-input").value;
  email = document.getElementById("email-input").value;
  nascimento = document.getElementById("data-input").value;
  senha = document.getElementById("senha-input").value;
  
  const adicionarAoHtml = () =>{
    const novoLi = document.createElement("li")
    novoLi.classList.add("w-100", "mt-2", "p-3", "d-flex", "align-items-center", "justify-content-between", "listar")
    const ul = document.getElementById("lista")
    ul.appendChild(novoLi)
    
    const divNome = document.createElement("div")
    let tituloNome = document.createElement("p")
    tituloNome.textContent = "Nome:"
    let novoNome = document.createElement("p")
    novoNome.textContent = `${nome}`
    novoNome.setAttribute("id", `listar-nome-${id}`)
    divNome.append(tituloNome, novoNome)
    
    const divEmail = document.createElement("div")
    let tituloEmail = document.createElement("p")
    tituloEmail.textContent = "Email:"
    let novoEmail = document.createElement("p")
    novoEmail.textContent = `${email}`
    novoEmail.setAttribute("id", `listar-email-${id}`)
    divEmail.append(tituloEmail, novoEmail)

    const divNascimento = document.createElement("div")
    let tituloNascimento = document.createElement("p")
    tituloNascimento.textContent = "Nascimento:"
    let novoNascimento = document.createElement("p")
    novoNascimento.setAttribute("id", `listar-nascimento-${id}`)
    novoNascimento.textContent = `${nascimento}`
    divNascimento.append(tituloNascimento, novoNascimento)

    novoLi.append(divNome, divNascimento, divEmail)
  
  }
  //tive que colocar aqui pq se chama a funcao de validar, tenta puxar o preventdefault de novo e dá erro
  //nao consegui fazer funcionar colocando o preventdefault no html
  if(validarData() && validarEmail() && validarSenha() && validarNome()){
    const colaboradorInstanciado = new Colaborador (nome, email, nascimento, senha);
    console.log(colaboradorInstanciado)
    console.log(colaboradores)
    colaboradores.push(colaboradorInstanciado);
    let temColab = document.getElementById("titulo-colab")
    temColab.classList.add("d-none")

    adicionarAoHtml()
  }
}

const listarColaboradores = () =>{
  if(colaboradores.length === 0){
    alert("Ainda não há colaboradores listados.")
  }else{
    for(i = 1; i <= colaboradores.length; i++){
      //let aListar = document.getElementById(`listar-${i}`)
      let listarNome = document.getElementById(`listar-nome-${i}`).textContent
      let listarEmail = document.getElementById(`listar-email-${i}`).textContent
      let listarNascimento = document.getElementById(`listar-nascimento-${i}`).textContent
      console.log(`Nome: ${listarNome}, email: ${listarEmail}, data de nascimento: ${listarNascimento}`)
    }
  }
}

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

    let span = document.getElementById("email-erro");
    if(!ehValido){
      span.classList.remove("d-none")
    }else{
      span.classList.add("d-none")
    }
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

    let span = document.getElementById("senha-erro");
    if(!ehValido){
      span.classList.remove("d-none")
    }else{
      span.classList.add("d-none")
    }
    return ehValido;
}


const adicionarMascaraData = () => {
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
    let data = moment( `${dataInformada}`, "DDMMYYYY")
    let data26 = moment().subtract(26, "years");
    let data18 = moment().subtract(18, "years");

    let entre = data.isBetween(data26, data18)
    console.log(`${entre} é entre`)
    
    
    let dataEhValida = data.isValid();
    console.log(dataEhValida)

    const ehValido = entre && dataEhValida;
    let span = document.getElementById("data-erro");
    if(!ehValido){
      span.classList.remove("d-none")
    }else{
      span.classList.add("d-none")
    }
    
    return ehValido;
}

/*
  Temos o seguinte sistema atualmente (imaginando que temos completo tudo o que foi proposto em aula):

  - um campo data de nascimento (validado e com o texto de data inválida caso assim esteja);
  - um campo email (validado e com o texto de email inválido caso assim esteja);
  - um campo senha (validado e com o texto de senha inválida caso assim esteja);
  - um botão cadastrar que "sabe" se o cadastro está válido ou não;

  
  Agora precisamos:
  (o modelo do html está no arquivo index.html e o modelo visual está em um arquivo page-model.png);

  - adicionar um campo de nome acima da data de nascimento e adicionar a validação para possuir somente letras;
  - criar uma classe Colaborador contendo todas as propriedades que os campos possuem e uma propriedade id;
  - ao clicar em cadastrar, instanciar um colaborador e adicioná-lo à ul e à uma lista de colaboradores;
  - adicionar um botão 'Visualizar Colaboradores' (pode ser no topo da tela à direita) 
    que imprime no console todos os colaboradores cadastrados 
    (ATENÇÃO -> buscar os colaboradores pelo document e não fazer um simples forEach da lista de colaboradores)
*/

const validarNome = () =>{
  let nomeInformado = document.getElementById("nome-input").value;
  let semEspaco = nomeInformado.replaceAll(" ", "")
  let nomeSpread = [...semEspaco];
  let nomeNaoVazio = nomeInformado !== "";
  
  let somenteLetra = nomeSpread.every(e => e.toUpperCase() !== e.toLowerCase());
  console.log(somenteLetra, "somente letra")
  
  let ehValido = somenteLetra && nomeNaoVazio;
  
  let span = document.getElementById("nome-erro");
  if(!ehValido){
    span.classList.remove("d-none")
  }else{
    span.classList.add("d-none")
  }
  return ehValido;
  
}


const validarCadastro = (event) => {
  event.preventDefault()
  let ehValido = false;
  ehValido = console.log(`Cadastro ${validarData() && validarEmail() && validarSenha() && validarNome() ? 'válido!' : 'inválido'}`);
  return ehValido
}

