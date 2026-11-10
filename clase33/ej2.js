import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let allVentas = [];

function Agregarventas(dias, i, ventas, mayor, diaMayor){

    if(i > dias){
        let total = ventas.reduce((acc, venta) => acc + venta, 0);
        console.log(`===========\nRESUMEN\n===========\nTOTAL VENDIDO: $${total}\nEl dia de mayor ventas: #${diaMayor}\n===========`)
        rl.close()
        return
    }

    rl.question(`Ingrese la venta del dia #${i}: `, (venta)=>{
        venta = parseFloat(venta)

        if(!Number.isFinite(venta) && venta >= 0 && venta <= 10){
            console.log("venta INVALIDA")
            Agregarventas(dias, i, venta, mayor, diaMayor)
            return 
        }

        //Aca creo que medio me la fume pero sirve >;v
        if(i === 1){
            mayor = venta
        } else {
            if(venta>mayor){
                mayor = venta;
                diaMayor = i
            }
        }

        ventas.push(venta)
        Agregarventas(dias, i+1, ventas, mayor, diaMayor)
    })


}

rl.question(`Cuántos estudiantes desea registrar? `, (dias)=>{
    dias = parseInt(dias);

    if(Number.isFinite(dias) && dias > 0){
        Agregarventas(dias, 1, allVentas, 0, 1)
    } else {
        console.log("Cantidad INVALIDA")
        rl.close()
    }
})