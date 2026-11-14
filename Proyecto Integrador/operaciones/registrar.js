const { guardarDatos } = require('../database/database');

function registrarJuegos(rl, stock, menu) {
    rl.question(`\nGame ID: `, (ID) => {
        if (stock.some(stk => stk.ID.toLowerCase() === ID.toLowerCase())) {
            console.log(`\nEl Juego ya existe! Actualice stock`)
            rl.question(`\nIngrese nuevo stock:`, (disponibles)=>{
                // PROX: Añadir unicamente el stock disponibles que indico el usuario al juego ya existente
            const i = stock.findIndex(stk => stk.ID.toLowerCase() === ID.toLowerCase());
            stock[i].disponibles += parseInt(disponibles) || stock[i].disponibles

            guardarDatos(stock)

            console.log(`\n Stock Actualizado!`)
            console.log(`\n Resumen:\n Juego: ${stock[i].nombre}\n Nuevo stock: ${stock[i].disponibles}`)

            menu()
            })
        } else {
            rl.question(`\nNombre del juego: `, (nombre) => {
                rl.question(`\nAño de lanzamiento: `, (release) => {
                    rl.question(`\nEditora: `, (publisher) => {
                        rl.question(`\nStock: `, (disponibles) => {


                            const newGame = { ID, nombre, release: parseInt(release), publisher: publisher.toLowerCase(), disponibles: parseInt(disponibles) } //Crea el nuevo juego
                            stock.push(newGame) // Lo sube a stock
                            guardarDatos(stock) // Se sobreescribe inventario.json

                            console.log("\n Juego registrado.");

                            menu();

                        })
                    })
                })
            })
        }
    })
}

module.exports = registrarJuegos;