import readline from "node:readline";

// Crear interfaz para recibir datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar bebida
rl.question("Seleccione una bebida (1-5): ", (opcion) => {
    opcion = parseInt(opcion);

    let bebida;

    // Seleccionar bebida
    switch (opcion) {
        case 1:
            bebida = "Agua";
            break;
        case 2:
            bebida = "Refresco";
            break;
        case 3:
            bebida = "Jugo";
            break;
        case 4:
            bebida = "Café";
            break;
        case 5:
            bebida = "Té";
            break;
        default:
            console.log("Bebida no disponible");
            rl.close();
            return;
    }

    console.log("Ha seleccionado: " + bebida);

    // Preguntar por hielo para refresco o jugo
    if (opcion == 2 || opcion == 3) {
        rl.question("¿Desea agregar hielo? (si/no): ", (hielo) => {
            hielo = hielo.toLowerCase();

            if (hielo == "si") {
                console.log("Se agregará hielo.");
            } else {
                console.log("No se agregará hielo.");
            }

            rl.close();
        });
    } else {
        rl.close();
    }
});