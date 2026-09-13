import readline, { createInterface } from "node:readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre)=>{
    rl.question('Ingrese el nombre del equipo: ', (equipo)=>{
        rl.question('Ingrese la cantidad de horas solicitadas: ', (horasSolicitadas)=>{
            
            horasSolicitadas = parseInt(horasSolicitadas);
            let date = new Date();
            let horaActual = date.getHours();
            let minutoActual = date.getMinutes();
            let costoTotal = (horasSolicitadas*2.25).toFixed(2)
            let mensaje;
            let mm

            if(horaActual<12){
                mensaje = `Préstamo registrado en jornada de mañana`
                mm = "AM"
            } else {
                mensaje = `Préstamo registrado en jornada de tarde`
                mm = 'PM'
            }

            console.log(`==============================\nCosto segun horas solicitadas: $${costoTotal}\nNombre del equipo: ${equipo.toUpperCase()}\nFecha: ${date.toLocaleDateString()}\nHora: ${horaActual}:${minutoActual} ${mm}\n${mensaje}`)

            rl.close()
})
})
})

