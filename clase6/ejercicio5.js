import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cantidad dolares: ", function(dolar){
    rl.question("Ingrese el tipo de cambio actual del euro: ", function(euro){
        dolar = parseFloat(dolar);
        euro = parseFloat(euro);

            let cambio = dolar*euro;

            console.log(`Total: $${cambio}`)

            rl.close()
    })
})

