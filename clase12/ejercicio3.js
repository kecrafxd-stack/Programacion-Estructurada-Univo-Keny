import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese el nombre del empleado: `, (nombre) => {
    rl.question(`Ingrese su salario: `, (salario) => {
        rl.question(`Ingrese los anios trabajados: `, (years) => {
            salario = parseFloat(salario);
            years = parseInt(years);

            if (years >= 5) {
                let bono = salario * 0.10;
                salario += bono
                console.log(`Hola, ${nombre}. Usted esta autorizado a recibir el bono por anios de laburo: ${bono}`)
                console.log(`Su salario es de: ${salario}`)
            } else {
                console.log(`Hola, ${nombre}. No obtuvo bono. Su salario es de $${salario}`)
            }

            rl.close();

        })
    })
})