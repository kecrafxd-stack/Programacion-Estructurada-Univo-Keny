import readlineSync from "readline-sync";

const contarVocales = (cadena) => {
    const coincidencias = cadena.match(/[aeiouáéíóúü]/gi);
    return coincidencias ? coincidencias.length : 0;
};

const invertirCadena = (cadena) => {
    return cadena.split("").reverse().join("");
};

const esPalindromo = (cadena) => {
    const textoLimpio = cadena.toLowerCase().replace(/[^a-z0-9áéíóúü]/g, "");
    const textoInvertido = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoInvertido;
};

console.log("=== TAREA 3: MANEJO DE CADENAS ===\n");

const texto = readlineSync.question("Ingrese una palabra o frase: ");

console.log(`\nCantidad de vocales: ${contarVocales(texto)}`);
console.log(`Cadena invertida: ${invertirCadena(texto)}`);
console.log(`¿Es palíndromo?: ${esPalindromo(texto) ? "Sí" : "No"}`);