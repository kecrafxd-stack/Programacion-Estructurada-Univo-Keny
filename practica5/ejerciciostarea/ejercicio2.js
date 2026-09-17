import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero a: ', (a)=>{
    rl.question('Ingrese un numero b: ', (b)=>{
        rl.question('Ingrese un numero c: ', (c)=>{
            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);
            if(a<0 || b<0 || c<0){
                console.log('Hay numeros negativos')
            }
            if(a == b && a == c && b == c){
                console.log('Los tres números son iguales')
                console.log('En serio vas a preguntar cual es el mayor o el menor?')
            }else if(a == b){
                console.log('Hay dos números iguales (a == b)')
                if(c>b){
                    console.log('El numero mayor es c: ' + c)
                    console.log('El numero menor es: ' + b)
                } else { //En este caso: para que voy a evaluar con a si vale lo mismo que b????
                    console.log('El numero mayor es b: ' + b)
                    console.log('El numero menor es: ' + c)
                }
            }else if(a == c){
                console.log('Hay dos números iguales (a == c)')
                if(b>c){
                    console.log('El numero mayor es b: ' + b)
                    console.log('El numero menor es: ' + c)
                } else { //En este caso: para que voy a evaluar con a si vale lo mismo que b????
                    console.log('El numero mayor es c: ' + c)
                    console.log('El numero menor es: ' + b)
                }
            }else if(b == c){
                console.log('Hay dos números iguales (b == c)')
                if(a>b){
                    console.log('El numero mayor es a: ' + a)
                    console.log('El numero menor es:' + b)
                } else { //En este caso: para que voy a evaluar con a si vale lo mismo que b????
                    console.log('El numero mayor es b: ' + b)
                    console.log('El numero menor es: ' + a)
                }
            } else {
                console.log('Los tres números son diferentes')
                if(a>b && a>c){
                    console.log('El mayor es a: ' + a)
                    if(b>c){
                        console.log('El menor es c: ' + c)
                    } else {
                        console.log('El menor es b: ' + b)
                    }
                } else if(b>c){
                    console.log('El mayor es b: ' + b)
                    if(c>a){
                        console.log('El menor es a: ' + a)
                    } else {
                        console.log('El menor es c: ' + c)
                    }
                } else {
                    console.log('El mayor es c: ' + c)
                    if(b>a){
                        console.log('El menor es a: ' + a)
                    } else {
                        console.log('El menor es b: ' + b)
                    }
                }
            }

            rl.close()
        })
    })
})