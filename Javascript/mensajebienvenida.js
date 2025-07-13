const nombre = document.getElementById("nombre").value;
const ciudad = document.getElementById ("ciudad").value;

let mensaje = document.getElementById("mensaje");
mensaje.textContent = ` Hola! ${nombre} bienvenido a ${ciudad} `;

mensaje.addEventListener("submit", (Event)) { 
    Event.prevent
}


