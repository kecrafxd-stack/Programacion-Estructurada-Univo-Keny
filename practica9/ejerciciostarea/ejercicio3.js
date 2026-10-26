import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(cadena) {
    if (cadena.length === 0) {
        return 0;
    }
    let primeraLetra = cadena[0].toLowerCase();
    let esVocal = "aeiouáéíóú".includes(primeraLetra) ? 1 : 0;
    return esVocal + contarVocales(cadena.substring(1));
}

function invertirCadena(cadena) {
    if (cadena.length === 0) {
        return "";
    }
    return invertirCadena(cadena.substring(1)) + cadena[0];
}

function esPalindromo(cadena) {
    if (cadena.length <= 1) {
        return true;
    }
    if (cadena[0].toLowerCase() !== cadena[cadena.length - 1].toLowerCase()) {
        return false;
    }
    return esPalindromo(cadena.substring(1, cadena.length - 1));
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    let textoLimpio = texto.replace(/\s+/g, "");

    console.log("Cantidad de vocales:", contarVocales(texto));
    console.log("Cadena invertida:", invertirCadena(texto));
    console.log("¿Es palindromo?:", esPalindromo(textoLimpio) ? "Si" : "No");

    rl.close();
});