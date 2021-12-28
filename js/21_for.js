// For Loop

// Primer valor - agregamos desde donde va iniciar cont/i
// Segundo valor - asignamos la condicion
// tercer valor - como va a ir aumentando
for(let i = 0; i < 10; i+= 2) {
    console.log(i);
}


for(let i = 0; i <= 10; i+= 1) {
    if ( i % 2 === 0) {
        console.log(`El Número ${i} es PAR`);
    } else {
        console.log(`El Número ${i} es IMPAR`);
    }
}


const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 100},
    {nombre: 'Television 55 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 600},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Teclado', precio: 1100},
    {nombre: 'Mouse', precio: 100}
];



for(let cont = 0; cont < carrito.length; cont++) {
    // Recorrer cada propiedad
    console.log(carrito[cont]);
    // Recorrer cada propiedad
    console.log(carrito[cont].nombre);
}

// While Loop

let i = 0;

while(i < 10) {
   console.log("Hola");
   i++ 
}

