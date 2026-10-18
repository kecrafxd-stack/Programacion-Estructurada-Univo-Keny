let estudiante = {
    nombre: "Carlos Martinez",
    edad: 21,
    carrera: "Ingenieria en Sistemas",
    promedio: 8.7,
    universidad: "UNIVO"
};

for(let prop in estudiante){
    console.log(prop + ": " + estudiante[prop])
}

console.log('\n=== EVALUACION ===');
if(estudiante.promedio >= 8){
    console.log("Estudiante destacado!")
} else {
    console.log("Estudiante regular")
}
