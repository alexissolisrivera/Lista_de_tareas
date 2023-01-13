const input = document.getElementById('input');
const btnToDo = document.getElementById('btnToDo');
const containerTasks = document.querySelector('.containerTasks');
let id = 1

function addToDo() {
    const divToDo = document.createElement("div");
    const divContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    const task = document.createElement("p");
    const divButton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    task.innerHTML = input.value;
    divToDo.classList.add("containerList");
    divContainer.classList.add("containerSubList");
    checkbox.classList.add("box");
    checkbox.setAttribute("type", "checkbox");
    task.classList.add("task");
    divButton.classList.add("listBtn");
    button.classList.add("btnDelete");

    button.setAttribute("id", id++)

    icono.classList.add("fa-solid", "fa-trash", "trash")

    divToDo.appendChild(divContainer);
    divToDo.appendChild(divButton);
    divContainer.appendChild(checkbox);
    divContainer.appendChild(task);
    button.appendChild(icono);
    divButton.appendChild(button);

    containerTasks.appendChild(divToDo);

    input.value = "";

    function clearAll(id){
        document.getElementById(id).parentElement.parentElement.remove();
    }
    button.addEventListener("click",()=>{
        clearAll(button.getAttribute('id'));
    })
}

btnToDo.addEventListener("click", () => {
    if (input.value === "" || input.value.trim() === "") {
        window.alert('input vacio');
    } else {
        addToDo();
    }
});