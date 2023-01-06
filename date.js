//trabajando con fechas

let fecha = new Date(2023, 0, 06);
console.log(fecha);

//Cada numero representa  año, mes, dia, hora, minuto,segundos

let fechaDos = new Date(1999, 05, 17, 1, 40, 30);
console.log(fechaDos);

//tambien se puede representar la fecha en milisegundos tanto positivos como negativos

let fechaTres = new Date(10000000000000);
console.log(fechaTres);

/*tambien podemos definir fechas a traves de strings */

let fechaCuatro = new Date("August 18, 1992 00:40:20");
console.log(fechaCuatro);

//se pueden comparar las fechas

console.log(fecha > fechaDos);

// pero no son iguales dos fechas

fechaCinco = new Date(2023, 0, 06, 1, 40, 30);

console.log(fechaDos === fechaCinco)//ERROR

//para comparar dos fechas iguales podemos convertirlas primero en milisegundos

//con el metodo .getTime() esto es posible

console.log(fechaDos.getTime() === fechaCinco.getTime());

//para obtener el dia de una fecha podemos usar el getDate();

console.log(fechaDos.getDate());

// para obtener el mes debemos usar el metodo getMonth() (enero 0 - diciembre 11)

console.log(fechaDos.getMonth() + 1);

//y para obtener el año usamos el getFullYear()

console.log(fechaDos.getFullYear());

//para mostrar una fecha en string se hace con .toLocaleDateString()

console.log(fechaDos.toLocaleDateString());



