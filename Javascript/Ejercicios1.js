const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio,2);

//usar filter para obtener numeros mayores a 5 de un array.

const nombre = "Juan";
const edad =  20;
const mensaje =  `Hola, ${nombre}. Tienes ${edad} años`;
console.log(mensaje);

// TEMPLATE STRINGS 
const producto = "Laptop";
const precio = 1.900;
const html= `<div>
<h2> Producto: ${producto} </h2>
<p> Precio: ${precio} </p>
</div>`;
console.log(html);

//ACTIVIDAD JAVASCRIPT
const nombre1 = "Andres";
const ciudad = "Dubai";
const mensaje1= 
` <h2> Hola ${nombre1} bienvenido a ${ciudad} </h2>`;
console.log(mensaje1);

// DESTRUCTURING
//Objeto
const producto1 = {nombre2: "Tablet", valor: 300, disponible: true};
const {nombre2, valor} = producto1;
console.log(`producto: ${nombre2}, Precio: ${valor}`);
//Array
const colores = ["rojo","verde","azul"];
const [primero, , tercero]= colores;
console.log(primero,tercero);

//ACTIVIDAD PRACTICA 

const personas = {persona1: "Juan", año1: 1998, persona2:"Maria", año2: 1996,persona3:"Andrea", año3:1950};
const {año1, año2, año3} = personas;
console.log(`Estos son los años que nacieron las personas ${año1}, ${año2}, ${año3}`);

const numeros = [2,3,4,5,6];
const [dos,tres,cua,cin,six]= numeros;
console.log(dos,tres,cua,cin,six);

//SPREAD Y REST

const persona4 = {nombres:"Ana",Edad: 25};
const direccion = {ciudad:"Lima",pais:"Peru"};
const perfil ={...persona4,...direccion};
console.log(perfil);




























