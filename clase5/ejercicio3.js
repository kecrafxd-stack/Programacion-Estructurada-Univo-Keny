import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas: ", function(horas){
    horas = Number(horas);
    
    let minutos = horas*60;

    console.log(`${horas} horas equivalen a ${minutos} minutos`)

    rl.close()
})