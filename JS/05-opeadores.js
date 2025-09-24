/* 

operadores

son simbolos que le indican al interprete que debe realizarse una operación matemática, lógica o relacional y producir un resultado.

Operadores aritmeticos

se utilizan operaciones matematicas básicas como la suma, resta, division y multiplicación

+ suma
- resta
* multiplicación
/ división
% módulo (residuo de una divición)
++ incremento (suma uno al valor)
-- decremento (resta uno al valor)

operadores de asignación

estos operadores se utilizan para asignar valores a las variables

= asignación
+= suma y asigna
-= resta y asigna
*= multiplica y asigna
/= divide y asigna
%= módulo y asigna

operadores de comparación

estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true or false)

== igualdad (compara solo el valor)
=== igualdad estricta (compara el valor y el tipo)
! desigualdad (compara solo si el valor es distinto)
!! desigualdad estricta (calcula el vlor y el tipo)
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que

operadores lógicos

se utilizan para combinar expresiones booleanas

&& AND (y) si ambos vaores son verdaderos, el resultado es verdadero. Si al menos un valor es falso, el resultado es falso
|| OR (o) si al menos un valor es verdadero, el resultado es verdadero. Solo si ambos valores son falsos, el resultado es falso
! NOT (no) niega el valor. El resultado es el valor contrario al que se esta negando

*/

let a = 10;
let b = 5;

a+b; //Expresión

console.log(a+b); //15
console.log(a-b); //5
console.log(a*b); //50
console.log(a/b); //2
console.log(a%b); //0
a++; //11
console.log(a);
b--; //4
console.log(b);


let c =20
c+=5; //25
c-=10; //15
c*=2; //30
c/=3; //10
c%=3; //1
console.log(c);


let d = 10; //number
let e = "10"; //string

console.log(d==e); //true
console.log(d===e); //false 
console.log(d!=e); //false
console.log(d>5); //true
console.log(d<15); //true
console.log(d>=10); //true
console.log(d<=5); //false


let f = true;
let g = false;

console.log(f && g); //false
console.log(f || g); //true
console.log(!f); //false
console.log(!g); //false

