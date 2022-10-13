// creamos una variable para capturar el elemento botón mediante un data atributes
const btn = document.querySelector("[data-form-btn]");

//Esta otra función hace lo mismo que las de abajo, pero es mejor todavia, porque queda mas limpio el código.

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}


console.log(btn);

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