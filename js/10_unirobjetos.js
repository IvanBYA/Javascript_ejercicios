// "use strict"; // Modo JS estricto


const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Unir 2 objetos
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(medidas);

console.log(nuevoProducto);
