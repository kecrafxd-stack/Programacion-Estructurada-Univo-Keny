//Ejercicio 7: Una empresa paga una comisión a sus vendedores dependiendo de sus
//ventas.
// Solicite:
// • Nombre del vendedor.
// • Cantidad de productos vendidos.
// • Precio promedio de cada producto.
// Calcule: Total vendido. Si el total vendido es mayor a $500, calcule una comisión del 7
// %. De lo contrario, calcule una comisión del 3 %. Pago total con la comisión si aplica.
// Muestre el nombre del vendedor en mayúsculas, el total vendido y la comisión
// obtenida con dos cifras decimales

import readline, { createInterface } from "node:readline" //Viva el sexo ///UwU///

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese su nombre: `, (nombre) => {
    rl.question(`Ingrese la cantidad de productos vendidos: `, (cantidad) => {
        rl.question(`Ingrese el precio promedio de cada producto: `, (precio) => {

            precio = parseFloat(precio);
            cantidad = parseInt(cantidad)
            let totalcomision;
            let comision;
            let mensaje

            let total = precio*cantidad
            if (total > 500){
                comision = total*0.07
                mensaje = `Ha aplicado la comision del 7% por superar el monto de 500$ ($${total} > $500)`
            } else {
                comision = total*0.03;
                mensaje = `NO supero el monto de 500$. Su comision es del 3% $${total} < $500)`
            }
            totalcomision = total + comision;
            console.log(`=========================`) //Innecesario? SI, pero nos gusta hacerlo asi
            console.log(mensaje)
            console.log(`=========================`)
            console.log(`Nombre del vendedor: ${nombre.toUpperCase()}. \nTotal vendido: $ ${total}. \nComision obtenida: $ ${comision.toFixed(2)}`)
            rl.close();
        })
    })
})