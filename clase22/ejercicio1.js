import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function descuento(precio){
    return precio*0.90
}

rl.question(`Ingrese el precio del producto: $`, (precio)=>{
    precio = parseFloat(precio);

    let total = descuento(precio);

    console.log(`El total con el 10% de descuento es: $${total.toFixed(2)}`)

    rl.close()
});