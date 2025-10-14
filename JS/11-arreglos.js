/* 

arreglos
acolección de datos, es decir, una lista de elementos.
en JS se definen con corchetes [] y los elementos internos se separan por comas
pueden contener el mismo tipo de dato o diferentes tipos, incluso pueden contener arreglos anidados
*/

let frutas = ["Manzanas", "Sandias", "Piñas", "Peras", "kiwis"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Colette", 21, true];
let coordenadas = [[1,2,3],[4,5,6],[7,8,9]];

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 

Propiedad lengtht nos indica la cantidad de elementos que tenemos dentro del arreglo

*/

console.log(frutas.length); // cantidad de datos
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas.length);

/* 

indice nos indica la "posición" del elemento dentro del arreglo 
para acceder a los elementos fr un arreglo utilizamos un indice. Los arreglos siempre comienzan con el indice 0 y se coloca el valor en corchetes []

*/

console.log("Mi fruta favorita es; " + frutas [3]);
console.log("Con Limon saque " + calificaciones [2] + " de calificación!");
console.log("Mi nombre es " + misDatos [0] + " y tengo " + misDatos [1] + "años!");
console.log("El siguiente dato esta en un arreglo anidado: " + coordenadas [1][2]);

/* 

metodos de los arreglos

push() -> agrega uno o más elementos al final del arreglo
pop() -> elimina el ultimo elemento del arreglo y lo devuelve
shift() -> elimina el primer elemento del arreglo y lo devuelve
unshift() -> arregla 1 o más elementos al inicio del arreglo
indexof() -> devuelve el índice del primer elemento que coincida con el valor especificado o regresa -1 si no encuentra nanais

*/

console.log(frutas.length); //5

frutas.push("Uvas" , "Papayas");

console.log(frutas.length); //7

let ultimaFruta = frutas.pop();

console.log(frutas.length); //6
console.log(ultimaFruta); //papaya

let primeraFruta = frutas.shift();

console.log(frutas.length); //5
console.log(primeraFruta); //manzana

frutas.unshift("Maracuyas" , "Fresas", "Mangos");
console.log(frutas.length); //8

let indiceFruta = frutas.indexOf("Piñas");
console.log(indiceFruta);

/* 

Iteración sobre arrays

Tomamos una lista de datos y accedemos a sus datos, a traves de un bucle

*/

frutas.unshift("Pitajayas", "Moras")

for(i = 0; i < frutas.length; i++) {
    console.log("Se me anotojo un@s"+ frutas[i]);
}