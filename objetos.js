//Trabajando con objetos

let usuario = {
    nombre: "Juan",
    apellido : "Gonzalez",
    isDeveloper : true,
    libroFav : "Game of Thrones",
    "4-juegos": [1,2,3,4]
}

//para acceder a los valores de esas propiedades se puede hacer lo siguiente:

console.log(usuario.nombre);
console.log(usuario["nombre"]);

//tambien se pueden acceder a propiedades a traves de variables declaradas anteriormente

let prop = "apellido";
console.log(usuario[prop]);

/*Si se desea duplicar un objeto se debe tener cuidado ya que si almacenamos un objeto en otro
se copiara, pero tambien se cambiara el espacio en memoria del primer objeto creado, asignandose
el primer objeto al espacio del objeto dos. lo veremos a continuacion: */

//tenemos que al segundo objeto le asignamos "los valores del primero"

let objetoDos = usuario;

//al mostrarlo en pantalla se muestran efectivamente los valores del primer objeto.

console.log(objetoDos)

//pero si se procede a cambiar una propiedad del segundo objeto. 

objetoDos.nombre = "Pedro";

//en pantalla se muestra efectivamente que se cambio el valor de nombre de Juan a Pedro

console.log(objetoDos.nombre);

//pero si vemos el objeto usuario, notamos que tambien cambio su valor

console.log(usuario.nombre);

/*entonces ahora tenemos que se modifico el nombre en ambos objetos cuando solo queriamos modificarlo en el objeto numero 2*/

/*para modificar el valor de un objeto sin afectar al principal debemos usar mejor el metodo de propagacion {...objx} */

/*con este metodo vemos que acababamos de copiar o duplicar el valor del objeto numero 1 */

let objetoTres = {...usuario};

console.log(objetoTres);

/*pero si decidimos cambiar el valor de una propiedad del objeto nuevo,
se puede notar que solo se modifica la propiedad de ese objeto sin afectar al objeto de origen */

objetoTres.nombre = "Jose Antonio";

/*como se ve en pantalla se modifico el nombre del objetoTres de Pedro a Jose Antonio */

console.log(objetoTres.nombre);

/*si ahora mostramos la propiedad nombre del objeto usuario, notamos que sigue siendo Pedro,
notando asi que no afecta en lo absoluto el cambio de propiedad del objetoTres. */

console.log(usuario.nombre);

let peliculas = [
    {pelicula: "Titanic", anyo: 2000},
    {pelicula: "Lo que el viento se llevo", anyo: 1995},
    {pelicula: "Efecto mariposa", anyo: 2004},
    {pelicula: "Moana", anyo: 2016},
    {pelicula: "Iron-Man", anyo: 2006},
]
console.log(peliculas);

//con el metodo .sort() se puede modificar el mutar el valor de la lista original y ordenarla

peliculas.sort((a, b)=> a.anyo - b.anyo);

/*al mostrar el pantalla se observa que ordeno la lista por años partiendo del año mas mas bajo */
console.log(peliculas)
