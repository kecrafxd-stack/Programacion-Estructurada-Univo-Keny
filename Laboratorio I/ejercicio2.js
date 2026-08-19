import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function (nombre) {
    rl.question("Ingrese la cantida de dias que trabaja en el mes: ", function (diasTrabajados) {
        rl.question("Ingrese gasto diario de desayuno: $", function (desayuno) {
            rl.question("Ingrese gasto diario de almuerzo: $", function (almuerzo) {
                rl.question("Ingrese gasto diario de transporte: $", function (transporte) {

                    //Variables a numero
                    diasTrabajados = parseInt(diasTrabajados);
                    desayuno = parseFloat(desayuno);
                    almuerzo = parseFloat(almuerzo);
                    transporte = parseFloat(transporte);

                    let gastoDiario = desayuno+almuerzo+transporte;
                    let gastoMensual = gastoDiario*diasTrabajados
                    console.log(`

Resumen
===================
Nombre: ${nombre}.
Gasto diario (Desayuno+Almuerzo+Transporte): $${gastoDiario}.
-------------------
Total mensual (Gasto diario x ${diasTrabajados} dias trabajados): $${gastoMensual}.
-------------------
===================

                    `)

                rl.close()
                })
            })
        })
    })
})