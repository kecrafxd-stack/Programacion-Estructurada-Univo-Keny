import readlineSync from "readline-sync";
let dia = new Date()

let respuesta
do{
    console.log()
    respuesta = readlineSync.question("Seleccione una opcion: \n1) Saludar\n2) Mostrar fecha actual\n3)Salir\n#")
    respuesta = parseInt(respuesta)
    switch(respuesta){
        case 1:
            console.log("Que tranza")
            break;
        case 2:
            console.log("La fecha de hoy es: " + dia.toLocaleDateString())
            console.log("La hora de hoy es: " + dia.toLocaleTimeString())
            break;
        default:
            console.log("Bye")
            break;
    }
} while (respuesta < 3)