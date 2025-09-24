/* 

condicionales 

son estructuras de control que permiten ejecutar diferentes bloques de código según una condición (verdadera o falsa).

    if

    evalua una condición y si es verdadera, ejecutan el bloque de código dentro de sus llaves.

    sintaxis: 
    if (condicion) {
        //bloque o código que se ejecuta
    }

*/

let edad = 18;

if(edad>=18){
    alert("!Eres mayor de edad date¡ 😘")
}

/* 

else

    permite ejecutar un bloque de código si la condicion es falsa.

    sintaxis:

    if(condicion){
    //codigo que se ejecutasi la condicion es verdadera
    } else{
    //codigo que se ejecutasi la condicion es falsa
    }
*/

let hora = 16;

if (hora<12){
    console.log("Buenos días solecito! 🐔")
} else {
    console.log("Buenas tardes chifurimpulo! 🐠")
}

/* 

else if

nos permite tener más de una condicion a ser evaluada, esta evcaluacion es una secuencia, si una condicion es verdadera se ejecuta su bloque de codigo

sintaxis:

if(condicion){
//codigo que se ejecuta si es verdadera
} else if(condicion2) {
 //codigo que se ejecuta si la anterior es falsa y esta es verdadera
} else {
 //si ninguna de las anteriores es verdadera
}

*/

let calificacion = 4;
if(calificacion>=9){
console.log("Eres un excelente programador¡ 😎")
} else if(calificacion>=7) {
console.log("Ahí la llevas, ya casi te sale¡ 👍")
} else if(calificacion>=5){
 console.log("Echale más ganitas o nos vemos en el extra¡ 👨‍🦲")
} else {
console.log("Ya valio barriga, bienvenido al extra¡ 💅")
}