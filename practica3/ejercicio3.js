import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el monto de la compra: $", function (montoIngresado) {
    
    let monto = parseFloat(montoIngresado);
    
    let porcentajeDescuento = 0;

    if (monto > 100) {
        porcentajeDescuento = 0.15; 
    } 
    else if (monto > 50) {
        porcentajeDescuento = 0.10; 
    } 

    let cantidadDescontada = monto * porcentajeDescuento;
    let totalAPagar = monto - cantidadDescontada;

    console.log(`\n--- Desglose de Factura ---`);
    console.log(`Monto original: $${monto.toFixed(2)}`);
    console.log(`Descuento aplicado: $${cantidadDescontada.toFixed(2)}`);
    console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);

    rl.close();
});