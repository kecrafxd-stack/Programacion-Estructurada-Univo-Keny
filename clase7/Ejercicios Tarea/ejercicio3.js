import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Elabore un programa que trabaje con un código numérico de ocho dígitos. Convierta el código a una cadena de texto y posteriormente muestre únicamente los primeros cuatro dígitos utilizando el método .slice().      

rl.question(`Ingrese un codigo numerico de 8 digitos: `, (codigo)=>{
    let codigo_string = codigo.toString()
    let codigo_sliced = codigo.slice(0,4);

    console.log(`Primeras 4 digitos: ${codigo_sliced}`);

    rl.close()
})