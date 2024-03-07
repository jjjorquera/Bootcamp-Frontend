// Esto es para decirle a JS que este atento a si cargo completamente la pagina web
document.addEventListener("DOMContentLoaded", function() {
//* TODO EL DOCUMENTO FUE CARGADO


    //con esto capturamos los id del html
    const addButton = document.getElementById('addTaskButtom');
    const inputText = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // esto es una funcion callback
    // El boton
    addButton.addEventListener('click', function() {
        console.log(' has dado click en el botton!');
    })
    // En la caja de texto

    inputText.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
            console.log('Has precionado el Enter');
            console.log(inputText.value);
            addTask(inputText.value);
            inputText.value = "";
            }
    }) 
            

    function addTask(task) {
        // construir un list item <li>
        const li =document.createElement('li'); // <li></li>
        li.textContent = task; //<li>task</li>

        //llamo al ul

        taskList.appendChild(li) // al ul le agregamos un hijo que es <li> que creamos anteriormente
    }
})
    //* const addButtom =  <button id="addtaskButton">Agregar Tarea</button>
    
