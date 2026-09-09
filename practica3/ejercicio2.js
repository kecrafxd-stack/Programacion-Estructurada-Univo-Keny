import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera calificación (0-100): ", function (entrada1) {
    
    rl.question("Ingrese la segunda calificación (0-100): ", function (entrada2) {
        
        let calificacion1 = parseFloat(entrada1);
        let calificacion2 = parseFloat(entrada2);

        if (calificacion1 > calificacion2) {
            console.log(`La primera calificación (${calificacion1}) es la más alta.`);
        } 
        else if (calificacion2 > calificacion1) {
            console.log(`La segunda calificación (${calificacion2}) es la más alta.`);
        } 
        else if (calificacion1 === calificacion2) {
            console.log(`Ambas calificaciones son iguales (${calificacion1}).`);
        } 
        else {
            console.log("Error: Ingrese valores numéricos válidos.");
        }

        rl.close();
    });
});