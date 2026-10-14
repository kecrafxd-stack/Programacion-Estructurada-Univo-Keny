function factorial(numero) {

    if (numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
}
const num = 5
const total = factorial(num);

console.log(`La factorial total de ${num} es: ${total}`);