import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0

rl.question('Cuantas horas duro cada prestamo: ', (duracion)=>{
    duracion = Number(duracion)
    for(let i = 0; i<4; i++){
        total += 2.25*duracion
    }
    console.log(`Recaudo: $${total}`)
rl.close()
})