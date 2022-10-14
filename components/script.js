// Imports
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

// Immediately invoked function expression IIFE


// creamos una variable para capturar el elemento botón mediante un data atributes
const btn = document.querySelector("[data-form-btn]");

//Esta otra función hace lo mismo que las de abajo, pero es mejor todavia, porque queda mas limpio el código.

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    // creo una nueva variable para almacenar el valor del input
    const value = input.value; 
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    // y con esto le digo que una vez que se almacene en value el input, este se borre
    input.value = "";

    // Con estas variables creamos los elementos de html, para poder capturarlo y modificarlo con js
    const taksContent = document.createElement("div");
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taksContent.appendChild(checkComplete());
    taksContent.appendChild(tittleTask);
    //Template strings
    // const content = `
    //     <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //Con esto reemplazamos mostramos el valor de task en el content, o sea que se muestra en el html en la etiqueta span del li
    // task.innerHTML = content;

    task.appendChild(taksContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

btn.addEventListener("click", createTask);


// listener - o sea con esta función escuchamos el evento del elemento button del html, cuando el usuario hace click
// Y dentro de la función capturamos el valor del input con .value.

// btn.addEventListener("click", function (evento) {
//     evento.preventDefault(); //Con este metodo evito que se recargue la pag
//     const input = document.querySelector("[data-form-input]");
//     console.log(input.value);
// });

// Arrow function o funciones anonimas, esta función hace lo mismo solo que es una mejor manera de hacer

// btn.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector("[data-form-input]");
//     console.log(input.value);
// })
