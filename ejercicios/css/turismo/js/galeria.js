  // Interactiva
        
  let imagenActual = 0; // Estas dos variables no interfieren con el código anterior, ya que no se ejecutan en el mismo contexto. Las otras están dentro de una función, y lo que pasa en Las Vegas se queda en Las Vegas.
  let imagenSiguiente = 1; // Tienen que estar fuera de la función para que respondan a los botones, o eso creo, porque hago más pruebas que un Crash Test Dummy.

  function cambiarImagen(direccion) { // "direccion" es un parámetro que recibe la función, y dependerá de si se pulsa el botón "anterior" o el "siguiente".
      let imagenes = document.querySelectorAll(".imagen2"); // Seleccionamos todas las imagenes con clase "imagen2", para poder dejar los dos ejemplos en la misma página.

      if (direccion == "adelante") { // Si se pulsa el botón "siguiente", que es el que tiene onclick="cambiarImagen('adelante')", entonces...
          imagenSiguiente = (imagenActual + 1) % imagenes.length; // Actualizamos la variable "imagenSiguiente" a la siguiente imagen, es decir, a la que vendra luego. El operador "%" es para que no se pase de la longitud de la lista de imagenes.
      } else {
          imagenSiguiente = (imagenActual - 1 + imagenes.length) % imagenes.length; // Si se pulsa el botón "anterior", entonces hará lo contrario.
      }
      imagenes[imagenActual].style.display = "none"; // Ocultamos la imagen actual.
      imagenActual = imagenSiguiente; // Actualizamos la variable "imagenActual" a la imagen siguiente.
      imagenes[imagenSiguiente].style.display = "block"; // Mostramos la imagen siguiente.
  }