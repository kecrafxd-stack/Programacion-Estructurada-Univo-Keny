const { guardarDatos } = require('../database/database');

function actualizarStock(rl, stock, menu){
    rl.question(`Game ID: `, (IDS)=>{
        const i = stock.findIndex(stk => stk.ID.toLowerCase() === IDS.toLowerCase()); // Busca el primer coincidente y devuelve su indice

        if( i === -1){
            console.log(`Juego no encontrado. Sin existencias.`)
            menu()
        } else {
            console.log(`Juego encontrado. Ingrese datos:`)

            rl.question(`Nuevo nombre (${stock[i].nombre}): `, (newName)=>{
                rl.question(`Año (${stock[i].release}): `, (newRelease)=>{
                    rl.question(`Nueva editora (${stock[i].publisher}): `, (newPublisher)=>{
                        rl.question(`Stock actual: (${stock[i].disponibles}): `, (newDisp)=>{
                            
                            stock[i].nombre = newName || stock[i].nombre
                            stock[i].release = newRelease || stock[i].release
                            stock[i].publisher = newPublisher || stock[i].publisher
                            stock[i].disponibles = newDisp || stock[i].disponibles

                            guardarDatos(stock)
                            console.log(`\n Stock Actualizado.`)

                            menu()
                        })
                    })
                })
            })
        }
    })
}

module.exports = actualizarStock;