import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function kwh(i, cantidad, total){
    if(i>cantidad){

    }

    rl.question(`Ingrese la cantidad de kwH que gasta el equipo ${i}`, (gasto)=>{
        gasto = parseFloat(gasto)

        if(gasto.isFInite())
    })
}

rl.question("Ingrese la cantidad de equipos a evaluar: ", (equipos)=>{
    equipos = parseInt(equipos)
    if(equipos.isFinite() && equipos>0){

    }
})