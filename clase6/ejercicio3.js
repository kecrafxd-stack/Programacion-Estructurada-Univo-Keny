import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la medida en metros: ", function(metros){
    metros = Number(metros);
    
    let centimetros = metros*100;

    console.log(`${metros} metros equivalen a ${centimetros} centimetros`)

    rl.close()
})