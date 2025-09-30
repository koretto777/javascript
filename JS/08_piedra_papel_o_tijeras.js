/* 

Juego piedra papel o tijera 

Crear un juego interactivo para el usuario donde este puede jugar contra la computadora. 

Reglas : 

- piedra vence a tijera
- tijera vence a papel
- papel vence a piedra
- si ambos eligen el mismo es empate 

Pasos a emplear: 

- Definir las opciones del jugador 
- generar una opción aleatoria para la computadora. 
- Comparar estas opciones y determinar el ganador
- mostrar el resultado 


Estructuras a utilizar: 

- Variables
- Generación de un número aleatorio (math.random)
- operciones lógicas 
- concatenación de cadenas (strings)
- Comentarios


*/


// 1. Variables  -  Opciones del jugador

const opcionJugador = prompt("para jugar escribe: piedra, papel o tijera"); //piedra,papel o tijera

// 2. Opción de la computadora
const numeroAleatorio = Math.random(); // esta función genera un número aleatorio entre 0 y 1 

let opcionComputadora;

// 3. Condicional - Asignamos opción según el número 
if (numeroAleatorio < 0.33){
    opcionComputadora = "piedra";
} else if (numeroAleatorio < 0.66) {
    opcionComputadora = "papel";
} else {
    opcionComputadora = "tijera";
}

// 4. Mostrar las elecciones 
console.log("piedra,papel o tijera");
console.log("tu elección es: " + opcionJugador);
console.log("la compu eligió: " + opcionComputadora);
console.log("-------------------------------------")


// Determinar el ganador a partir de codicionales 

let resultado;

if (opcionJugador === opcionComputadora) {
    resultado = `¡EMPATE! AMBOS ELIGIERON ${opcionJugador}`;
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") {
    resultado = `GANASTE, piedra vence a tijera`;
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
    resultado = `GANASTE, papel vence a piedra`;
} else if (opcionJugador === "tijera" && opcionComputadora === "papel") {
    resultado = `GANASTE, tijera vence a papel`;
} else {
    resultado = "PERDISTE, la compu te ganó";
}

// 6. Mostramos el resultado 

console.log(resultado);