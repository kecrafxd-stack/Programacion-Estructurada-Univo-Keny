function mostrarStock(stock, menu){
    console.log(`\nLista del Stock actual:`)
    
    if(stock.length === 0){
        console.log(`\n No hay ni madres`)
        menu()
    } else {
        stock.forEach(juego => {
            console.log(`\n Nombre: ${juego.nombre}\n Game ID: ${juego.ID}\n Año de lanzamiento: ${juego.release}\n Editora: ${juego.publisher}\n Stock: ${juego.disponibles}`)
        });

        menu()
    }
}

module.exports = mostrarStock;