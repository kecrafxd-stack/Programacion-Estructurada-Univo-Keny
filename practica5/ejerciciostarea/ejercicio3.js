import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log('1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir')

rl.question('Selecciona una opcion\n\n#', (opcion) => {
    opcion = parseInt(opcion);

        switch (opcion) {
            case 1:
                console.log('Su saldo actual es de: $' + saldo);
                break;

            case 2:
                rl.question('Ingrese la cantidad a retirar: $', (retiro)=>{
                    retiro = parseInt(retiro) //Acaso tu retiras 100 dolares con 33 centavos en un cajero?
                    
                    if(retiro < 5){ //Siento que no hay sentido comun en retirar 3 dolares
                        console.log('Cantidad invalida');
                    } else if(retiro > saldo){
                        console.log('Saldo Insuficiente')
                    } else if(retiro % 5 == 0){
                        saldo -= retiro
                        console.log('Retiro Exitoso\nSu saldo actual es de: $' + saldo)
                    } else {
                        console.log('Tiene que ser multiplo de 5')
                    }
                    rl.close()
                })
                
                break;

            case 3:
                rl.question('Ingrese la cantidad a retirar: $', (deposito)=>{
                    deposito = parseInt(deposito) //Acaso tu depositas 100 dolares con 33 centavos?
                    
                    if(deposito < 0 || deposito > 5000){
                        console.log('Cantidad invalida o excedio el monto maximo');
                    } else {
                        saldo += deposito;
                        console.log('Deposito Exitoso\nSu saldo actual es de: $' + saldo);
                    }

                    rl.close()
                })
                break;
            
            case 4:
                console.log('Gracias Por utilizar el cajero')
                rl.close()
                break;
            
            default:
                console.log('Opcion no valida')
                rl.close()
                break;
        }
})