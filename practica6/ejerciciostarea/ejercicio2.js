import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let divisibles = 0;
let divs = 0;
let primos = ``

rl.question("Ingrese un numero N positivo: ", (n) => {
    n = parseInt(n);

    if (n == 1) {
        console.log('El numero no es primo')
        rl.close()
    } else {
        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                if (n != i && i != 1) {
                    divisibles += 1
                }
            }

            divs = 0
            for (let j = 1; j <= n - 1; j++) {

                if (i % j == 0) {
                    if (i != j && j != 1) {

                        divs += 1

                    }
                }
            }

            if (divs == 0) {
                primos += `${i}, `
            }
        }

        if (divisibles == 0) {
            console.log('El numero es primo')
        } else {
            console.log('El numero no es primo')
        }

        console.log(`Numeros primos anteriores a ${n}: ${primos}`) //Dios empece este algoritmo a las 10-11 am y vengo lograndole una solucion rara a las 9 pm, es un ejercicio que trate de hacer hace meses y no logre pero que hoy a lo loco encontre solucion. Feliciteme no sea malo nmm
        //Tengo hueva de quitar la coma que sale al final asi que dejenme tranquilo
        rl.close()
    }
})