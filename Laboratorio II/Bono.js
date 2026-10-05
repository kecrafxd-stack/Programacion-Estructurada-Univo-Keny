import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pagoTotal = 0;

rl.question(`Cuantos dias trabaja? `, (dias)=>{
    dias = parseInt(dias)

    for(let i = 1; i <= dias; i++){
        if (i % 3 != 0) {
            pagoTotal += 10
            console.log(`Dia ${i}: pago normal de $10.00`);
        } else {
            pagoTotal += 15
            console.log(`Dia ${i}: recibe bono. Pago: $15.00`);
        }
    }
    console.log(`Pago total: $${pagoTotal.toFixed(2)}`)

    rl.close()
})
