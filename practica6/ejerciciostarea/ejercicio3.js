import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas calificaciones desea ingresar? ", (cantidad) => {

    cantidad = parseInt(cantidad);

    let suma = 0;
    let mayor = 0;
    let menor = 0;
    let i = 1;

    function ingresarCalificacion() {

        rl.question(`Ingrese la calificación ${i}: `, (calificacion) => {

            calificacion = parseFloat(calificacion);

            // Acumular la calificación
            suma += calificacion;

            // La primera calificación es inicialmente la mayor y la menor
            if (i == 1) {
                mayor = calificacion;
                menor = calificacion;
            } else {

                // Comprobar si es la mayor
                if (calificacion > mayor) {
                    mayor = calificacion;
                }

                // Comprobar si es la menor
                if (calificacion < menor) {
                    menor = calificacion;
                }
            }

            i++;

            // Continuar solicitando calificaciones
            if (i <= cantidad) {
                ingresarCalificacion();
            } else {

                // Calcular el promedio
                let promedio = suma / cantidad;

                console.log("\n--- RESULTADOS ---");
                console.log(`Promedio: ${promedio}`);
                console.log(`Calificación más alta: ${mayor}`);
                console.log(`Calificación más baja: ${menor}`);

                rl.close();
            }
        });
    }

    ingresarCalificacion();
});
