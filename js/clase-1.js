// Variables y tipos de datos en JavaScript

let numero = 210;
let decimal = 3.14;
let buleana = true;
let texto = "Hola, mundo!";

console.log(numero + " es un número");
console.log(decimal + " es un número decimal");
console.log(buleana + " es un booleano");
console.log(texto + " es un texto");

// Operadores aritméticos
let suma = 5 + 3;
let resta = 10 - 2;
let multiplicacion = 4 * 2;
let division = Resto;
let resto = 10 % 3;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Resto: " + resto);

// Concatenación de cadenas
let saludo = "Hola";
let nombre = "Matías";
let mensaje = saludo + ", " + nombre + "!";
console.log(mensaje);

// Template literals
let edad = 30;
let presentacion = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(presentacion);

// Operadores de comparación
// dos signos de igual (==) para comparar valores,
// tres signos de igual (===) para comparar valores y tipos,
// y el signo de exclamación seguido de un igual (!=) para comparar desigualdad.
// También se utilizan los operadores mayor que (>), menor que (<), mayor o igual que (>=) y menor o igual que (<=).

let a = 5;
let b = 10;
console.log("a es igual a b: " + (a === b));
console.log("a es diferente de b: " + (a !== b));
console.log("a es mayor que b: " + (a > b));
console.log("a es menor que b: " + (a < b));
console.log("a es mayor o igual que b: " + (a >= b));
console.log("a es menor o igual que b: " + (a <= b));

// Operadores lógicos
let x = true;
let y = false;
console.log("x AND y: " + (x && y));
console.log("x OR y: " + (x || y));
console.log("NOT x: " + !x);
