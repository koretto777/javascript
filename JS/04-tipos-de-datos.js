/* 
Tipos de datos
Los tipos de datos son una clasificacion de los diferentes valores que podemos manejar en un lenguaje de programación.
En JS existen varios tipos que se pueden agrupar en dos categorías principales: primitivos y complejos u objetos.
Cada tipo de dato tiene sus propias características y usos específicos en la programación.

1. Primitivos

datos básicos que no se consideran "objetos" y no tien "métodos"

number o número
Reperesentan valore numéricos ya sea de enteros o decimales (plunto flotante)

String o cadena de caracteres
Representan texto. el texto se colocaentre commilas dobles o simples: texto texto. Se valen las dos, pero hay que ser consistentes

Boolean o booleans
representan un valor lógico que pueden ser "true" o "false"

underfined o indefinido
Es el valor que se asigna a una variable que ha sido declarada pero no inicializada

null o nulo
representa la asusncia intencional de cualquier valor u objeto. es un tipo de dato que indica que una variable no tiene ningun valor asignado.
*/

/* numbers */
let miNumero = 7; //enteros
let miNumeroDecimal = 3.3; //decimales

console.log(miNumero);
console.log(miNumeroDecimal);

/* String */

let miNombre = 'Colette';
let miApellido = 'De Angel';

console.log(miNombre);
console.log(miApellido);

/* Booleans */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* underfined */

let aprobarDesarrolloApps ; //inicializar una variable
console.log(aprobarDesarrolloApps);

/* null */

let meQuiere = null;
console.log(meQuiere);

/* 

2. Complejos o de objetos

array o arreglo
es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos de los arreglos se escriben entre [] y separado por comas

object u objeto
es un conjunto de multiplos datos en pares ' clave'=' valor' se escriben entre {} y separados por comas

funtions o funciones
es un tipo de dato que puede ser invocado. se declaran con la palabra reservada funtion y el código que se ejecuta va entre {}
*/

/* arrays */

let misSeries = ['anne with an e','greys anatomy','sex in the city'];
let misNumeros = [7,4,3,13,6];
let tutifruti = ['Puchunguito',7,true];

console.log(misSeries [2]); //sex in the city
console.log(misNumeros [3]); //13
console.log(tutifruti [1]); //7

/* object */

let perro = {
    nombre: 'firulais',
    edad: 5,
    color: "negro",
    ladra: true,
    muerde: false,
}

console.log( perro.nombre );
console.log( perro.edad );
console.log( perro.color );

/* functions */

function saludar(){
    //codigo a ejecutar
    console.log("Hola mamá, estoy aprendiendo JS")
};

//llamamos a la función
saludar();