

//#region Validação Email
const validarEmail = () => {
  let emailDigitado = document.getElementById('email-input-registration').value;
  let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

  let emailSplit = emailDigitado.split('@');
  
  let possuiArroba = emailSplit.length > 1;

  let dominioEmail = possuiArroba ? emailSplit[1] : '';
  let dominioEmailSplit = dominioEmail.split('.');

  let possuiPontosNoDominio = dominioEmailSplit.length > 1;

  let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

  let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

  let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

  // para setar o texto de erro em vermelho
  let erroEmail = document.getElementById('email-registration-error');
  erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
  let senhaDigitada = document.getElementById('password-input-registration').value;
  let listaCaracteres = senhaDigitada.split('');

  let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

  let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
  let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

  let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
  let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

  let possuiOitoCaracteres = senhaDigitada.length >= 8;

  let naoPossuiEspacos = !senhaDigitada.includes(' ');

  let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
      possuiCharEspecial && possuiNumero && naoPossuiEspacos;

  // para setar o texto de erro em vermelho
  let erroSenha = document.getElementById('password-registration-error');
  erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
  let inputData = document.getElementById('date-input-registration');
  let dataDigitada = inputData.value;

  adicionarMascaraData(inputData, dataDigitada);

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

  // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
  let dataAnteriorHoje = dataConvertida.isBefore(moment());

  let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

  // para setar o texto de erro em vermelho
  let erroData = document.getElementById('date-registration-error');
  erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}

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

const adicionarMascaraData = (input, data) => {
  let listaCaracteres = [...data];
  
  let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
  if(listaFiltrada && listaFiltrada.length) {
      let dataDigitada = listaFiltrada.join('');

      const { length } = dataDigitada;

      switch(length) { 
          case 0: case 1: case 2:
              input.value = dataDigitada; 
              break;
          case 3: case 4:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
              break;
          default:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
      }
  }
}
//#endregion Validação Data


const resetarCampos = (...campos) => {
  campos.forEach(c => c.value = '');
}

const alternarClasses = (elemento, ...classes) =>{
  classes.forEach ( classe => {
    elemento.classList.toggle(classe);
  })
}

const irPara = (origem, destino) => {
  const elementoOrigem = document.getElementById(origem);
  const elementoDestino = document.getElementById(destino);

  alternarClasses(elementoOrigem, "d-flex", "d-none")
  alternarClasses(elementoDestino, "d-flex", "d-none")
  // elementoOrigem.classList.toggle("d-none")
  // elementoOrigem.classList.toggle("d-flex")
  // elementoDestino.classList.toggle("d-none")
  // elementoDestino.classList.toggle("d-flex")
}



const validarLogin = () => {
  

  // se sucesso
  irPara("login", "home")
}


const listarUsuarios = () => {
  // aqui entra lógica de GET para os usuários
};



const validarCadastro = () => {
  let cadastroValido = validarData() && validarEmail() && validarSenha();
  console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

  if(cadastroValido) {
    cadastrarUsuario();
  }
}


const excluirColaborador = () => {
  
}

function upperCase(string){
  let splitado = string.split(" ");
  let maiusculo;
  let novoArray = [];
  for(element of splitado){
      maiusculo = element.charAt(0).toUpperCase()+element.substring(1);
  
      novoArray.push(maiusculo)
  }
  
  let finalizado = novoArray.join(" ").toString();
  return finalizado
}

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
  }
}

const cadastrarUsuario = () => {
  let nome = document.getElementById("nome-input").value;
  let nascimento = document.getElementById("date-input-registration").value;
  let email = document.getElementById("email-input-registration").value;
  let senha = document.getElementById("password-input-registration").value;
  
  nome = upperCase(nome);
  const novoColab = new Colaborador (nome, email, senha, nascimento);

  axios.post("http://localhost:3000/colaboradores", novoColab)
    .then( (resolve) =>{
      resolve.data.id;
      const li = document.createElement('li');
      li.setAttribute('id', `colab-${resolve.data.id}`);
      irPara("registration", "login")
      console.log("sucesso", resolve)
    }, (reject) =>{
      console.log("Algum problema encontrado", reject)
    })
};
