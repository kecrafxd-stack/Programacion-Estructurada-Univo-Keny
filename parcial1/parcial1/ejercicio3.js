import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese nombre completo del estudiante: `, (nombre)=>{
    rl.question(`Ingrese codigo de inscripcion (format. ING-2026-0845):`, (codigo)=>{
        nombre = nombre.toUpperCase();
        codigo = codigo.toUpperCase();

        let carrera = codigo.slice(0,3);
        let año = codigo.slice(4,9);
        año = parseInt(año);
        let inscripcion = codigo.slice(9,15)
        let validacion;

        if(año==2026){
            validacion = `INSCRIPCION VALIDA`
        } else {
            validacion = `VERIFICAR AÑO DE INSCRIPCION`
        }

        console.log(`==================================\n\n    Ticket de inscripcion    \n\n==================================\n\n Estudiante: ${nombre}\n\nCodigo: ${codigo}\n\n---------------\n\nCarrera: ${carrera}\n\nAño: ${año}\n\nRegistro: ${inscripcion}\n\n---------------\n\nEstado: ${validacion}\n\n==================================`)
        rl.close();
    })
})