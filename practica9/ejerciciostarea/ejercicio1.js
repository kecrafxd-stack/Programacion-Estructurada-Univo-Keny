import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(numero) {

    if (numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
}

function potencial(numero){
    if(numero === 0){
        return 1;
    }

    //Lo resolvi de pedo y no se como
    function redux(numero2){
        if(numero2 === 0){
        return 1;
    }

    return numero * redux(numero2-1)
    }

    return redux(numero)
}

function suma(n){
    if(n <= 0){
        return 0
    }

    return n + suma(n-1)
}

rl.question("Ingrese un numero x: ", (x)=>{
    x = parseInt(x)

    console.log(`Factorial de ${x}: ${factorial(x)}\n${x} elevado a la ${x}: ${potencial(x)}\nSuma de 1 hasta ${x}: ${suma(x)}`)
    
    rl.close()
})

// Amor, amor, amor
// Amor, amor, amor
// Quiero que me vuelvan a mirar tus ojos

// Amor, amor, amor
// Amor, amor, amor
// Quiero volver a besar tus labios rojos

// ¿Cómo no acordarme de ti?
// ¿De qué manera olvidarte
// Si todo me recuerda a ti?
// En todas partes, estás tú

// Si en una rosa, estás tú
// Si en cada respirar, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?

// Si besando la cruz, estás tú
// Rezando una oración, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?

// Si te clavaste aquí en mi corazón
// Y, de amor, has llenado mi alma
// Y tu sangre corre por mis venas
// Y mi sangre me hace estremecer
// Iré contigo

// Amor, amor, amor
// Amor, amor, amor
// Quiero que me vuelvan a mirar tus ojos

// Amor, amor, amor
// Amor, amor, amor
// Quiero volver a besar tus labios rojos

// ¿Cómo no acordarme de ti?
// ¿De qué manera olvidarte
// Si todo me recuerda a ti?
// En todas partes, estás tú

// Si en una rosa, estás tú
// Si en cada respirar, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?

// Si besando la cruz, estás tú
// Rezando una oración, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?

// Si en una rosa, estás tú
// Si en cada respirar, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?

// Si besando la cruz, estás tú
// Rezando una oración, estás tú
// ¿Cómo te voy a olvidar?
// ¿Cómo te voy a olvidar?



