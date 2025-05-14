// Ejercicio 1
// Sistema de Registro de Películas para un Cine
// Estás trabajando para un cine que tiene que registrar sus películas para mostrar
// en la cartelera. El objetivo es crear un sistema que permita agregar las películas
// disponibles. Para esto, debés:
// • Crear una página web con el título principal "Cartelera de Cine".
// • Debajo del título, agregar una tabla que contenga los encabezados: Título,
// Género, Año y Clasificación.
// • Solo deben aparecer los encabezados, no los datos de las películas. La
// tabla debe contener los bordes externos e internos, que se vean como una
// línea unificada. El encabezado además, debe tener una fuente distinta al
// resto de la tabla.
// • Crear un formulario debajo de la tabla con los campos:
// • Título (campo de texto).
// • Género (select con opciones: Acción, Drama, Comedia).
// • Año (campo numérico que debe permitir años desde 1900 en adelante).
// • Clasificación (select con opciones: ATP, +13, +16, +18).
// • Agregar un botón "Agregar película" debajo del formulario.
// Si el formulario está incompleto o el año no es válido, muestra un mensaje de
// advertencia en rojo.
// Si los datos son válidos, agrega una nueva fila a la tabla con los datos
// ingresados, y muestra la película agregada en la tabla.
// Al posicionar el mouse por encima, cambiar el color de fondo de las celdas de
// Clasificación según la clasificación de la película.

function agregarPelicula() {
  const titulo = document.getElementById('titulo');
  const ano = document.getElementById('ano');
  const clasificacion = document.getElementById('clasificacion');
  const genero = document.getElementById('genero');
  const camposVacios = [];

  function validarCampos() {
    if (titulo.value.trim() === "") {
      camposVacios.push("Título");
    }

    if (ano.value.trim() === "") {
      camposVacios.push("Año");
    }

    if (clasificacion.value.trim() === "") {
      camposVacios.push("Clasificación");
    }

    if (genero.value.trim() === "") {
      camposVacios.push("Género");
    }

    if (camposVacios.length > 0) {
      alert("Los siguientes campos son obligatorios: " + camposVacios.join(', '));
      return false;
    } else {
      alert("Película agregada correctamente");
      agregarTabla();
      return true;
    }
  }

  function agregarTabla() {
    const tabla = document.getElementById('catalogo');
    const nuevaFila = tabla.insertRow(-1); // Insertar una nueva fila al final de la tabla

    // Crear las celdas para cada dato
    const tituloCelda = nuevaFila.insertCell(0);
    const anoCelda = nuevaFila.insertCell(1);
    const clasificacionCelda = nuevaFila.insertCell(2); 
    const generoCelda = nuevaFila.insertCell(3);

    // Obtener los valores de los campos y asignarlos a las celdas
    tituloCelda.textContent = titulo.value;
    anoCelda.textContent = ano.value;
    clasificacionCelda.textContent = clasificacion.value;
    generoCelda.textContent = genero.value;

    switch (clasificacionCelda.textContent) {
    case 'ATP':
        clasificacionCelda.classList.add('ATP')
        break;
     case '+13':
        clasificacionCelda.classList.add('trece')
        break;
    case '+16':
        clasificacionCelda.classList.add('dieciseis')
        break;
    case '+18':
        clasificacionCelda.classList.add('dieciocho')
        break;

    default:
        break;
}
   
  }




  function limpiarFormulario() {
    titulo.value = "";
    ano.value = "";
    clasificacion.value = "";
    genero.value = "";
  }

  

  validarCampos(); // Llamamos a la validación al principio de la función agregarPelicula
}