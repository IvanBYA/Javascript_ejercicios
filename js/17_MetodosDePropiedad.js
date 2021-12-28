const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar: function() {
        console.log("Pausando...")
    },
    crearUnPlaylist: function(id) {
        console.log(`Creando la playlist: ${id}`)
    }
}

// Agregamos una propiedad al metodo
reproductor.borrarCancion = function(id) {
    console.log(`Eliminado la cancion: ${id}`)
}


reproductor.crearUnPlaylist("Heavy Metal");
reproductor.borrarCancion(20);
reproductor.reproducir(3840);
reproductor.pausar();