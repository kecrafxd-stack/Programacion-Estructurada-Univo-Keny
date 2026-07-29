import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese precio unitario de producto: ", function(precio){
    rl.question("Ingrese la cantidad deseada: ", function(cantidad){
        precio = parseFloat(precio);
        cantidad = parseInt(cantidad);

            let total = precio*cantidad;

            console.log(`Total: $${total}`)

            rl.close()
    })
})

