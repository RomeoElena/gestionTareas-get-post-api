//Variables para controlar cuántas tareas se han mostrado
let tareasActuales = 0;
let todasLasTareas = [];

//Obtener y mostrar tareas con GET
const obtenerTareas = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    todasLasTareas = await respuesta.json();

    //Mostrar las primeras 10 tareas
    mostrarMasTareas();
  } catch (error) {
    console.log("Error al obtener tareas:", error);
  }
};

//Función para mostrar 10 tareas más
const mostrarMasTareas = () => {
  const tareasMostrar = todasLasTareas.slice(
    tareasActuales,
    tareasActuales + 10,
  );
  mostrarTareas(tareasMostrar);
  tareasActuales += 10;

  //Ocultar el botón si ya no hay más tareas en la API
  const boton = document.getElementById("btnMasTareas");
  if (tareasActuales >= todasLasTareas.length) {
    boton.classList.add("oculto");
  }
};

//Función para mostrar las tareas añadidas en la página
const mostrarTareas = (tareas) => {
  const lista = document.getElementById("listaTareas");

  tareas.forEach((tarea) => {
    const li = document.createElement("li");

    const titulo = document.createElement("strong");
    titulo.textContent = tarea.title;

    const estado = document.createElement("span");
    if (tarea.completed) {
      estado.textContent = " Tarea completada";
      estado.className = "completada";
    } else {
      estado.textContent = " Tarea no completada";
      estado.className = "no-completada";
    }

    li.appendChild(titulo);
    li.appendChild(estado);
    lista.appendChild(li);
  });
};

//Añadir tareas con POST
const añadirTarea = async () => {
  const inputTitulo = document.getElementById("tituloTarea");
  const titulo = inputTitulo.value;

  //Validación para que el campo no esté vacío
  if (titulo === "") {
    alert("Por favor, escribe un título para la tarea");
    return;
  }

  //Datos a enviar en el listado de tareas
  const nuevaTarea = {
    title: titulo,
    completed: false,
    userId: 1,
  };

  try {
    //Realizar solicitud POST
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaTarea),
      },
    );

    const tareaCreada = await respuesta.json();

    //Mostrar la tarea añadida en el listado de tareas
    const lista = document.getElementById("listaTareas");
    const li = document.createElement("li");
    li.classList.add("tarea-nueva");

    const titulo = document.createElement("strong");
    titulo.textContent = tareaCreada.title;

    const estado = document.createElement("span");
    estado.textContent = " Tarea no completada";
    estado.className = "no-completada";

    li.appendChild(titulo);
    li.appendChild(estado);

    //Insertar la nueva tarea al principio de la lista
    lista.insertBefore(li, lista.firstChild);

    //Limpiar el campo de texto
    inputTitulo.value = "";
  } catch (error) {
    console.log("Error al añadir tarea:", error);
    alert("Error al añadir la tarea");
  }
};

//Cargar las tareas al inicio
obtenerTareas();
