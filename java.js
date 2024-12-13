let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  alert("Producto agregado al carrito: " + producto);
}

function mostrarCarrito() {
  console.log("Carrito de compras:", carrito);
}

function validarFormulario() {
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let mensaje = document.getElementById('mensaje').value;

  if (!nombre || !correo || !mensaje) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  alert("Formulario enviado con éxito");
  // Aquí podrías agregar una acción para enviar los datos del formulario.
  return false; // Para evitar el comportamiento por defecto de enviar el formulario
}