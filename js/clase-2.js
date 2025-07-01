/*
* Crea un algoritmo utilizando un ciclo 

** Consigna.

*** Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

*** Aspectos a incluir
**** Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.

*** Sugerencias
**** Usamos la instrucción for para repetir un número fijo de veces. Mientras que usamos while cuando queremos repetir algo hasta que se deje de cumplir una condición.

*** Ejemplo
**** Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
**** Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
**** Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
*/

// pedir numero mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado hasta que se ingresa "ESC"

// let entrada = prompt("Ingresá un número o ESC para salir")

// while (entrada !== "ESC") {
//   let numero = Number(entrada)

//   if (!isNaN(numero)) {
//     let incremento = Math.floor(Math.random() * 10) + 1
//     let resultado = numero + incremento
//     console.log(`Ingresaste: ${numero} + ${incremento} = ${resultado}`)
//   } else {
//     console.log("Entrada inválida. Ingresá un número o ESC.")
//   }

//   entrada = prompt("Ingresá un número o ESC para salir")
// }

// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa "ESC"

// let entrada = prompt("Ingrese un adjetivo o 'ESC' para salir")
// let nombre = "Matías"

// while (entrada !== "ESC" && entrada !== null) {
//   console.log(`${nombre} es: ${entrada}`)
//   entrada = prompt("Ingrese una adjetivo o 'ESC' para salir")
// }

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces

let entrada = prompt(
  "Ingrese un número positivo, lo ideal seria 3 pero hace lo que quieras"
);
let i = 0;

if (entrada === null || isNaN(entrada) || entrada <= 0) {
  console.log(
    "Entrada inválida. Debe ser un número positivo. Por eso lo cambiamos a 3"
  );
  entrada = 3;
}

for (i = 0; i < entrada; i++) {
  console.log("Pugliese");
}
