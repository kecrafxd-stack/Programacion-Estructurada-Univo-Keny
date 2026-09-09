import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del candidato: ", function (nombre) {
    rl.question("Ingrese la edad del candidato: ", function (edadIngresada) {
        rl.question("Ingrese los años de experiencia del candidato: ", function (experienciaIngresada) {
            
            let edad = parseInt(edadIngresada);
            let experiencia = parseFloat(experienciaIngresada);

            
            if (edad > 18 && experiencia > 0) {
                console.log(`\nEvaluación de ${nombre}: Candidato válido.`);
            } 
            else {
                console.log(`\nEvaluación de ${nombre}: No cumple con los requisitos.`);
            }

            rl.close();
        });
    });
});