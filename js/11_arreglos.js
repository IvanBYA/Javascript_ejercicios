// Arreglos o Arrays

// 1er forma de crear un array
const numeros = [1,2,3,4,5]

// 2da forma de crear un array
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

// Se pueden agregar datos de distintos tipos, hasta objetos
const arreglo = ["1904345",18,82233222,{Nombre: "Ivan", Apellido: "Benavides"},'Direccion']


        // console.table(numeros);
        // console.table(meses);
        // console.table(arreglo);


// Mostrar todos los datos dentro de un array
console.log(numeros);


// Acceder a un dato dentro de un arreglo
console.log(numeros[0]);
console.log(numeros[2]);


// Conocer la extension de un arreglo

console.log("lenght: " + meses.length);


// Recorre los elementos de un array

numeros.forEach( function(cont) {
    console.log(cont)
});