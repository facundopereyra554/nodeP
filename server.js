const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Configura CORS con opciones y manejo de errores personalizado
const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu aplicación React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

app.post('/enviar-formulario', (req, res) => {
  const formData = req.body;
  // Aquí puedes procesar los datos del formulario como lo desees
  console.log('Datos del formulario recibidos:', formData);
  res.status(200).send('Formulario enviado con éxito');
});

// Manejo de errores de CORS
app.use((err, req, res, next) => {
  if (err) {
    res.status(403).json({ error: 'Acceso no autorizado debido a CORS.' });
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
