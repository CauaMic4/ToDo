let cont = 0;
const tarefas = document.getElementById("inputTarefa");
let AddBtn = document.getElementById("add");
let camposContainer = document.getElementById("campos-container");

addBtn.addEventListener("click", addTarefa);

function addTarefa() {

    clonar();

    let valor = tarefas.value;

    if (valor == null) {
        console.log("digite algo")
    }

    return addTarefa;
}

function clonar() {
    let clone = document.querySelector(".campos").cloneNode(true);

    let cloneInput = clone.querySelector("input");
    cloneInput.disabled = true;

    let toMake = document.querySelector("#toMake")
    toMake.appendChild(clone);


}