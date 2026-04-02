const express = require('express');
const path = require('path');
const { getRandomFrase } = require('./frases');

const app = express();

// Variable en memoria para el contador de visitas
let contador = 0;

// Array en memoria para almacenar mensajes
let mensajes = [];

// Motor de vistas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para parsear cuerpo de formularios JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz
app.get('/', (req, res) => {
  contador++;
  res.render('index', { title: 'Página Principal', contador });
});

// Ruta /acerca
app.get('/acerca', (req, res) => {
  res.render('acerca', { title: 'Acerca de' });
});

// Ruta /contacto
app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

// Ruta /encuesta (GET: mostrar formulario)
app.get('/encuesta', (req, res) => {
  res.render('encuesta', { title: 'Encuesta' });
});

// Ruta /encuesta (POST: procesar formulario)
app.post('/encuesta', (req, res) => {
  const { lenguaje } = req.body;
  res.render('encuesta-resultado', { title: 'Resultado Encuesta', lenguaje });
});

// Ruta /mensajes (GET: mostrar formulario y mensajes acumulados)
app.get('/mensajes', (req, res) => {
  res.render('mensajes', { title: 'Mensajes', mensajes });
});

// Ruta /mensajes (POST: agregar mensaje)
app.post('/mensajes', (req, res) => {
  const { mensaje } = req.body;
  if (mensaje) {
    mensajes.push(mensaje);
  }
  res.redirect('/mensajes');
});

// Ruta API /api/productos (devuelve JSON)
app.get('/api/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, descripcion: 'Laptop potente para trabajo' },
    { id: 2, nombre: 'Mouse', precio: 25, descripcion: 'Mouse inalámbrico ergonómico' },
    { id: 3, nombre: 'Teclado', precio: 80, descripcion: 'Teclado mecánico RGB' },
    { id: 4, nombre: 'Monitor', precio: 300, descripcion: 'Monitor 4K de 27 pulgadas' }
  ];
  res.json(productos);
});

// Ruta /productos (sirve la página HTML)
app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

// Ruta /frases (sirve la página HTML)
app.get('/frases', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'frases.html'));
});

// Ruta API /api/contacto (procesa POST con fetch)
app.post('/api/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;
  if (!nombre || !mensaje) {
    return res.status(400).json({ error: 'Nombre y mensaje son requeridos' });
  }
  const respuesta = {
    mensaje: `Gracias, ${nombre}. Hemos recibido tu mensaje: "${mensaje}". Te responderemos pronto.`
  };
  res.json(respuesta);
});

// Ruta /frase (devuelve frase aleatoria en JSON)
app.get('/frase', (req, res) => {
  const fraseAleatoria = getRandomFrase();
  res.json({ frase: fraseAleatoria });
});

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});