let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  alert("Producto agregado al carrito: " + producto);
}

function mostrarCarrito() {
  console.log("Carrito de compras:", carrito);
}