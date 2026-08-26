const birthYear = 2008;

//Creacion de el obj Date
let date = new Date;
const actYear = date.getFullYear();

//Calculando edad
let age = actYear - birthYear;

//Mostrando al usuario
console.log(`Tu edad aproximada es: ${age} años`)
