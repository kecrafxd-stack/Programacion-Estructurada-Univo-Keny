import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sumaNotas = 0;
let contador = 1;

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

function solicitarNota() {

    if (contador <= 3) {

        rl.question(`Ingrese la nota ${contador}: `, function(dato) {

            const nota = parseFloat(dato);

            if (Number.isFinite(nota) && nota >= 0 && nota <= 10) {

                sumaNotas = sumaNotas + nota;
                contador++;

            } else {
                console.log(`Ingrese una nota entre 0 y 10.`);
            }

            solicitarNota();
        });

    } else {

        const promedio = calcularPromedio(sumaNotas, 3);

        console.log(`Promedio: ${promedio.toFixed(2)}`);

        if (promedio >= 6) {
            console.log(`El estudiante aprobó.`);
        } else {
            console.log(`El estudiante reprobó.`);
        }

        rl.close();
    }
}

solicitarNota();