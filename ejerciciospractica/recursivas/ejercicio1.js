function sumarRango(inicio, fin){
    if(inicio>fin) return 0;

    return inicio + sumarRango(inicio+1, fin)
}

function contarPares(n, contador){
    if(n<=1) return contador;

    if(n % 2 == 0){
        contador++
        return contarPares(n-1, contador)
    } else {
        return contarPares(n-1, contador)
    }
}

function contarParesNC(n){
    if(n<=1) return 0;

    if(n % 2 == 0){
        return 1 + contarParesNC(n-1)
    } else {
        return contarParesNC(n-1)
    }
}

console.log(contarParesNC(4))