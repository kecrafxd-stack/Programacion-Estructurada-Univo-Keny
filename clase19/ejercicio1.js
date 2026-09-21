import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuantó ahorra por día? ", function(ahorro) {
    const cantidad = Number(ahorro);

    let AhorroTotal = 0

    for (let día = 1; día <= 5; día++) {
        AhorroTotal = AhorroTotal + cantidad
        console.log(`Día ${día} ahorro: ${AhorroTotal.toFixed(2)}`);
    }

    console.log(`Ahorro total: $${AhorroTotal.toFixed(2)}`)

    rl.close();
});