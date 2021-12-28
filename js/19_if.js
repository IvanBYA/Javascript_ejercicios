const puntaje = 1000;

if (puntaje === 1000) {
    console.log("Si, el puntaje es 1000");
} else {
    console.log("No, es igual")
}

let efectivo = 1000,
    carrito = 1000;

if (efectivo < carrito) {
    console.log("Fondos insuficientes")
} else {
    console.log("Fondos correctos")
}

let rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log("Eres editor, puedes entrar pero no puedes hacer mucho")
} else {
    console.log("No tienes acceso")
}