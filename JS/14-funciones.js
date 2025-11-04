/* 

funciones

son bloques de codigo reutilizables que realizan una tarea en especifico

1. funcion declarada
    Es la forma mas comun de definir funciones. Se puede llamar a la función antes de su definición debido al hoisting, es decir, se "elevan" en el contexto de ejecución.

    sintaxis:

    function nombreFunction(){
    //Curpo de la función
    ...
    }

    llamada:

    nombreFunction()
*/

saludar();

function saludar(){
    console.log("¡Hola nariz de bola!");
}

/* 

2. función expresada (anónimas)
    Se asignan a una variable. No puede ser llamada antes de su definición.

    sintaxis:

    const nombeConstante = function() {
        //Cuerpo de la función
        ...
    }

    llamada:

    nombreConstante();

*/

const despedir = function() {
    console.log("¡Adiós vaquero!")
}

despedir();

/* 

3. función flecha (arrow function)
    Tienen una sintaxis más copnsisas, son utiles para ejecuciones cortas. Generalmente se asignan a una variable

    sintaxis:

    const nombreConstante = () => {
        //Cuerpo de la función
        ...
    }

    llamada:

    nombreConstante();

*/

 const mensaje = () => {
        console.log("¡SOS, Ya me muero de hambre!")
    }

mensaje();

/* 

parametros y argumentos

las funciones pueden aceptar parametros para que reciban datos cuando son llamados

sintaxis:

function nombreFuncion(parámetros1, parametro2, ...) {
    //Cuerpo de la función
    ...
}

llamada:

nombreFuncion(argumento1, argumento2);

*/

function sumar(num1, num2) {
    console.log(`El resultado de la suma es: ${num1 + num2}`)
}

sumar(2,3);
sumar(245,674);
sumar(.45,.76);
sumar(5646234623646723466742,328756832533465445624);

function saludito(nombre) {
    console.log(`Hola ${nombre}`)
}

saludito("Esteban");
saludito("Diego");
saludito("Chris");
saludito("Danna");

/* 

parametros por defecto

en las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la función

sintaxis:

funtion nombreFuncion (parametro1 = valorDefault) {
    //Cuerpo de la funcion
    ...
}

llamada:

nombreFuncion(); //usa los valores por defecto
nombreFuncion(argumento1); //usa el valor del argumento

*/

const multiplicar = function(num1 = 1, num2 = 2) {
 console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`)
}

multiplicar();
multiplicar(8,5);
multiplicar(10,46);


/* funcion dando una bienvenida al usuario personalizado y que se muestre un mensaje de invitado si no se tiene el nombre del usuario */

const bienvenida = (usuario = "invitado") => {
    if(usuario == "invitado") {
        console.log("Registrate o continua como invitado")
    } else {
        console.log(`Bienvenido ${usuario}`)
    }
}

bienvenida();
bienvenida("Julio");
bienvenida("Sherry");
bienvenida("Josh");

/* 

valor de retorno

las funciones pueden devolver un valor utilizando la palabra "return"

sintaxis:

function nombreFuncion() {
    //Cuerpo de la funcion
    ...
    return valor;
}

llamada:

const nombreConstante = nombreFuncion();

*/

function despedida(nombre = "Colette") {
    return `Adios ${nombre}`
}

const resultado = despedida("Antonio");
console.log(resultado);

/* 

return implicito

las funciones flecha no necesita la palabra return en su estructura más simple (una sola linea)

sintaxis:

const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultadoResta = restar(10-5);

console.log(resultadoResta)