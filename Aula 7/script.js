const formulario = document.getElementById("formulario");

const inputTodo = document.getElementById("add-todo")

const lista = document.getElementById("lista");
const listaLi = document.getElementById("li-lista")

const botaoMarcar = document.getElementsByClassName("fa-x")
let countId = 0;

const adicionarLi = (e) =>{
    const novoLi = document.createElement("li");
    novoLi.innerHTML = `<i class="fa-solid fa-x"></i><i class="fa-solid fa-square-check" style="display:none"></i>${e}<i class="fa-solid fa-trash-can"></i>`;
    console.log(novoLi);
    countId = countId++;
    novoLi.setAttribute("id", `${countId}`)
    novoLi.setAttribute("id", `li-lista`)
    lista.appendChild(novoLi);
}

let infoInput = formulario.addEventListener("submit", event => {
    event.preventDefault();

    const todoDigitado = inputTodo.value.trim();
    console.log(todoDigitado);
    if(todoDigitado !== ""){
        formulario.reset();
        return adicionarLi(todoDigitado)
    }else{
        alert("Digite uma tarefa.")
    }
})

const deletaToDo = lista.addEventListener("click", event => {
    
    if(event.target.classList.contains("fa-trash-can")){
        event.target.parentElement.remove()
    }
})

const feito = lista.addEventListener("click", event => {
    
    if(event.target.classList.contains("fa-x")){
        event.target.parentElement.setAttribute("class", "green")
        event.target.style.display = "none";
        event.target.nextElementSibling.style.display = "block";
        
    }
})



// const myfunc = () =>{
//     botaoMarcar.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    
// }






