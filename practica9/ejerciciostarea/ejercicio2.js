import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumaPares(n){
    let pollo = 0
    if(n <= 0){
        return 0;
    }

    if(n % 2 == 0){
        return n + sumaPares(n-1)
    } else {
        return sumaPares(n-1)
    }
}
function sumaImpares(n){
    if(n <= 0){
        return 0;
    }

    if(n % 2 != 0){
        return n + sumaImpares(n-1)
    } else {
        return sumaImpares(n-1)
    }
}

function fibonacci(n) {

    if (n === 0) return 0;

    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`===Menu Pitero===\n1. Sumar los primeros numeros pares hasta n\n2. Sumar los primeros numeros impares hasta n\n3. Imprimir el n-simo numero de la serie fibonacci\nCualquier Otro numero. Cerrar`)
rl.question("Que desea hacer?: #", (opt)=>{
    
    rl.question(`Ingrese un numero n: `, (n)=>{
    n = parseInt(n)
    opt = parseInt(opt)

        switch(opt){
            case 1:
            console.log(`La suma de los primeros valores pares es: ${sumaPares(n)}`)
            break;

            case 2:
            console.log(`La suma de los primeros valores impares es: ${sumaImpares(n)}`)
            break;

            case 3:
            console.log(`El valor numero ${n} de la serie Fibonacci es: ${fibonacci(n)}`)
            break;

            default:
                console.log("Bye Bye");
                break;
        }
    rl.close()
})
})