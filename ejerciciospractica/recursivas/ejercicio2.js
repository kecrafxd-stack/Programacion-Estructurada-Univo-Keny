import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarImpares(n) {
    if(n<=0) return 0;

    if(n % 2 != 0){
        return n + sumarImpares(n-1)
    }else{
        return sumarImpares(n-1)
    }
}

rl.question("Ingrese un numero entero: ", (dato) => {
    const n = Number(dato);

    if (Number.isInteger(n) && n >= 0) {
        console.log(`La suma de impares es: ${sumarImpares(n)}`);
    } else {
        console.log("Ingrese un entero no negativo.");
    }

    rl.close();
});