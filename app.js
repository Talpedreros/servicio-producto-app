require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Datos de ejemplo
const calzadoDeportivo = [
  {
    id: 1,
    nombre: 'Nike Air Max',
    descripcion: 'Zapatillas cómodas para correr y uso diario.',
    marca: 'Nike',
    precio: 120,
    imagen: '/img/airmax.jpg'
  },
  {
    id: 2,
    nombre: 'Adidas Ultraboost',
    descripcion: 'Zapatillas de alto rendimiento para running.',
    marca: 'Adidas',
    precio: 140,
    imagen: '/img/ultraboost.jpg'
  },
  {
    id: 3,
    nombre: 'Puma RS-X',
    descripcion: 'Zapatillas modernas y versátiles.',
    marca: 'Puma',
    precio: 110,
    imagen: '/img/rsx.jpg'
  },
  {
    id: 4,
    nombre: 'Reebok Classic',
    descripcion: 'Estilo retro y comodidad para todos los días.',
    marca: 'Reebok',
    precio: 95,
    imagen: '/img/classic.jpg'
  },
  {
    id: 5,
    nombre: 'New Balance 574',
    descripcion: 'Diseño clásico y soporte superior.',
    marca: 'New Balance',
    precio: 105,
    imagen: '/img/574.jpg'
  },
  {
    id: 6,
    nombre: 'Asics Gel-Kayano',
    descripcion: 'Zapatillas para corredores exigentes.',
    marca: 'Asics',
    precio: 130,
    imagen: '/img/gelkayano.jpg'
  },
  {
    id: 7,
    nombre: 'Under Armour HOVR',
    descripcion: 'Tecnología HOVR para máxima amortiguación.',
    marca: 'Under Armour',
    precio: 125,
    imagen: '/img/hovr.jpg'
  },
  {
    id: 8,
    nombre: 'Nike Revolution',
    descripcion: 'Ligereza y flexibilidad para entrenamientos.',
    marca: 'Nike',
    precio: 80,
    imagen: '/img/revolution.jpg'
  },
  {
    id: 9,
    nombre: 'Adidas NMD',
    descripcion: 'Estilo urbano y comodidad premium.',
    marca: 'Adidas',
    precio: 150,
    imagen: '/img/nmd.jpg'
  },
  {
    id: 10,
    nombre: 'Puma Suede',
    descripcion: 'Clásico atemporal para cualquier ocasión.',
    marca: 'Puma',
    precio: 90,
    imagen: '/img/suede.jpg'
  },
  {
    id: 11,
    nombre: 'Reebok Zig Kinetica',
    descripcion: 'Diseño innovador y energía en cada paso.',
    marca: 'Reebok',
    precio: 115,
    imagen: '/img/zigkinetica.jpg'
  },
  {
    id: 12,
    nombre: 'New Balance Fresh Foam',
    descripcion: 'Amortiguación superior para largas distancias.',
    marca: 'New Balance',
    precio: 135,
    imagen: '/img/freshfoam.jpg'
  },
  {
    id: 13,
    nombre: 'Asics GT-2000',
    descripcion: 'Estabilidad y soporte para corredores.',
    marca: 'Asics',
    precio: 120,
    imagen: '/img/gt2000.jpg'
  },
  {
    id: 14,
    nombre: 'Under Armour Charged',
    descripcion: 'Rendimiento y comodidad en cada entrenamiento.',
    marca: 'Under Armour',
    precio: 100,
    imagen: '/img/charged.jpg'
  },
  {
    id: 15,
    nombre: 'Nike Zoom Pegasus',
    descripcion: 'Versatilidad y respuesta rápida.',
    marca: 'Nike',
    precio: 125,
    imagen: '/img/pegasus.jpg'
  },
  {
    id: 16,
    nombre: 'Adidas Supernova',
    descripcion: 'Comodidad y soporte para largas distancias.',
    marca: 'Adidas',
    precio: 130,
    imagen: '/img/supernova.jpg'
  },
  {
    id: 17,
    nombre: 'Puma Future Rider',
    descripcion: 'Estilo retro y tecnología moderna.',
    marca: 'Puma',
    precio: 95,
    imagen: '/img/futurerider.jpg'
  },
  {
    id: 18,
    nombre: 'Reebok Nano',
    descripcion: 'Zapatillas para entrenamiento funcional.',
    marca: 'Reebok',
    precio: 110,
    imagen: '/img/nano.jpg'
  },
  {
    id: 19,
    nombre: 'New Balance 997',
    descripcion: 'Diseño icónico y materiales premium.',
    marca: 'New Balance',
    precio: 140,
    imagen: '/img/997.jpg'
  },
  {
    id: 20,
    nombre: 'Asics Gel-Nimbus',
    descripcion: 'Máxima amortiguación para corredores.',
    marca: 'Asics',
    precio: 145,
    imagen: '/img/gelnimbus.jpg'
  }
];

// Obtener todos los calzados deportivos
app.get('/calzado', (req, res) => {
  res.json(calzadoDeportivo);
});

// Obtener un calzado por ID
app.get('/calzado/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const calzado = calzadoDeportivo.find(item => item.id === id);
  if (calzado) {
    res.json(calzado);
  } else {
    res.status(404).json({ mensaje: 'Calzado no encontrado' });
  }
});

// Agregar un nuevo calzado deportivo
app.post('/calzado', (req, res) => {
  const nuevoCalzado = req.body;
  nuevoCalzado.id = calzadoDeportivo.length + 1;
  calzadoDeportivo.push(nuevoCalzado);
  res.status(201).json(nuevoCalzado);
});

app.listen(PORT, () => {
  console.log(`API de calzado deportivo escuchando en http://localhost:${PORT}`);
});