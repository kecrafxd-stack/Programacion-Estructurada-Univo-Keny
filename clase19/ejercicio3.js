import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;

rl.question(`Ingrese su gasto diario: `, (gasto)=>{
    gasto = Number(gasto)
    for(let i = 1; i<=6; i++){
        total += gasto;
        console.log(`Dia ${i}: $${total}`)
    }

    console.log(`Total final: $${total}`)
    rl.close()
})