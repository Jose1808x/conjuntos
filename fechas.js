// - La fecha de hoy

let dia = new Date();
console.log(dia);

// - La fecha de tu nacimiento

let nacimiento = new Date(1992, 07, 18, 12, 40,20);
console.log(nacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let comp = dia.getTime() > nacimiento.getTime();
console.log(comp);

// - Una variable que contenga el día de tu nacimiento

let date = nacimiento.getDate();
console.log(date);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let month = nacimiento.getMonth() + 1;
console.log(month);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let year = nacimiento.getFullYear();
console.log(year);