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
