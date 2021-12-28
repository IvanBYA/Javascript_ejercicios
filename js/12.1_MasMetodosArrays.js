// Array Methods

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 100},
    {nombre: 'Television 55 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 600},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Teclado', precio: 1100},
    {nombre: 'Mouse', precio: 100}
];

// forEach - recorre cada elemento

meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log("Marzo si existe");
    }
});

// Includes - comprobar si un elemento existe
let resultado = meses.includes('Marzo');


// Some - ideal para arreglos de objetos - encuentra el objeto dentro del arreglo y dice true or false
resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Teclado'
});


// Reduce - Suma el total de cada uno de los productos dentro del objeto del array
resultado3 = carrito.reduce(function(total,producto){
    return total + producto.precio
}, 0);

// Filter - encuentra las propiedades por objeto dentro de un array

resultado4 = carrito.filter(function(producto){
    return producto.precio > 400
});


console.log("Some:" + resultado2);
console.log("reduce: " + resultado3);
console.log(resultado4);