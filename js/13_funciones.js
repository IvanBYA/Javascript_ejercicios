// Declaracion de Funcion

function sumar() {
    console.log(10 + 10);
};

sumar();

// Expresión de la función
sumar2();
const sumar2 = function() {
    console.log(3+3);
};


// IIFE - funciones que se invocan ellas mismas,
// sirven para que no se mezclen las variables de otros archivos


(function() {
    console.log('Esto es una función tambien')
})();