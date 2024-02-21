let cont = 0;
const tarefas = document.getElementById("inputTarefa");
let addBtn = document.getElementById("add");
let camposContainer = document.getElementById("campos-container");

addBtn.addEventListener("click", addTarefa);

//função que verifica se o input possui texto e chama mais duas funções que clona e limpa o input quando clicado
function addTarefa() {   

    let valor = tarefas.value;

    if (valor == null || valor.trim() == "") {
        console.log("digite algo");
        return;
    } else {
        clonar();
        clearInput();
    }

}

//funcao q clona a div com os campos e a criação do botao excluir
function clonar() {

    let clone = document.querySelector(".campos").cloneNode(true);
    let cloneInput = clone.querySelector("input");
    let excluirBtn = clone.querySelector("button"); 

    clone.id = "clone" + Date.now();

    cloneInput.disabled = true;
    cloneInput.style.fontWeight = "bold";
    cloneInput.style.color = "black"; 

    let toMake = document.querySelector("#toMake");
    toMake.appendChild(clone);

    excluirBtn.textContent = "Excluir";

    excluirBtn.addEventListener("mouseover", function() {
        excluirBtn.style.background = "Red";
    });

    excluirBtn.addEventListener("mouseout", function() {
        excluirBtn.style.background = "";
    });

    excluirBtn.addEventListener("click", function () {
        let parent = excluirBtn.parentNode;
        parent.parentNode.removeChild(parent);
        console.log("test")
    });
}

//função que limpa o input
function clearInput() {

    document.querySelector('input').value = '';  
}
