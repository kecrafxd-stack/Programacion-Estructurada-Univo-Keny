// Calificación por letra: Solicite una calificación numérica (0-100). Usando Switch, 
// convierta a calificación por letra según: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59). 
// Muestre la calificación en letra. (Ayuda: use Math.floor(calificacion / 10) para obtener el rango).

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su calificación (0-100): ", (calificacion) => {
    calificacion = parseInt(calificacion);

    let rango = Math.floor(calificacion / 10);
    let letra;

    switch (rango) {
        case 10:
        case 9:
            letra = "A";
            break;
        case 8:
            letra = "B";
            break;
        case 7:
            letra = "C";
            break;
        case 6:
            letra = "D";
            break;
        default:
            letra = "F";
            break;
    }

    console.log("Calificación: " + letra);

    rl.close();
});