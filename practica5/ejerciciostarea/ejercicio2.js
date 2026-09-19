import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Primero Pido los 3 numeros a b c
rl.question('Ingrese un numero a: ', (a) => {
    rl.question('Ingrese un numero b: ', (b) => {
        rl.question('Ingrese un numero c: ', (c) => {

            a = parseInt(a)
            b = parseInt(b)
            c = parseInt(c)

            //Primero Reviso que TODOS sean iguales
            if (a == b && a == c && b == c) { //Si todos son iguales:
                console.log('Los tres números son iguales')
            } else { // Si no son iguales: Veo si todos son diferentes.
                if (a != b && a != c && b != c) {
                    console.log('Los tres números son diferentes')
                } else {
                    //Si no son diferentes todos: Deben haber dos iguales.
                    console.log('Hay dos números iguales')
                }
            }

            //Comprobar quien es el mayor quien es el menor
            if (a >= b && a >= c) {
                console.log("El mayor es " + a)

                if (b > c) {
                    console.log('El menor es ' + c)
                } else {
                    console.log('El menor es ' + b)
                }
            } else {
                if (b >= a && b >= c) {
                    console.log("El mayor es " + b)

                    if (a > c) {
                        console.log('El menor es ' + c)
                    } else {
                        console.log('El menor es ' + a)
                    }
                } else {
                    if (c >= a && c >= b) {
                        console.log("El mayor es " + c)

                        if (a > b) {
                            console.log('El menor es ' + b)
                        } else {
                            console.log('El menor es ' + a)
                        }
                    }
                }
            }

            if (a < 0 || b < 0 || c < 0) {
                console.log('Hay números negativos')
            }

            rl.close()
        })
    })
})