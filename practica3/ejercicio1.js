import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número para evaluar: ", function (numeroIngresado) {
    
    let numero = parseFloat(numeroIngresado);

    if (numero > 0) {
        console.log("Resultado: El número es positivo.");
    } 
    else if (numero < 0) {
        console.log("Resultado: El número es negativo.");
    } 
    else {
        console.log("Resultado: El número es cero.");
    }

    rl.close();
});