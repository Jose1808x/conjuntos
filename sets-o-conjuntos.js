//sets o conjuntos

let arreglo = [1,2,3,4,5,6,1,2, "hola", {id : 5}];

console.log(arreglo);

let nuevoSet = new Set(arreglo);

/*La diferencia entre un set y un array es que los sets
nunca permitiran almacenar en ellos valores que ya existen exceptuando los objetos
que asi tengan atributos iguales son diferentes objetos.*/

console.log(nuevoSet);

// .add() este metodo sirve para agregar elementos

nuevoSet.add(9);
console.log(nuevoSet);

//.delete() este metodo elimina valores dentro del conjunto

nuevoSet.delete(4);
console.log(nuevoSet);

nuevoSet.delete("hola");
console.log(nuevoSet);

//.clear() este metodo elimina todo el conjunto

//nuevoSet.clear();

//.has() este metodo se utiliza para saber si en el conjunto existe un valor

console.log(nuevoSet.has(5));

//el metodo .has() Funciona como el metodo includes() en los array.

console.log(arreglo.includes(2));

// .size es una  propiedad con la que podemos conocer cual es el tamaño de este conjunto.

console.log(nuevoSet.size);

// los conjuntos se pueden iterar con un forEach.

nuevoSet.forEach(valor =>{
    console.log(valor);
})

// para obtener los valores del conjunto se puede hacer de dos maneras

//una es con el el objeto iterator;

let conjunto = nuevoSet.values()
console.log(conjunto);

// y la otra es convirtiendo el set en un array con el factor de propagacion

let arrayDos = [...nuevoSet];
console.log(arrayDos);
