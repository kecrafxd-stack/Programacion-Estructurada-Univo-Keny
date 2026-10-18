function suma(n){
    if(n <= 0){
        return 0
    }

    return n + suma(n-1)
}

let pan = suma(5)
console.log(pan)