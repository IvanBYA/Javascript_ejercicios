// Objetos

const producto = {
    // Propiedades del objeto
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// Acceder a una propiedad

console.log(producto.disponible);
console.log(producto["disponible"]);


// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';


// Eliminar propiedades

delete producto.disponible;

console.log(producto)