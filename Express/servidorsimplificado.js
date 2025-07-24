import express from "express";
//const express = require ("express");
//let frutas = ["manzana", "banana", "naranja"];
const app = express();

app.use(express.json());

app.use ((req,res,next) =>  {
    console.log(`${req.method}- ${req.url}`);
    next();
    
}
);

app.get("/", (req,res)=>  {
    res.send ("Hola soy express");
}
);
app.get("/about", (req,res)=>  {
    res.send ("Esta es la pagina Acerca de ");
}
);
app.get("/contact", (req,res)=>  {
    res.send ("Nombre: Maria  Correo:contactenos@gmail.com");
}
);

app.get("/services", (req,res)=>  {
    res.send ("Ofrecemos desarrollo web y consultoria tecnologica");
}
);

app.get("/products", (req,res)=>  {
    res.send ("Product 1, Product 2, Product 3");
}
);

app.get("/api/saludo", (req,res) => {
    res.send({mensaje: "Hola, bienvenido a nuestra API RESTFUL "});
});

app.get("/api/productos/:categoria/:id", (req,res) => {
    const {categoria,id} =req.params;
    res.send(`Producto Categoria: ${categoria}, ID:${id}`);
});

app.get("/api/busqueda", (req,res) => {
    const { q } = req.query;
    res.send(`Resultado de busqueda para: ${q}`);
});

app.post("/api/productos", (req,res) => {
    const  producto  = req.body;
    res.send ( `Producto recibido ${producto.nombre}, Precio:${producto.precio} `);
});


app.listen(4000, ()=> {
    console.log("Servidor Escuchando en http://localhost:4000");

});



