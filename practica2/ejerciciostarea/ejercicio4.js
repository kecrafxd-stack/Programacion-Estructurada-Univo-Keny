//Crear objeto date;
const date = new Date;
const fecha = date.getDate();
const mes = date.getMonth()
const year = date.getFullYear();

const hora = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

//Consologear
console.log(`Hoy es ${date.toLocaleDateString()} y son las ${hora}:${minute}:${seconds}`);