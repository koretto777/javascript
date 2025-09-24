/* 

concatenacion  de cadena de texto
es el proceso de univer dos o más cadenas de texto en una sola 
esto se hace utilizando el operador + o las plantillas literales (template strings) se usan con backticks `` (acento invertido o comillas agudas)

*/

let miNombre="Colette";
let miApellido="De Angel";

//usando el operador +

let nombreCompeto = miNombre + " " + miApellido;

console.log(nombreCompeto);

//usando plantillas literales

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${7*3} años`;

console.log(nombreNuevo);

/* 

si se utiliza el operador + con valores numericos, se suman. Pero si se usa con cadenas de caracter se concatenan.

*/

let resultado=5+10;
console.log(resultado); //15

let resultadoDos="5"+10;
console.log(resultadoDos); //510