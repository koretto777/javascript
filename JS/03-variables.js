/* 
Variables -> son contenedores que almacenan datos. En JS se puede declarar variables utilizando la spalabras clave "var", "let" o "cons".

1. Declaración de variables
    var -> Es la forma más antigua de declarar variables. Tiene un alcance global o de función y puede ser redeclarada y actualizada.
    let -> Introducciona en ES6, este tiene un alcance de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance.
    const -> Tambien introducida en ES6 tiene un alcance de bloque y no puede ser ni redeclarada ni actualizada. Se utiliza para valores que no debe cambiar.
    */

/* Declaración con var */

var nombre = "Colette";
console.log(nombre) // Colette

nombre = "Puchunguito"; //Actualización

/* Declaración con let */

let edad = 21;
console.log(edad);

edad = 18; //Actualización
console.log(edad);

/* Declaración con const */

const PI = 3.1416;
console.log(PI);

PI = 4.6701; //Error de tipo . No se puede actualizar una constante.
