import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`1. Debito\n2. Credito\n3. Premium`)
rl.question(`Seleccione su tarjeta: #`, (tarjeta)=>{
    rl.question(`Ingrese el monto a retirar (Recuerde que su limite de retiro es equivalente a su tipo de tarjeta)\nDebito: max. $500\nCredito: max. $1000\nPremium: max. $2000\n\n$`, (monto)=>{
        tarjeta = parseInt(tarjeta);
        monto = parseInt(monto)
        let limite;
        let mensaje;

        switch(tarjeta){
            case 1:
                limite = 500;
                break;

            case 2:
                limite = 1000;
                break;

            case 3:
                limite = 2000;
                break;
            
            default:
                console.log(`Opcion invalida`)
        }

        if(monto>0){
            if(monto <= limite){
                if(monto % 10 == 0){
                    console.log(`Retiro Exitoso`)
                } else {
                    console.log(`El monto debe ser multiplo de 10`)
                }
            } else {
                console.log(`Limite excedido`)
            }
        }

        rl.close()
    })
})