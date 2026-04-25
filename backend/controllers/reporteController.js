const reporteModel = require('../models/reporteModel');

async function getResumen(req, res) {
  try {
    const [data, porCategoria] = await Promise.all([
      reporteModel.getResumen(),
      reporteModel.getPorCategoria(),
    ]);

    res.json({
      totalProductos:    data.total_productos,
      valorInventario:   parseFloat(data.valor_inventario || 0).toFixed(2),
      valorVenta:        parseFloat(data.valor_venta || 0).toFixed(2),
      gananciaEstimada:  parseFloat(data.ganancia_estimada || 0).toFixed(2),
      productosCriticos: data.productos_criticos,
      productosBajo:     data.productos_bajo,
      porVencer:         data.por_vencer,
      porCategoria,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getResumen };
