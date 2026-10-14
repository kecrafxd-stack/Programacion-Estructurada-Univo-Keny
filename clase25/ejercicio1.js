function mostrarNumeros(numero) {

    if (numero <= 5) {

        console.log(`Número: ${numero}`);

        mostrarNumeros(numero + 1);
    }
}

mostrarNumeros(1);