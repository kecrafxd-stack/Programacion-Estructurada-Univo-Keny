import readline from "node:readline";

// Crear interfaz para recibir datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar nivel de estudios
rl.question("Ingrese su nivel de estudios (1-5): ", (nivel) => {
    nivel = parseInt(nivel);

    let estudios;

    // Clasificar el nivel de estudios
    switch (nivel) {
        case 1:
            estudios = "Primaria";
            break;
        case 2:
            estudios = "Secundaria";
            break;
        case 3:
            estudios = "Bachillerato";
            break;
        case 4:
            estudios = "Universidad";
            break;
        case 5:
            estudios = "Postgrado";
            break;
        default:
            estudios = "Nivel no válido";
            break;
    }

    // Mostrar resultado
    console.log(estudios);

    rl.close();
});