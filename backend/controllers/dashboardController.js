const dashboardModel = require('../models/dashboardModel');

async function getDashboard(req, res) {
  try {
    const [stats, stockPorCategoria, estadoStock, movimientosSemana, top5Valor, alertas] = await Promise.all([
      dashboardModel.getStats(),
      dashboardModel.getStockPorCategoria(),
      dashboardModel.getEstadoStock(),
      dashboardModel.getMovimientosSemana(),
      dashboardModel.getTop5Valor(),
      dashboardModel.getAlertas(),
    ]);

    res.json({
      stats: {
        totalMedicamentos: stats.total_medicamentos,
        stockCritico:      stats.stock_critico,
        stockBajo:         stats.stock_bajo,
        porVencer:         stats.por_vencer,
        valorInventario:   parseFloat(stats.valor_inventario || 0).toFixed(2),
      },
      stockPorCategoria: stockPorCategoria.map(r => ({ categoria: r.categoria, stock: r.stock })),
      estadoStock:       estadoStock.map(r => ({ estado: r.estado, total: r.total })),
      movimientosSemana,
      top5Valor:         top5Valor.map(r => ({ nombre: r.nombre, valor: parseFloat(r.valor) })),
      alertas,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getDashboard };
