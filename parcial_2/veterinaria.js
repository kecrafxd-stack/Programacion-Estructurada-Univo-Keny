import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dogOrCat(i, consultas, perros, gatos){
    if(i > consultas){
        console.log(`============================\nTotal de consultas a:\nPerros: ${perros}\nGatos: ${gatos}\n============================`)
        rl.close()
        return;
    }
    console.log(`1) Perros\n2) Gatos`)
    rl.question(`Ingrese el tipo de animal del paciente ${i} : #`, (animal)=>{
        animal = parseInt(animal)

        switch(animal){
            case 1:
                console.log(`==============\nRegistro Perro\n==============`)
                const newPerros = perros + 1
                dogOrCat(i+1, consultas, newPerros, gatos)
                break
            case 2:
                console.log(`==============\nRegistro Gato\n==============`)
                const newGatos = gatos + 1
                dogOrCat(i+1, consultas, perros, newGatos)
                break
            default:
                console.log(`==============\nDato invalido\n==============`)
                dogOrCat(i, consultas, perros, gatos)
                return;
        }
        
    })
}

rl.question("Ingrese la cantidad de consultas atendidas: ", (consultas) => {
    consultas = parseInt(consultas)

    if(Number.isInteger(consultas) && consultas > 0){
        dogOrCat(1, consultas, 0, 0)
    }else{
        console.log("Valor invalido")
        rl.close()
    }

    
})