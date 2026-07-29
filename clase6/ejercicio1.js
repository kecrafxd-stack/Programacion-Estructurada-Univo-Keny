import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre){
    rl.question("Ingrese la cantidad de horas trabajadas: ", function(horas){
        rl.question("Ingrese pago por hora: ", function(pagoxhora){
            horas = parseFloat(horas);
            pagoxhora = parseFloat(pagoxhora);

            let pagoSemanal = (horas*pagoxhora)*7;

            console.log(`Pago semanal: ${pagoSemanal}`)

            rl.close()
        })
    })
})

