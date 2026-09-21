import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;

rl.question(`Ingrese las entradas vendidas diariamente: `, (entradas)=>{
    entradas = Number(entradas)

    for(let i = 1; i<=5; i++){
        total += entradas;
    }

    console.log(`Total de entradas vendidas: ${total}`)

    rl.close()
})