let notas = [8, 7, 9, 6, 10];

let prom = notas.reduce((acc, nota) => acc + nota, 0);
console.log("Promedio:" + prom/notas.length);