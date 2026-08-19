let kilowatts = 456;
let kilowattPrice = 0.15;

let costoBase = kilowatts*kilowattPrice;
let impuesto = costoBase*0.10;
let total = costoBase+impuesto;

console.log(`Consumo: ${kilowatts} kWh \nCosto sin impuesto: $${costoBase.toFixed(2)} \nImpuesto (10%): $${impuesto.toFixed(2)} \nCosto total a pagar: $${total.toFixed(2)}`)