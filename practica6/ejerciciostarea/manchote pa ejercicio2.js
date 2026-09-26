//Si se preguntan que es esto es el manchote que agarre para resolver como poner los numeros primos desde el 1 hasta el que metiera el usuario

let primos = "";
let n = 10;
let divs = 0;

for (let i = 2; i <= n - 1; i++) {
divs = 0
    for (let j = 1; j <= n - 1; j++) {

        if (i % j == 0) {
            if (i != j && j != 1) {

                divs += 1

            }
        }
    }

    if(divs == 0){
        primos += `${i}, `
    }
}

console.log(primos)