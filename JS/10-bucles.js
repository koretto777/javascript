/* 

Bucles

estructuras de control que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición específica 

los más comunes en JS son for, while y do... while

1. Bucle for
    se utiliza cuando sabemos cuantas veces queremos repetir un bloque de codigo. La sintaxis es:

    for (inicialización ; condición; incremento) {
        //codigo que se va a repetir su ejecución
        ...
    }

inicializacion -> variable con un valor inicial 
condición -> se evalua una expresion si es true se ejecuta el bucle 
incremento -> aumenta el valor de la variable en cada interacción

*/


for (let i = 0; i < 10; i++) {
    console.log("Repetición " + i + ": Oye Cucú, papá se fue!");
}

/* 

2. bucle while
    se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de código, pero si queremos que se repita mientras una condición es verdadera.

    la sintaxis es: 

    inicialización

    while() {
    // codigo que se repite su ejecución
    incremento
    }
*/

let j = 0; //inicialización

while (j < 5) {
// codigo a ejecutar en bucle
console.log("Otro buclesito :)");
j++; //incrementar
}

/* 

3. Bucle do... while

Es similar al while, pero garantiza que el bloque de  código se ejecute al menos una vez. Ya que la condición se evalua después de la ejecución.
Sintaxis:

inicialización

do {
// código que se ejecuta al mnenos 1 vez
} while (condición);
*/

let k = 5;

do {
    console.log("Twice tus patronas!");
    k++;
} while (k < 5);