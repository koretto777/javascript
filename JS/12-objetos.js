/* 

objetos

son colecciones de propiedades. una propiedad es una asociación entre un nombre (clave o key) y un valor (value).

Los valores pueden ser distintos tios de números, cadenas de texto, boleanos, arreglos, funciones...

Sintaxis:

nombreObjeto = {
    //Propiedades
    Key1 : value,
    Key2 : value,
    Key3 : value,
}

*/

const persona = {
    nombre: "Colette",
    apellido: "De Angel",
    edad: 21,
    esInvitado: true,
    mounstros: ["Pumpking Head", "Wolf man", "Frankenstein"],

// this es una palabra reservada ue autoreferencia el objeto
    saludar: function(){
        console.log("hola mi nombre es " + this.nombre + " y me gusta " + this.mounstros[0])}
}

console.log(persona)

/* acceder a las propiedades de un objeo utilizamos la notacion de punto o corchetes */

console.log(persona.nombre);
console.log(persona["apellido"])

//concatenamos valores

console.log("Hola mi nombre es " + persona.nombre + "" + persona.apellido + " y tengo " + persona.edad + "años!")

//plantillas

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años!`)

//hacemos el booleano

console.log(persona.esInvitado);

if(persona.esInvitado == true) {
    console.log("Puede pasar y disfrutar del Halloween de Enfoco")
} else {
    console.log("No puedes pasar, regresate a tu casita")
}

//acceder al array

console.log(persona.mounstros[0]);

//Reto 2Mostrar por consola: Hola soy Colette De Angel y tengo 21 amos e iré l halloween disfrazado de wolf man.

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e iré disfrazado al halloween de ${persona.mounstros[2]}`)

/* 

metodos de un objeto

funciones que estan asociadas a un objeto, se pueden llamar utilizando la notación de punto.

objeto.metodo()

*/

persona.saludar(); 

//undefined
console.log(persona.saludar());
