import express from "express";
const app = express();

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
    res.send ("contactanos en contactenos@gmail.com");
}
);

app.get("/services", (req,res)=>  {
    res.send ("Ofrecemos desarrollo web y consultoria tecnologica");
}
);

app.listen(4000, ()=> {
    console.log("Servidor Escuchando en http://localhost:4000");

});



