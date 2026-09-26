import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un numero entero positivo: ', (num)=>{
    
    num = parseInt(num);
    let poperoqueusaresoloparaponerloennunconsolelogxdxdxdddddddddddddd = num;

    let text = `${num} x `;

    for(let i = num-1; i > 0; i--){
        // console.log(`${num} x ${i} = ${num*i}`)
        num = num*i
        if(i!=1){
            text += `${i} x `;
        } else {
            text += "1"
        }
        
    }
    //No me baje puntos por la variable don que yo se que no se deben de hacer asi pero un poquito de humor no hace daño a nadie juro que no dejare deuda tecnica
    console.log(`${poperoqueusaresoloparaponerloennunconsolelogxdxdxdddddddddddddd}! = ${text} = ${num}`)
    rl.close()
})