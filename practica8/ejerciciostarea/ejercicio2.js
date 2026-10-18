import readlineSync from "readline-sync";

const areaCirculo = (r) => Math.PI * Math.pow(r, 2);
const perimetroCirculo = (r) => 2 * Math.PI * r;

const areaCuadrado = (l) => Math.pow(l, 2);
const perimetroCuadrado = (l) => 4 * l;

const areaRectangulo = (b, h) => b * h;
const perimetroRectangulo = (b, h) => 2 * (b + h);

const areaTriangulo = (b, h) => (b * h) / 2;
const perimetroTriangulo = (l1, l2, l3) => l1 + l2 + l3;

console.log("=== TAREA 2: FIGURAS GEOMÉTRICAS ===\n");
console.log("1) Circulo");
console.log("2) Cuadrado");
console.log("3) Rectangulo");
console.log("4) Triangulo");

const figura = parseInt(readlineSync.question("\nSeleccione la figura: "));
console.log("");

switch (figura) {
    case 1:
        const r = parseFloat(readlineSync.question("Radio: "));
        console.log(`Area: ${areaCirculo(r).toFixed(2)}`);
        console.log(`Perimetro: ${perimetroCirculo(r).toFixed(2)}`);
        break;
    case 2:
        const l = parseFloat(readlineSync.question("Lado: "));
        console.log(`Area: ${areaCuadrado(l).toFixed(2)}`);
        console.log(`Perimetro: ${perimetroCuadrado(l).toFixed(2)}`);
        break;
    case 3:
        const bRect = parseFloat(readlineSync.question("Base: "));
        const hRect = parseFloat(readlineSync.question("Altura: "));
        console.log(`Area: ${areaRectangulo(bRect, hRect).toFixed(2)}`);
        console.log(`Perimetro: ${perimetroRectangulo(bRect, hRect).toFixed(2)}`);
        break;
    case 4:
        const bTri = parseFloat(readlineSync.question("Base del triangulo: "));
        const hTri = parseFloat(readlineSync.question("Altura del triangulo: "));
        const l1 = parseFloat(readlineSync.question("Medida del lado 1: "));
        const l2 = parseFloat(readlineSync.question("Medida del lado 2: "));
        const l3 = parseFloat(readlineSync.question("Medida del lado 3: "));
        console.log(`Area: ${areaTriangulo(bTri, hTri).toFixed(2)}`);
        console.log(`Perimetro: ${perimetroTriangulo(l1, l2, l3).toFixed(2)}`);
        break;
    default:
        console.log("Opcion no valida.");
        break;
}
console.log("\n");