const http = require("http");
const fs = require("fs"); //Libreria o modulo 

const servidor = http.createServer((req,res) => {
    if (req.url === "/") { 
        fs.readFile("index.html", (err, data ) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error interno del servidor");
            } else {
            //res maneja la salida
            res.writeHead(200,{"Content-Type": "text/html"}); //respuesta positiva del servidor 200
          //  res.writeHead(200,{"Content-Type": "text/css"});
            res.end(data);
            }
        }
    );
} else if (req.url === "/style.css") { 
    //servir el archivo cc
        fs.readFile("style.css", (err, data ) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Archivo no encontrado");
            } else {
            //res maneja la salida
            res.writeHead(200,{"Content-Type": "text/css"}); //respuesta positiva del servidor 200
            res.end(data);
            }
});



//manejar cualquier otra cosa
} else {
    res.writeHead(404, {"Content-Type": "text/css" });
    res.end(data);
}
});
servidor.listen(4000, ( )=> {
    console.log("Servidor escuchando en http://localhost:4000");
});


//node servidor.js se ejecuta en la consola
//ctrl + c para pararlo en la consola.


