const promesa =new Promise((resolve, reject) => {
const exito =true; //simula si la operacion tiene exito o no.
    setTimeout(() => {
        if (exito) {
            resolve("!Operacion exitosa!");
        }else { 
            reject("Hubo un error");
        }
    },2000);//Espera 2 segundos
});
promesa 
.then((resultado) => console.log(resultado))//Operacion exitosa
.catch((error) => console.error(error))//Maneja el error
.finally(() => console.log("Operacion finalizada!"));

//operacion con .then/.catch
fetch("https//jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error:" ,error));

//conversion a async/await
async function obtenerDatos () { 
    try {
        const responde = await fetch ("https//jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error ("Error:", error);
    }
}
obtenerDatos();










