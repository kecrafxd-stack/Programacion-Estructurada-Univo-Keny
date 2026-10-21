import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TARIFA_POR_HORA = 1.50;
const UMBRAL_HORAS_DESCUENTO = 5;
const PORCENTAJE_DESCUENTO = 0.10;

const registrarVehiculos = (actual, cantidad, ingresosTotales) => {
    // Caso base: se procesaron todos los vehículos
    if (actual > cantidad) {
        console.log("\n--- RESUMEN DE INGRESOS DEL ESTACIONAMIENTO ---");
        console.log(`Total de vehículos registrados: ${cantidad}`);
        console.log(`Ingresos totales netos: $${ingresosTotales.toFixed(2)}`);
        rl.close();
        return;
    }

    // Solicitud recursiva de las horas de estancia por vehículo
    rl.question(`Ingrese las horas de estacionamiento del vehículo ${actual}: `, (dato) => {
        const horas = parseFloat(dato);

        // Validación: las horas deben ser un número válido mayor a 0
        if (!Number.isFinite(horas) || horas <= 0) {
            console.log("Error: Ingrese una cantidad de horas válida (mayor a 0).");
            registrarVehiculos(actual, cantidad, ingresosTotales); // Reintentar vehículo actual
            return;
        }

        const subtotal = horas * TARIFA_POR_HORA;
        let descuento = 0;

        if (horas > UMBRAL_HORAS_DESCUENTO) {
            descuento = subtotal * PORCENTAJE_DESCUENTO;
        }

        const totalVehiculo = subtotal - descuento;

        if (descuento > 0) {
            console.log(`Vehículo ${actual}: Subtotal: $${subtotal.toFixed(2)} | Descuento (10%): -$${descuento.toFixed(2)} | Total: $${totalVehiculo.toFixed(2)}`);
        } else {
            console.log(`Vehículo ${actual}: Total: $${totalVehiculo.toFixed(2)}`);
        }

        // Llamada recursiva al siguiente vehículo
        registrarVehiculos(actual + 1, cantidad, ingresosTotales + totalVehiculo);
    });
};

// Inicio del programa
rl.question("¿Cuántos vehículos se registrarán?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarVehiculos(1, cantidad, 0);
    } else {
        console.log("Ingresa una cantidad válida de vehículos (entero mayor a 0).");
        rl.close();
    }
});