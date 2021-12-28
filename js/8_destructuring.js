// Objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Guardamos el valor de la propiedad precio del objeto producto.
// Forma anterior

// Creo la variable y extraigo el valor

        // const precioProducto = producto.precio;
        // const nombreProducto = producto.nombre;



        // console.log(precioProducto);
        // console.log(nombreProducto);



// Destructuring - extraigo el valor de las propiedades del objeto individualmente y las muestro en consola
// Cada una
        // const {precio} = producto;
        // const {nombre} = producto;

// Solo una

const {precio,nombre} = producto;

console.log(precio);
console.log(nombre);