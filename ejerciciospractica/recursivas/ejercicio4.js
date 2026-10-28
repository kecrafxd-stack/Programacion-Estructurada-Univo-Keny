import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarGastos(i, cantidad, total){
    if(i > cantidad){
        console.log("Total de gastos: $" + total)
        rl.close()
        return;
    }

    rl.question(`Ingrese el #${i} gasto: $`, (gasto)=>{
        gasto = parseFloat(gasto)

        if(!Number.isFinite(gasto) || gasto < 0){
            console.log("Dato invalido")
            sumarGastos(i, cantidad, total)
            return
        }

        const ngast = total + gasto;

        sumarGastos(i+1, cantidad, ngast)
    })
}

rl.question("¿Cuantos gastos desea registrar?: ", (dato) => {
    dato = parseInt(dato)

    if(Number.isInteger(dato) && dato > 0){
        sumarGastos(1, dato, 0)
    }else{
        console.log("Valor invalido")
        rl.close()
    }

    
})