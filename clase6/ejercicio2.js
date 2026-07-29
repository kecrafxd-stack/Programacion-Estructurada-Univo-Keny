import readline, { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese precio de producto: ", function(precio){
    rl.question("Ingrese indice de porcentaje: ", function(porcentaje){
        
        precio = parseFloat(precio);
        porcentaje = (parseFloat(porcentaje)/100)
        let valorDescuento = porcentaje*precio;
        let total = (1-porcentaje)*precio

        console.log("Valor de descuento: " + valorDescuento)
        console.log("Total a pagar: " + total)
        rl.close()
    })
})

