require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const productoRoutes = require('./routes/producto');
const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rutas de producto (usa controllers vía routes)
app.use('/calzado', productoRoutes);

app.listen(PORT, () => {
  console.log(`API de calzado deportivo escuchando en http://localhost:${PORT}`);
});