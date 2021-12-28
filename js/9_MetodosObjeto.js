// "use strict"; // Correr JS en modo estricto, aparece el mensaje de error al querer agregar una propiedad a un objeto que se encuentra en freeze


const producto = {
    nombreProducto: "Audifonos gamer",
    precio: 300,
    disponible: true
}

// Freeze - no permite agregar nuevas propiedas y no permite que sea modificado ni eliminar
// Object.freeze(producto);


// Permite solamente modificar los valores existentes
Object.seal(producto);

producto.precio = 'NUEVO PRECIO';



console.log(Object.isFrozen(producto));


console.log(producto);