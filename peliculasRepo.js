class Pelicula {
    id =0;
    titulo = '';
    anioEstreno = 0;

    constructor(id, titulo, anioEstreno){
        this.id= id;
        this.titulo= titulo;
        this.anioEstreno=anioEstreno;
    }

    
}

class RepoPelicula {

    insert(pelicula){
        
    }
    getById (id){
        return new Pelicula(3,"el señor de los anillos", 2000);
    }

}
let pelis = new RepoPelicula();
module.exports.repo = pelis;
module.exports.Pelicula = Pelicula;