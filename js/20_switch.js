const metodoPago = "tarjeta";

switch(metodoPago) {
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("Se pago con cheque");
        break;
    default: 
        console.log("Aun no has pagado")
        break;
}