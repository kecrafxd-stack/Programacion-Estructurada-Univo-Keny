import readline from "node:readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let allNotas = [];

function AgregarNotas(estudiates, i, notas, pasaron, nopass, mayor){

    if(i > estudiates){
        let prom = notas.reduce((acc, nota) => acc + nota, 0);
        console.log(`===========\nRESUMEN\n===========\nPROMEDIO: ${prom/notas.length}\nESTUDIANTES CON NOTA >= 6: ${pasaron}\n===========\nESTUDIANTES CON NOTA < 6: ${nopass}\n===========\nMayor nota: ${mayor}`)
        rl.close()
        return
    }

    rl.question(`Ingrese la nota del estudiante #${i}: `, (nota)=>{
        nota = parseFloat(nota)

        if(!Number.isFinite(nota) && nota >= 0 && nota <= 10){
            console.log("Nota INVALIDA")
            AgregarNotas(estudiates, i, nota, pasaron, nopass, mayor)
            return 
        }

        if(nota>=6){pasaron++;}
        if(nota<6){nopass++}

        if(i === 1){
            mayor = nota
        } else {
            if(nota>mayor){
                mayor = nota;
            }
        }

        notas.push(nota)
        AgregarNotas(estudiates, i+1, notas, pasaron, nopass, mayor)
    })


}

rl.question(`Cuántos estudiantes desea registrar? `, (estudiantes)=>{
    estudiantes = parseInt(estudiantes);

    if(Number.isFinite(estudiantes) && estudiantes > 0){
        AgregarNotas(estudiantes, 1, allNotas, 0, 0, 0)
    } else {
        console.log("Cantidad INVALIDA")
        rl.close()
    }
})