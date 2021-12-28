// Otra forma de declarar funciones

// Arrow Functions

const sumar2 = (n1,n2) => {
    console.log(n1 + n2);
}

const sumar1 = (n1,n2) => console.log(n1 + n2);

sumar2(10,20);
sumar1(10,100);

// Estructura basica para crear un arrow function
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("Javascript");


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

meses.forEach(mes  => {
    if(mes == 'Marzo') {
        console.log("Marzo si existe");
    }
});

// Some - ideal para arreglos de objetos - encuentra el objeto dentro del arreglo
resultado1 = carrito.some(producto => {
    return producto.nombre === 'Teclado'
});


// Reduce
resultado2 = carrito.reduce((total,producto) => {
    return total + producto.precio
}, 0);

console.log(resultado1);
console.log(resultado2);

// Filter

resultado = carrito.filter(producto => producto.precio > 400);


console.log(resultado);