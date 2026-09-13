// Calculadora de operaciones: Solicite dos números y un operador (+ , - , * , /). Usando Switch, 
// realice la operación correspondiente y muestre el resultado. Si el operador no es válido, muestre un mensaje de error.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let operacion;

rl.question('Ingrese un numero a: ', (a)=>{
    rl.question('Ingrese un numero b: ', (b)=>{
        rl.question('Ingrese un operador(+ , - , * , /): ', (operador)=>{
            a = parseFloat(a);
            b = parseFloat(b);

            switch(operador){
                case '+':
                    operacion = a + b;
                    break;

                case '-':
                    operacion = a - b;
                    break;

                case '*':
                    operacion = a * b;
                    break;
                
                case '/':
                    operacion = a / b;
                    break;
                
                default:
                    operacion = 'Error: Operacion no valida'
                    break;
            }

            if(operador != '+' && operador != '-' && operador != '*' && operador != '/'){
                console.log(operacion)
            } else {
                console.log('Resultado: ' + operacion)
            }
            rl.close()
        })
    })
})