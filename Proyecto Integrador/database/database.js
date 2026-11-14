//Lo que me jode de tener que aprender asi es que no comprendo la razon de ser de las cosas y eso me frustra

const fs = require('fs')
const path = require('path')

const INVENTARIO_JSON = path.join(__dirname, '..', 'inventario.json') //Direccion de donde se encuentra el archivo que guarda los datos

function cargarDatos(){
    if(fs.existsSync(INVENTARIO_JSON)){
        const data = fs.readFileSync(INVENTARIO_JSON, 'utf-8') //Guarda los datos del inventario en la variable data
        
        return JSON.parse(data) //Convierte la variable data a un objeto
    } else {
        fs.writeFileSync(INVENTARIO_JSON, JSON.stringify([],null,2)) //Genera el archivo inventario.js en la ruta, lo convierte a un archivo de texto con forma de objeto, lo deja vacio y le da sangria de 2 espacios
        
        return []
    }
}

function guardarDatos(stock){
    fs.writeFileSync(INVENTARIO_JSON, JSON.stringify(stock,null,2)) //Sobreescribe el archivo inventario.json con los nuevos datos
}

module.exports = { cargarDatos, guardarDatos }