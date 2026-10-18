console.log("\n=== TAREA 3: INVENTARIO DE PRODUCTOS ===");

const inventario = [
    { nombre: "Laptop Ryzen 7", precio: 850, cantidad: 3 },
    { nombre: "Monitor 24 pulgadas", precio: 150, cantidad: 5 },
    { nombre: "Teclado Mecánico", precio: 60, cantidad: 10 },
    { nombre: "Ratón Inalámbrico", precio: 25, cantidad: 15 }
];

let totalProductos = 0;
let valorTotalInventario = 0;

console.log("--- Detalle por Producto ---");

// FOR...OF para recorrer los valores del arreglo
for (const producto of inventario) {
    const valorTotalProducto = producto.precio * producto.cantidad;
    
    // Acumuladores para el resumen final
    totalProductos += producto.cantidad;
    valorTotalInventario += valorTotalProducto;
    
    console.log(`- ${producto.nombre}: Valor total $${valorTotalProducto} (Precio: $${producto.precio} x ${producto.cantidad} uds)`);
}

const resumen = {
    "Total de artículos físicos": totalProductos,
    "Valor total del inventario": `$${valorTotalInventario}`
};

console.log("\n--- Resumen General ---");

// FOR...IN para recorrer las propiedades del objeto de resumen
for (const propiedad in resumen) {
    console.log(`${propiedad}: ${resumen[propiedad]}`);
}