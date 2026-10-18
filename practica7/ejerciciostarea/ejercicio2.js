import readlineSync from "readline-sync";

console.log("=== TAREA 2: CAJERO AUTOMÁTICO ===");

let saldo = 1000;
let opcion;

do {
    console.log("\n--- MENÚ CAJERO ---");
    console.log("1) Consultar saldo");
    console.log("2) Retirar");
    console.log("3) Depositar");
    console.log("4) Salir");
    
    const respuesta = readlineSync.question("Seleccione una opcion: ");
    opcion = parseInt(respuesta);

    switch (opcion) {
        case 1:
            console.log(`Su saldo actual es: $${saldo}`);
            break;
        case 2:
            const retiro = parseFloat(readlineSync.question("Monto a retirar: $"));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
            } else if (retiro > saldo) {
                console.log("Operación denegada: Fondos insuficientes.");
            } else {
                console.log("Operación denegada: Ingrese un monto válido mayor a 0.");
            }
            break;
        case 3:
            const deposito = parseFloat(readlineSync.question("Monto a depositar: $"));
            if (deposito > 0) {
                saldo += deposito;
                console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
            } else {
                console.log("Operación denegada: El monto a depositar debe ser mayor a 0.");
            }
            break;
        case 4:
            console.log("Gracias por usar nuestro cajero. ¡Hasta pronto!");
            break;
        default:
            console.log("Opción no válida. Por favor seleccione un número del 1 al 4.");
            break;
    }
} while (opcion !== 4);