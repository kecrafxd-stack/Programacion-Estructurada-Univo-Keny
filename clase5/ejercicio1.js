import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese nota 1: ", function (nota1) {
    rl.question("Ingrese nota 2: ", function (nota2) {
        rl.question("Ingrese nota 3: ", function (nota3) {
            nota1 = Number(nota1)
            nota2 = Number(nota2)
            nota3 = Number(nota3)
            let promedio = (nota1+nota2+nota3)/3
            console.log("El promedio de las tres notas es: " + promedio)
            rl.close();
        })
    })
})