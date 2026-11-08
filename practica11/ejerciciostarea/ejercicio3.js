let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Pollo Asado", precio: 14 },
    { nombre: "Tanque de guerra Ucraniano", precio: 3000000 },
    { nombre: "Pasas", precio: 0.25 },
    { nombre: "Ronald de hule", precio: 900 }
];

console.log("=======================================\nPRODUCTOS\n=======================================")
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

let productosCaros = productos.filter(producto => producto.precio > 100)
console.log("=======================================\nPRODUCTOS CAROS FILTRADOS (precio > 100)\n=======================================")
productosCaros.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});