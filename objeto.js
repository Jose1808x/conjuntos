
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const jose = {
    nombre: "Jose",
    apellido: "Rodriguez",
    edad: 30,
    altura: 1.68,
    eresDesarrollador: true 
}

// - Una variable que obtenga tu edad a partir del objeto anterior

let edadJose = "edad";
console.log(jose[edadJose]);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

let nuevaLista = [
    {...jose},
    {nombre: "Carlos", apellido: "Zuñiga", edad: 34, altura: 1.72, eresDesarrollador: false},
    {nombre: "Samir", apellido: "Carril", edad: 29, altura: 1.70, eresDesarrollador: false},
]
console.log(nuevaLista)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let amigos = nuevaLista.sort((a,b) => a.edad - b.edad);
console.log(amigos);