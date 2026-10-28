import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarDigitos(n) {

    if(n<1) return 0;

    return n%10 + sumarDigitos(Math.floor(n/10))

}

rl.question("Ingrese un numero entero: ", (dato) => {
    const n = Number(dato);

    if (Number.isInteger(n) && n >= 0) {
        console.log(`Suma de los digitos: ${sumarDigitos(n)}`);
    } else {
        console.log("Ingrese un entero no negativo.");
    }

    rl.close();
});