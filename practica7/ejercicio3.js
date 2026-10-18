let nombres = ["Juan", "Alejandra", "Maria", "Cristobal", "Ana"];

let masLargo = 0;
let name;

for(let nombre of nombres){
    console.log(nombre + ": " + nombre.length + " letras")

    if(nombre.length>masLargo){
        masLargo = nombre.length
        name = nombre;
    }
}

console.log("El nombre mas largo es: " + name + " con " + masLargo + " letras.")