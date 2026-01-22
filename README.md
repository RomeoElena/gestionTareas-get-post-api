# Gestor de Tareas

## Descripción del proyecto

Aplicación web para gestionar tareas utilizando la API de JSONPlaceholder. Permite visualizar, añadir y gestionar tareas de forma interactiva con una interfaz moderna y responsive.

## Funcionalidades principales

### Obtención de tareas (GET)

- La aplicación carga automáticamente tareas desde la API al iniciar
- Muestra las tareas en grupos de 10 elementos
- Incluye un botón "Cargar más tareas" que se oculta cuando no hay más datos disponibles

### Añadir nuevas tareas (POST)

- Formulario para crear nuevas tareas
- Validación del campo de texto para evitar tareas vacías
- Las tareas nuevas se muestran al inicio de la lista con un color distintivo
- Limpieza automática del formulario tras añadir una tarea

### Visualización de estados

- Las tareas completadas se muestran en color verde
- Las tareas no completadas se muestran en color naranja
- Animaciones suaves al añadir nuevas tareas
- Efecto hover en las tareas para mejorar la interactividad

### Visualización del proyecto

  https://romeoelena.github.io/gestionTareas-get-post-api/

## Tecnologías utilizadas

- HTML5
- CSS3 (con animaciones y transiciones)
- JavaScript ES6+ (async/await, fetch API)
- JSONPlaceholder API para datos de prueba

## Estructura del código

### JavaScript

- Gestión del estado de las tareas cargadas
- Funciones asíncronas para comunicación con la API
- Separación de lógica: obtención, visualización y creación de tareas
- Validación de datos de entrada

### CSS

- Diseño responsive con max-width centrado
- Gradiente de fondo moderno
- Sombras y efectos para profundidad visual
- Animaciones y transiciones suaves
- Sistema de colores consistente y armonioso

## API utilizada

Endpoint: https://jsonplaceholder.typicode.com/todos

Métodos implementados:

- GET: Obtener listado de tareas
- POST: Crear nuevas tareas

## Características de diseño

- Paleta de colores suave y moderna
- Interfaz limpia y minimalista
- Feedback visual para todas las interacciones
- Separación clara entre estilos inline y CSS externo

