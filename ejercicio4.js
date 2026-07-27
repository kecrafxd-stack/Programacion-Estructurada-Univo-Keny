import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el nombre del producto: ", function(productoNombre){
    rl.question("Ingrese precio unitario del producto: ", function(productoPrecioUnitario){
        rl.question("Ingrese la cantidad deseada: ", function(productoCantidad){

            productoPrecioUnitario = Number(productoPrecioUnitario);
            productoCantidad = Number(productoCantidad);

            let total = productoPrecioUnitario*productoCantidad;

            console.log(`Nombre del producto: ${productoNombre}
Precio unitario: ${productoPrecioUnitario}
Cantidad: ${productoCantidad}
=======================
Total: $${total}`)

                    rl.close();
        })
    })
})