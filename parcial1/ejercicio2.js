import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese nombre de empleado: ', (nombre)=>{
    rl.question('Ingrese cantidad de productos elaborados: ', (productosElaborados)=>{
        rl.question('Ingrese la cantidad de productos defectuosos: ', (productosDefectuosos)=>{
        
            productosElaborados = parseInt(productosElaborados);
            productosDefectuosos = parseInt(productosDefectuosos)
            let productosBuenos = productosElaborados-productosDefectuosos;

            let porcentajePB = (productosBuenos/productosElaborados)*100;
            let porcentajePD = (productosDefectuosos/productosElaborados)*100
            let pass;

            if(porcentajePB>=95){
                pass = "Produccion Aceptada"
            } else {
                pass = "Produccion requiere revision"
            }

            console.log(`========================\nEmpleado encargado: ${nombre.toUpperCase()}\n------------------\nPorcentaje de productos correctos: ${porcentajePB.toFixed(2)}%\nPorcentaje de productos defectuosos: ${porcentajePD.toFixed(2)}%\n========================\n${pass}\n========================`)
            
        rl.close()
})
})
})

