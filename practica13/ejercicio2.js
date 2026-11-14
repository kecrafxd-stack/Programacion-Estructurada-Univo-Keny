import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let allprecios = [];

function registrarProductos(productos, i, precios){

    if(i > productos){
        let suma = precios.reduce((acc, precio) => acc + precio, 0);
        let mayores = precios.filter(precio => precio>=15)
        
        for(let i = 0; i < precios.length; i++){
            console.log(`Producto ${i+1}: $${precios[i]}`)
        }
        console.log(`==================`)
        
        console.log(`Productos > 15:`)
        for(let i = 0; i < mayores.length; i++){
            console.log(`$${mayores[i]}`)
        }

        console.log(`Sumatoria: $${suma}`)
        rl.close()
        return
    }

    rl.question(`Ingrese el precio del producto #${i}: `, (precio)=>{
        precio = parseFloat(precio)

        if(!Number.isFinite(precio) && precio >= 0 && precio <= 10){
            console.log("precio INVALIDA")
            registrarProductos(productos, i, precio)
            return 
        }

        precios.push(precio)
        registrarProductos(productos, i+1, precios)
    })


}

rl.question(`Cuántos productos desea registrar? `, (productos)=>{
    productos = parseInt(productos);

    if(Number.isFinite(productos) && productos > 0){
        registrarProductos(productos, 1, allprecios)
    } else {
        console.log("Cantidad INVALIDA")
        rl.close()
    }
})