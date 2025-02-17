// --> importar superheroes
import fs from 'fs';
import { leerSuperheroes, agregarSuperheroes, filtrarPlaneta, filtrarBasico } from './utils.mjs'
// Rutas de superheroes
const archivoOriginal = './superheroes.txt';
const archivoNuevo = './superheroesNuevos.txt';

// Seleccionar un planeta
const planeta = 'Tierra';

// Comprobar que la ruta original exista
fs.readFile(archivoOriginal, 'utf-8', (err) => {
    if (err) throw err;
    console.log('El archivo original es valido!');
});

// Comprobar que la rueta nueva exista
fs.readFile(archivoNuevo, 'utf8', (err) => {
    if (err) throw err;
    console.log('El archivo nuevo es valido!');
});

// // --> Agregar los nuevos superhores
// agregarSuperheroes(archivoOriginal, archivoNuevo)

// --> leer la lista de superheroes
const listaSuperheroes = leerSuperheroes(archivoOriginal);
console.log('Desde función Utils.mjs', listaSuperheroes);

// --> filtrar por planeta
console.log('Filtrados por planeta:', planeta);
console.log(filtrarPlaneta(archivoOriginal, planeta));

// --> filtrar con destructuring
console.log('Filtradors con destructuring básico');
console.log(filtrarBasico(archivoOriginal));
