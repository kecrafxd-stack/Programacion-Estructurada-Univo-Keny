import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let revision = 0;

rl.question(`Ingrese la cantidad de productos que fabrico: `, (productosCantidad)=>{
    productosCantidad = parseInt(productosCantidad);

    for(let i = 1; i <= productosCantidad; i++){
        if(i % 3 == 0){
            console.log(`!! Producto defectuoso encontrado: #${i}`)
            revision++;
        }
    }

    console.log(`Hay ${revision} productos que necesitan revision`);
    rl.close();
})