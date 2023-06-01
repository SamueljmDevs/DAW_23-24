console.log("Documentos Avariables.js");
//--- Esto es un comentario
/*
--- Esto es un comentario de bloque
*/
//--- Formas de declarar variables
//--- (tipo de variable) [nombre de la variable] = {valor de la variable};
var nombre = "Pache";
let apellido = "Devs";
const edad = 29;

//--- Las variables solo pueden empezar por letra, _ o por $

console.log(nombre, apellido, edad);

/*
var y let pueden declarar la variable y luego aparte inicializarla.
*/
var variable1;
let variable2;
console.log(variable1, variable2);
//---
variable1 = 1;
variable2 = 4;
console.log(variable1, variable2);

variable1 = "uno";
variable2 = "cuatro"
console.log(variable1, variable2);

//--- const se tienen que declarar e inicializar obligatoriamente a la vez
const variable3 = 20;
console.log(variable3);

//--- variable3 = 21; No daría error pero no es correcto, no se puede reasignar
//--- Podemos modificar la variable, que no reasignar
const actividades =["baloncesto", "futbol","tenis"];
console.log(actividades);
actividades.push("ajedrez");
console.log(actividades);