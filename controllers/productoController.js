const Producto = require('../models/Producto');

exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

exports.getById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al obtener producto' });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ mensaje: 'Error al crear producto' });
  }
};