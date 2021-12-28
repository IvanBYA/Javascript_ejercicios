// Arreglos o Arrays

// 1er forma de crear un array
const numeros = [1,2,3,4,5]

// 2da forma de crear un array
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

// Agregamos un elemento en cierta posicion, si está posicion está ocupada se sobreescribe
numeros[5] = 6;

numeros.push(60); // Agregamos un  elemento al final del arreglo
numeros.push(70);
numeros.push(80,90,100);


numeros.unshift(40,50); // Agregamos un  elemento al inicio del arreglo
numeros.unshift(10,20,30); 

// meses.push("Mayo","junio")


// meses.pop(); // Elimina el ultimo elemento del arreglo
// meses.shift(); // Elimina el primer elemento del arreglo


// Eliminar un elemento/s de un array
// Primer valor - que posicion se va a eliminar
// Segundo valor - cuantos quieres eliminar despues de ahi
meses.splice(4,1);


console.log(numeros);
console.table(meses);


// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Mayo'];

console.log(nuevoArreglo);