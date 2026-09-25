import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese el numero del que quiere la tabla: `, (num)=>{
    num = parseInt(num);
    
    for(let i = 1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }

    rl.close()
})