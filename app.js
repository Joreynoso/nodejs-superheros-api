// --> importar módulo express
import express from 'express';

// Crear instancia de express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola, Mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Sevidor corriendo en http://localhost:${PORT}`);

});

// Express, rutas básico
// Ruta GET para el home de la página
// Solicitud http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Página de inicio');
});

// Ruta GET para recibir datos simples
// Solicitud http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('Datos, recibidos');
});

// --> Ruteo con parametros
// Solicitud http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID ${userId}`);
});

// --> Ruteo con multiples parametros
// Solicitud http://localhost:3000/products/electronics/456
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Categoria ${category} ID del producto ${id}`);
});

// --> Ruteo con parametro de consulta (URL)
// Solicitud http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultado de la busqueda para ${query}`);
});

// --> Ruteo con multiples parametros de consulta
// Solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

/*

--> Express

Ruteo Básico: Se usa cuando la ruta siempre devuelve la misma respuesta, sin importar parámetros o consultas.
Ruteo con Parámetros (req.params): Se usa cuando la URL necesita valores dinámicos, como un ID de usuario o categoría en la ruta.
Ruteo con Consultas (req.query): Se usa cuando se necesitan datos opcionales en la URL, como filtros, búsquedas o paginación.

*/