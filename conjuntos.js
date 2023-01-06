// - Un nuevo Set con los nombres de tu familia

let familia = ["Jose","Ramon","Ronald","America", "Raquel","Andreina","Erika","Ingrid","Teresa"];

let nuevoSet = new Set(familia);
console.log(nuevoSet);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

nuevoSet.add("Jose");
console.log(nuevoSet);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

nuevoSet.add("Javascript");
console.log(nuevoSet);