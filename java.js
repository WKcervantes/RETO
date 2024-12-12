let carrito = [];
const cartCount = document.getElementById('cart-count');
const carritoLista = document.getElementById('carrito-lista');
const carritoSection = document.getElementById('carrito');

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    cartCount.textContent = carrito.length;
    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto;
        carritoLista.appendChild(li);
    });
}

function mostrarCarrito() {
    carritoSection.style.display = carritoSection.style.display === 'block' ? 'none' : 'block';
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    carritoSection.style.display = 'none';
}