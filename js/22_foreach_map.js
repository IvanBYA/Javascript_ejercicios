const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 100},
    {nombre: 'Television 55 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 600},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Teclado', precio: 1100},
    {nombre: 'Mouse', precio: 100}
];


carrito.forEach(function(producto) {
    console.log(producto);  
    console.log(producto.nombre); 
    console.log(producto.precio); 
});

// ForEach - para iterar y mostrar los resultados. 
carrito.forEach( producto => {
    console.log(producto.nombre);
});

// map - cuando quiero crear un nuevo arreglo



const arreglo2 =  carrito.map(producto => console.log(producto.precio));