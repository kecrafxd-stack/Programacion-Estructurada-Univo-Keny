import readlineSync from "readline-sync";

const obtenerLetra = (nota) => {
    if (nota >= 90) return "A";
    if (nota >= 80) return "B";
    if (nota >= 70) return "C";
    if (nota >= 60) return "D";
    return "F";
};

const calcularPromedio = (notas) => {
    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    return suma / notas.length;
};

console.log("=== TAREA 1: SISTEMA DE CALIFICACIONES ===\n");

const cantidad = parseInt(readlineSync.question("Cantidad de calificaciones a ingresar: "));
const calificaciones = [];

for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(readlineSync.question(`Ingrese la calificacion ${i + 1}: `));
    calificaciones.push(nota);
}

console.log("\n--- Resultados ---");
for (const nota of calificaciones) {
    console.log(`Calificacion: ${nota} - Letra: ${obtenerLetra(nota)}`);
}

const promedio = calcularPromedio(calificaciones);
console.log(`\nPromedio Final: ${promedio.toFixed(2)} - Letra: ${obtenerLetra(promedio)}\n`);