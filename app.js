const express = require('express');
const path = require('path');
const app = express();

// Motor de vistas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para parsear cuerpo de formularios JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz
//app.get('/', (req, res) => {
//  res.render('index', { title: 'Página Principal' });
//});

// Ruta /acerca
app.get('/acerca', (req, res) => {
  res.render('acerca', { title: 'Acerca de' });
});

// Ruta /contacto
app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

// Ruta POST para /contacto (manejar el formulario)
app.post('/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.render('resultado', { title: 'Contacto - Enviado', nombre, mensaje });
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