const Name = "CocaCola";
const price = 0.75;
let cantidad = 3;

//Mostrando el nombre en MAYUSCULAS
console.log(Name.toUpperCase())

//Primeras 3 letras
console.log(Name.slice(0,3));

//Total
let total = price * cantidad;

//Precio total con dos decimales
console.log(total.toFixed(2))
