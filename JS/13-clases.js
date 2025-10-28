/* 

clases

Son una forma de definir objetos, sus propiedades y métodos creando un protoyipo del cual se generará varios objetos, heredando su comprtamiento.

Los nombres de las clases comienzan con mayúscula

sintaxis

class NombreObjeto{
    //uyilizamos el método constructor especial para inicializar objetos.

    constructor(prop1, prop2){
    this.key = prop1;
    this.key = prop2;
    }
}

*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

/* 

crear instancias de la clase

vamos a rear una nueva constancia con la siguiente sintaxis

const nombreConstante = new NombreClase(prop1, prop2)

*/

const persona1 = new Persona("Juanito", 24);
const persona2 = new Persona("María", 22);
const persona3 = new Persona("Pablo", 23);

/*  mostramos objetos por consola */

console.log(persona1)
console.log(persona2)
console.log(persona3)

//accedemos a los datos

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}.`)
console.log(`Ella es ${persona2.nombre} y tiene ${persona2.edad}.`)
console.log(`El es ${persona3.nombre} y tiene ${persona3.edad}.`)



class Persona {

//metodo constructor
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

// otro metodo
    saludar() {
    alert(`Hola soy ${this.nombre} y tengo ${this.edad} años!`)
}
}

const persona1 = new Persona(Yukio, 21);
const persona2 = new Persona(Yuki, 20);
const persona3 = new Persona(Kio, 22);

console.log(El es ${persona1.nombre} y tiene ${persona1.edad});
console.log(El es ${persona2.nombre} y tiene ${persona2.edad});
console.log(El es ${persona3.nombre} y tiene ${persona3.edad});

persona1.saludar();
persona2.saludar();
persona3.saludar();

