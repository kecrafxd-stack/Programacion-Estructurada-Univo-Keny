import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario su nombre completo. Posteriormente, muestre el nombre ingresado completamente en mayúsculas y completamente en minúsculas.

rl.question(`Ingrese su nombre completo: `, (nombre)=>{
    let nombreMay = nombre.toUpperCase();
    let nombreMin = nombre.toLocaleLowerCase();

    console.log(`Nombre TODO mayuscula: ${nombreMay} \n Nombre TODO minuscula: ${nombreMin}`);

    rl.close()
})