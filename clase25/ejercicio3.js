import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cuentaRegresiva(numero) {

    if (numero >= 1) {

        console.log(`Número: ${numero}`);

        cuentaRegresiva(numero - 1);
    }
}

rl.question("Ingrese un número positivo: ", function(dato) {

    const numero = parseInt(dato);

    if (Number.isInteger(numero) && numero > 0) {
        cuentaRegresiva(numero);
    } else {
        console.log(`Ingrese un número válido mayor que cero.`);
    }

    rl.close();
});