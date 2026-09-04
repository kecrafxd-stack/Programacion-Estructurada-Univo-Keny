import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese su edad: `, (edad) =>{
    edad = parseInt(edad);

    if(edad >= 18){
        console.log(`Usted es mayor de edad`)
    } else {
        console.log(`Usted es menor de edad`)
    }
    rl.close()
})