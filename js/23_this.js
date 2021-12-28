// This - hace referencia a cada uno de los objetos ue se tienen en el arreglo

// objeto reservacion {}
const reservacion = {
    // Propiedades del objeto
    nombre: 'Ivan',
    apellido: 'Benavides',
    total: 6500,
    pagado: true,
    // los objetos pueden tener funciones
    informacion: function(){
        console.log(`El cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
    }
}

const reservacion2 = {
    // Propiedades del objeto
    nombre: 'Pedro',
    apellido: 'Lopez',
    total: 8700,
    pagado: false,
    // los objetos pueden tener funciones
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();