// Cree una función de orden superior llamada crearMultiplicador que reciba un número 
// (el factor) y devuelva una nueva función que multiplique cualquier número por ese 
// factor. Luego, cree un "duplicador" (factor 2) y un "triplicador" (factor 3), y 
// pruebe ambas funciones con un número para mostrar los resultados.

function crearMultiplicador(factor){
    return function (x){
        return x * factor;
    }
}

//La cojonuda funcion crearMultiplicador agarra el factor y retorna una funcion anonima que recibe un valor y lo multiplica por el factor que le dimos

const duplicador = crearMultiplicador(2) //en duplicador se guarda la funcion donde el factor es 2
const triplicador = crearMultiplicador(3) // en triplicador se guarda la funcion donde el factor es 3


console.log("4 x 2 = " + duplicador(4)) // aca duplicador recibe el 4 como x y lo multiplica por el factor que es 2 (x * factor => 4 * 2 => 8)
console.log("5 x 3 = " + triplicador(5)) // lo mismo de arriba pero con 3 alv
