import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Elabore un programa que solicite el nombre del estudiante, apellido, año de ingreso y cuota mensual.
// Muestre el nombre y apellido en mayúsculas, obtenga las primeras tres letras del apellido,
// convierta el año a texto y muestre los últimos dos dígitos.
// Finalmente, presente la cuota mensual utilizando dos cifras decimales.

rl.question(`Ingrese nombre Estudiante: `, (nombreEstud) => {
    rl.question(`Ingrese apellido Estudiante: `, (apellidoEstud) => {
        rl.question(`Ingrese año de ingreso del Estudiante: `, (añoIngreso) => {
            rl.question(`Ingrese cuota mensual de Estudiante: `, (cuotamensualEstud) => {

                // Nombre y apellido en mayúsculas
                const nombreMayus = nombreEstud.toUpperCase();
                const apellidoMayus = apellidoEstud.toUpperCase();

                // Primeras tres letras del apellido
                const primerasTres = apellidoEstud.substring(0, 3).toUpperCase();

                // Convertir año a texto
                const añoTexto = String(añoIngreso);

                // Obtener los últimos dos dígitos del año
                const ultimosDos = añoTexto.slice(-2);

                // Convertir cuota a número y mostrar dos decimales
                const cuota = Number(cuotamensualEstud).toFixed(2);

                // Mostrar resultados
                console.log("\n--- DATOS DEL ESTUDIANTE ---");
                console.log(`Nombre: ${nombreMayus}`);
                console.log(`Apellido: ${apellidoMayus}`);
                console.log(`Primeras tres letras del apellido: ${primerasTres}`);
                console.log(`Año de ingreso: ${añoTexto}`);
                console.log(`Últimos dos dígitos del año: ${ultimosDos}`);
                console.log(`Cuota mensual: $${cuota}`);

                rl.close();
            })
        })
    })
})