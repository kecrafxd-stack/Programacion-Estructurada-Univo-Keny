import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarCalificaciones = (actual, cantidad, total) => {
    // Caso base: se procesaron todas las evaluaciones
    if (actual > cantidad) {
        const promedio = total / cantidad;
        const estado = promedio >= 6.0 ? "APROBADO" : "REPROBADO";

        console.log("\n--- RESUMEN ACADÉMICO ---");
        console.log(`Evaluaciones registradas: ${cantidad}`);
        console.log(`Suma total de notas: ${total.toFixed(2)}`);
        console.log(`Promedio final: ${promedio.toFixed(2)}`);
        console.log(`Estado final: ${estado}`);
        
        rl.close();
        return;
    }

    // Solicitud recursiva de cada nota
    rl.question(`Ingrese la calificación de la evaluación ${actual} (0 - 10): `, (dato) => {
        const nota = parseFloat(dato);

        // Validación: debe ser número y estar dentro del rango [0, 10]
        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            console.log("Error: Ingrese una nota válida entre 0 y 10.");
            registrarCalificaciones(actual, cantidad, total); // Reintentar nota actual
            return;
        }

        const nuevoTotal = total + nota;
        console.log(`Nota ${actual} registrada correctamente. Acumulado: ${nuevoTotal.toFixed(2)}`);

        // Llamada recursiva a la siguiente evaluación
        registrarCalificaciones(actual + 1, cantidad, nuevoTotal);
    });
};

// Inicio del programa
rl.question("¿Cuántas evaluaciones se realizaron?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarCalificaciones(1, cantidad, 0);
    } else {
        console.log("Ingresa una cantidad válida de evaluaciones (entero mayor a 0).");
        rl.close();
    }
});