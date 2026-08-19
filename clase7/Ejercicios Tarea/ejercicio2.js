import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que solicite al usuario un código de carrera con el formato U20260867. Utilice el método correspondiente para mostrar únicamente las primeras tres letras del código
    

rl.question(`Ingrese su codigo estudiante con el formato U20260000: `, (codigo)=>{
    let codigo_sliced = codigo.slice(0,3);

    console.log(`Primeras 3 letras: ${codigo_sliced}`);

    rl.close()
})