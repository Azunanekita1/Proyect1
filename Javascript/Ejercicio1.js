
let nombre = "María";
const edad = 27;
let esEstudiante = true;

console.log ("Nombre:", nombre);
console.log ("Edad:", edad);
console.log("¿Es estudiante?", esEstudiante); 

let numero1= 10;
let numero2 = 5;

console.log ("Suma:", numero1 + numero2);
console.log ("Resta:", numero1 - numero2); 

//Estructuras de control

let edad1 = 20;
if (edad1 >= 18 ) {
console.log ("Es mayor de Edad");
} else {
    console.log("Es menor de edad");
}
//Otro ejercicio con &&

let edad2 =14;
if (edad2 >= 18) {
    "entra hasta el final";
} else if (edad2 >= 15 && edad2 <18) {
    "entra hasta las 11:00pm";
} else{
    "no puede ingresar";
}

//Bucles - Ciclos

for (let i = 0; i < 5; i++) { 
console.log ("Numero: ", i);
} 

// numero 0, (inicializa),1,2,3,4,5.

let i= 0;
while (i < 5) {
    console.log ("NUmero:", i);
    i++;
}

// numero 0, (inicializa),1,2,3,4
//4 

//do {
// while ();

//Estructura de datos debe ser con un mismo tipo de dato.
let nombres = ["Ana","Pablo", "Luis","Maria"];
for (let i=0; i < nombres.length;i++){
    console.log("Nombre:", nombres[i]);
}
// Nombre: Ana
// Nombre: Pablo
//Nombre: Luis
// Nombre: Maria

//Funciones 
function sumar(a,b) { 
    return a + b;
}
let resultado =sumar(3,4);
console.log("Resultado de la suma:", resultado);






