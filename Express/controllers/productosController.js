
const productos = [ 
    { id: 1, nombre: "Telefono", precio: 500 }, 
    { id: 2, nombre: "Tablet", precio: 800 },
];

export const obtenerProductos = (req, res) => res.json(productos);

export const agregarProductos = (req, res) => {
    const nuevoProducto = req.body;
    productos.push({ ...nuevoProducto, id: productos.length + 1 });
    res.status(201).send("Producto agregado");
};
