const readline = require('readline');
const { cargarDatos } = require('./database/database');

const registrarJuegos = require('./operaciones/registrar');
const mostrarStock = require('./operaciones/mostrar');
const actualizarStock = require('./operaciones/actualizar');
const eliminarJuego = require('./operaciones/eliminar');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stock = cargarDatos();

function menuPrincipal() {
    console.log("\n--- SISTEMA DE GESTION DE STOCK ---");
    console.log("1. Registrar nuevo juego");
    console.log("2. Mostrar todos los juegos en stock");
    console.log("3. Actualizar stock");
    console.log("4. Eliminar en stock");
    console.log("5. Salir");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                registrarJuegos(rl, stock, menuPrincipal);
                break;
            case '2':
                mostrarStock(stock, menuPrincipal);
                break;
            case '3':
                actualizarStock(rl, stock, menuPrincipal);
                break;
            case '4':
                eliminarJuego(rl, stock, menuPrincipal);
                break;
            case '5':
                console.log("\nBye Bye Friki.");
                rl.close();
                break;
            default:
                console.log("\n Opción no válida. Intente de nuevo.");
                menuPrincipal();
                break;
        }
    });
}

console.log("Bienvenido al sistema CRUD modular.");
menuPrincipal();