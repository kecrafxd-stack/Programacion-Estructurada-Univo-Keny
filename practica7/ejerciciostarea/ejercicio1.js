import readlineSync from "readline-sync";

console.log("=== TAREA 1: ADIVINA EL NÚMERO ===");

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivinanza = 0;

while (adivinanza !== numeroSecreto) {
    const respuesta = readlineSync.question("Adivina el numero secreto (1-50): ");
    adivinanza = parseInt(respuesta);

    if (isNaN(adivinanza)) {
        console.log("Por favor, ingresa un número válido.");
        continue;
    }

    intentos++;

    if (adivinanza < numeroSecreto) {
        console.log("El número secreto es MAYOR.");
    } else if (adivinanza > numeroSecreto) {
        console.log("El número secreto es MENOR.");
    }
}

console.log(`¡Correcto! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.\n`);