// Creamos esta función, para que podamos desmarcar la tareas de la lista
const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
}

//Función que captura el icono check de la lista, para poder seleccionar y deseleccionar
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
}

export default checkComplete;