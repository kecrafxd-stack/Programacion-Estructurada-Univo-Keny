// Menú de conversiones: Muestre un menú con las siguientes opciones: 1) Convertir de grados Celsius a Fahrenheit, 
// 2) Convertir de grados Fahrenheit a Celsius, 3) Salir. Usando Switch, ejecute la opción seleccionada. Fórmulas: 
// °F = °C × 9/5 + 32, °C = (°F - 32) × 5/9.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let resultado;
let conversion;
let unidad;

console.log('1) Convertir de grados Celsius a Fahrenheit\n2) Convertir de grados Fahrenheit a Celsius\n3) Salir')

rl.question('Seleccione una opcion (1-3): ', (sel) => {
    sel = parseInt(sel);
    if (sel != 3) {
        rl.question('Ingrese grados a convertir: ', (grados) => {
            grados = parseFloat(grados);

            switch (sel) {
                case 1:
                    conversion = '°C => °F';
                    resultado = (grados * 9 / 5) + 32;
                    unidad = '°F';
                    break;

                case 2:
                    conversion = '°F => °C';
                    resultado = (grados - 32) * 5 / 9;
                    unidad = '°C';
                    break;

                default:
                    conversion = null;
                    resultado = null;
                    unidad = null;
                    break;
            }
            if (sel > 0 && sel < 3) {
                console.log(grados + ' ' + conversion + ' = ' + resultado + ' ' + unidad);
            } else {
                console.log('Seleccion no valida');
            }
            rl.close()
        })
    } else {
        console.log('Bye!')
        rl.close()
    }
})