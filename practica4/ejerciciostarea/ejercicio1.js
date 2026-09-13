import readline from "node:readline";

// Crear interfaz para recibir datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar número de lados
rl.question("Ingrese el número de lados (3-6): ", (lados) => {
    lados = parseInt(lados);

    let figura;

    // Clasificar la figura según el número de lados
    switch (lados) {
        case 3:
            figura = "Triángulo";
            break;
        case 4:
            figura = "Cuadrilátero";
            break;
        case 5:
            figura = "Pentágono";
            break;
        case 6:
            figura = "Hexágono";
            break;
        default:
            figura = "Figura no reconocida";
            break;
    }

    // Mostrar resultado
    console.log(figura);

    rl.close();
});