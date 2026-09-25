import readline from "node:readline";
import { parseEnv } from "node:util";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let paseGratis = 0;

rl.question(`Ingrese la cantidad de visitantes en el museo: `, (visitantes)=>{
    visitantes = parseInt(visitantes);

    for(let i = 1; i <= visitantes; i++){
        if(i % 5 == 0){
            paseGratis++;
        }
    }

    console.log(`Hay ${paseGratis} visitantes que tiene pase gratis`);
    rl.close();
})