import readlineSync from "readline-sync";

let total = 0;
let suma

while (total <= 100) {
    let resp = readlineSync.question("Ingrese un numero hasta superar 100: ");
    suma = parseInt(resp);

    if (!isNaN(suma)) {
        total += suma;
        console.log("Suma acumulada: " + total);
    } else {
        console.log("Eso no es un número válido.");
    }
}

console.log("Ya rebaso el limite de 100: " + total)