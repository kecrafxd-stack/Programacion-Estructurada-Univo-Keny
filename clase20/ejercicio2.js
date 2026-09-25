import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let costoBoleto = 0;
let total = 0;

rl.question(`Ingrese la cantidad de boletos a comprar: `, (boletosCantidad)=>{
    boletosCantidad = parseInt(boletosCantidad);

    for(let i = 1; i<=boletosCantidad; i++){
        if (i > 4){
            costoBoleto = 3
        } else {
            costoBoleto = 4
        }

        console.log(`${i}. Boleto: $${costoBoleto.toFixed(2)}`)
        total += costoBoleto
    }

    console.log(`Total: $${total.toFixed(2)}`)

    rl.close()
})