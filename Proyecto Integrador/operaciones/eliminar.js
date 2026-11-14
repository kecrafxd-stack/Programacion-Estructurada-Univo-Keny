const { guardarDatos } = require('../database/database');

function eliminarJuego(rl, stock, menu) {
    rl.question(`\nIngrese Game ID: `, (gID) => {
        if (stock.some(stk => stk.ID.toLowerCase() === gID.toLowerCase())) {
            rl.question(`\n1. Eliminar TODOS los datos de ese juego\n2.Eliminar cantidad de stock\n#`, (opt) => {
                opt = parseInt(opt)
                switch (opt) {
                    case 1:
                        const nuevoStock = stock.filter(stk => stk.ID.toLowerCase() !== gID.toLowerCase());
                        stock.length = 0;
                        stock.push(...nuevoStock);

                        guardarDatos(stock);

                        console.log("\nJuego eliminado.");

                        menu()
                        break;

                    case 2:
                        //Eliminar x cantidad del stock
                        rl.question(`\nIngrese cantidad a eliminar del stock: `, (cantidad) => {
                            cantidad = parseInt(cantidad)
                            const i = stock.findIndex(stk => stk.ID.toLowerCase() === gID.toLowerCase());
                            if (cantidad <= stock[i].disponibles && cantidad > 0 && !isNaN(cantidad)) {
                                stock[i].disponibles -= cantidad
                                guardarDatos(stock)

                                console.log(`\n Cantidad eliminada exitosamente!`)
                                console.log(`\n Resumen:\n Juego: ${stock[i].nombre}\n Nuevo stock: ${stock[i].disponibles}`)
                                menu()

                                
                            } else {
                                console.log(`\nCantidad invalida`)
                                menu()
                            }

                        })
                        break;

                    default:
                        console.log(`\nOpcion invalida`)
                        menu()
                        break;
                }
            })
        } else {
            console.log(`\nJuego no encontrado`)
            menu()
        }
    })
}

module.exports = eliminarJuego;