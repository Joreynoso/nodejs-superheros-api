// --> importar módulo FileSystem
import fs from 'fs';

// Clase para representar un superheroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {

        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    };
};

export function leerSuperheroes(ruta) {

    // --> Constante que dirige a la ruta donde está el objeto literal con los superheroes
    const datos = fs.readFileSync(ruta, 'utf8');
    const arraySuperheroes = JSON.parse(datos);

    // --> Convertir instancias de la clase Superheroe
    const mapSuperheroes = arraySuperheroes.map(
        hero => new Superheroe(
            hero.id,
            hero.nombreSuperheroe,
            hero.nombreReal,
            hero.nombreSociedad,
            hero.edad,
            hero.planetaOrigen,
            hero.debilidad,
            hero.poder,
            hero.habilidadEspecial,
            hero.aliado,
            hero.enemigo
        )
    );

    // Ordenar por nombre de superheroe
    mapSuperheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return mapSuperheroes;

    // // ordenar por edad Mayor a menor
    // mapSuperheroes.sort((a, b) => a.edad - b.edad);
    // return mapSuperheroes;

    // // ordenar por edad Menor a mayor
    // mapSuperheroes.sort((a, b) => b.edad - a.edad);
    // return mapSuperheroes;
};

// --> Función para agregar un superheroe
export function agregarSuperheroes(rutaOriginal, rutaNueva) {

    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf-8');
    const datosNuevos = fs.readFileSync(rutaNueva, 'utf8');

    const superheroeOriginales = JSON.parse(datosOriginales);
    const superheroesNuevos = JSON.parse(datosNuevos);

    // --> Convertir instancias de la clase Superheroe
    const instanciaNuevos = superheroesNuevos.map(
        hero => new Superheroe(
            hero.id,
            hero.nombreSuperheroe,
            hero.nombreReal,
            hero.nombreSociedad,
            hero.edad,
            hero.planetaOrigen,
            hero.debilidad,
            hero.poder,
            hero.habilidadEspecial,
            hero.aliado,
            hero.enemigo
        )
    );

    // --> Combinar las listas (originales, con nuevos), usando spreadoperator
    const listaActualizada = [...superheroeOriginales, ...instanciaNuevos];

    // --> Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');

    console.log('Lista Actuaalizada con Exito!');
};

// Filtrar superheroes por planeta 
export function filtrarPlaneta(ruta, planeta) {

    try {

        const datos = fs.readFileSync(ruta, 'utf8'); //--> ruta del json con superheroes
        const arraySuperheroes = JSON.parse(datos);

        // Una vez capturado los datos procedemos a filtrar por planeta
        const superHeroesFiltrados = arraySuperheroes.filter(e => e.planetaOrigen === planeta);

        // Retornar el arreglo filtrado por planetas
        return superHeroesFiltrados;

    } catch (error) {

        console.log('Error al leer o procesar el archivo');
        return [];
    }

}

// Filtrar y devolver superheroes solo algunos atributos
export function filtrarBasico(ruta) {

    const datos = fs.readFileSync(ruta);
    const arraySuperheroes = JSON.parse(datos);

    const superHeroesFiltrados = arraySuperheroes.map(({ nombreReal, nombreSociedad, edad, planetaOrigen }) => {

        return `nombre: ${nombreReal}, sociedad: ${nombreSociedad}, edad: ${edad}, planeta: ${planetaOrigen}`

    });

    return superHeroesFiltrados;

};