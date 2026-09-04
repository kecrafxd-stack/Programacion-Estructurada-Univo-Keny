import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese su total de compra: $`, (total) =>{
    total = parseInt(total);

    if(total>=50){
        console.log(`Tiene envio gratis`)
    } else {
        console.log(`No tiene envio gratis`)
    }
    rl.close()
})