import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function (nombre) {
    rl.question("Ingrese la cantidad de paginas a imprimir: ", function (cantidad) {

        rl.question("Ingrese costo por pagina: $", function (costo) {

            rl.question("Ingrese la cantidad de copias completas que necesita del documento: ", function (copiasCompletas) {
                
                cantidad = parseInt(cantidad);
                costo = parseFloat(costo);
                copiasCompletas = parseInt(copiasCompletas);
                let costoDocumento = cantidad*costo;
                let total = costoDocumento*copiasCompletas

                console.log(`

Resumen
===================
Cliente: ${nombre}.
Cantidad de paginas a imprimir: ${cantidad}.
Costo por impresion: ${costo}.
Cantidad de copias de documento: ${copiasCompletas}.
subTotal por documento: $${costoDocumento} (Lo que cuesta cada documento)
Cantidad de paginas a imprimir (De las ${copiasCompletas} copias): ${cantidad*copiasCompletas} paginas.
-------------------
Total: $${total} ($${costoDocumento} x ${copiasCompletas} copias).
-------------------
===================

                    `)

                rl.close()
            })
        })
    })
})