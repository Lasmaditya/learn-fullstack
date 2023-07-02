//TODO APPS

/**
 * Buat sebuah aplikasi TO-DO apps menggunakan function berikut:
 * 
 * 1. showTodos()
 * - Menampilkan semua list todo
 * 
 * 2. submitTodo(task)
 * - Menambahkan task ke dalam list
 * 
 * 3. removeTask(id)
 * - Menghapus task berdasarkan id
 * 
 * 4. editTask(id, task)
 * - Mengganti task berdasarkan id
 * 
 * 5. changeStatus(id)
 * - Mengubah status dari true ke false, dari false ke true
 */

let todos = [
    {
        id: 1,
        task: "Belajar js basic",
        status: true,
    },
    {
        id: 2,
        task: "Kerjakan latihan",
        status: false,
    },
    {
        id: 3,
        task: "Makan pagi",
        status: true,
    },
];

//Menampilkan Semua List TODO
function showTodos() {
    console.log("Todo List");
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].status === true) {
            console.log(todos[i].id + ". [X] " + todos[i].task);
        } else {
            console.log(todos[i].id + ". [ ] " + todos[i].task);
        }
    }
};


//Menambahkan Task Ke dalam List
function submitTodos(task) {
    let id = todos[todos.length - 1].id + 1;
    let status = false;
    let tempTodo = {
        id,
        task,
        status,
    };
    todos.push(tempTodo);
    console.log("Task " + task + " has been submitted.");
};

//Menghapus Task Berdasarkan ID
function removeTask(id) {
    let result = [];
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id !== id){
            result.push(todos[i]);
        }
    }
    todos = result;
    console.log("Task with Id " + id + " has been removed.")
};

//Mengganti Task Bersasarkan ID
function editTask(id, task){
    let result = [];
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            todos[i].task = task;
            todos[i].status = status;
        }
        result.push(todos[i]);
    }
    todos = result;
};

// //Mengubah Status Dari True Menjadi False, Dari False Menjadi True
function changeStatus(id){
    let result = [];
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            todos[i].status = !todos[i].status;
        }
        result.push(todos[i]);
    }
    todos = result;
    console.log("Task with id " + id + " status has been changed");
}


submitTodos("Belajar OOP");
submitTodos("Lunch");
removeTask(2);
removeTask(3);
changeStatus(5);
showTodos();