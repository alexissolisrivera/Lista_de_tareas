const input = document.getElementById('input');
const btnToDo = document.getElementById('btnToDo');
const containerTasks = document.querySelector('.containerTasks');

const saveTask = () => {
    const task = {
        inputTask: input.value
    };
    if (localStorage.getItem("tasks") === null) {
        let array = [];
        array.push(task);
        localStorage.setItem('tasks', JSON.stringify(array));
    } else {
        let get = JSON.parse(localStorage.getItem('tasks'));
        get.push(task);
        localStorage.setItem('tasks', JSON.stringify(get));
    }
    showTasks(); 
    input.value = '';
};

const showTasks = () => {
    let tasksObtained = JSON.parse(localStorage.getItem('tasks'));
    containerTasks.innerHTML = "";
    for (let i = 0; i < tasksObtained.length; i++) {
        let input = tasksObtained[i].inputTask;
        containerTasks.innerHTML += `
    <div class="containerList">
            <div class="containerSubList">
                <input type="checkbox" class="box">
                 <p class="task">${input}</p>
            </div>
       <div class="listBtn">
           <button class="btnDelete" onclick="deleteTask('${input}')" ><i class="fa-solid fa-trash trash"></i></button>
       </div>
     </div>
       `

    }
}

const deleteTask =(task)=>{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if(task===tasks[i].inputTask)
        tasks.splice(i,1);
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    showTasks();
}

btnToDo.addEventListener('click', () => {
    if (input.value === "" || input.value.trim() === "") {
        window.alert('input vaio');
    } else {
        saveTask();
    }
})