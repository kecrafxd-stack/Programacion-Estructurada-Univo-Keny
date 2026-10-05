import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gb = 20;

rl.question(`Cuantos dias utilizara el servicio (1 a 10)? `, (dias)=>{
    dias = parseInt(dias);

    for(let i = 1; i <= dias; i++){
        gb -= 2
        if(gb <= 4){
            console.log(`Dia ${i}: Saldo bajo! quedan ${gb} GB`)
        } else {
            console.log(`Dia ${i}: quedan ${gb} GB`)
        }

        rl.close()
    }
})