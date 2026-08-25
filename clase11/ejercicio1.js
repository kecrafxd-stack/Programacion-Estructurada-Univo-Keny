import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingresa tu nombre: `, (name) => {
  rl.question(`Ingresa tu anio de nacimiento: `, (birthyear) => {
    birthyear = parseInt(birthyear);
    let date = new Date();
    let year = date.getFullYear();
    console.log(year)

    let age = year - birthyear;

    console.log(`Hola, ${name}. Tu edad es de ${age} anios`)
    rl.close();
  });
});
