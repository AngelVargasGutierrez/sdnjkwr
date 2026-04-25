const pool = require('../db/connection');

function fmtFecha(dateVal) {
  if (!dateVal) return '';
  const d = new Date(dateVal);
  return `${String(d.getUTCDate()).padStart(2,'0')}/${String(d.getUTCMonth()+1).padStart(2,'0')}/${d.getUTCFullYear()}`;
}

async function findAll() {
  const [rows] = await pool.execute(
    'SELECT id,codigo,nombre,laboratorio,lote,stock,stock_min,costo_unit,precio_venta,vencimiento,r_sanitario,estado,categoria FROM medicamentos ORDER BY nombre'
  );
  return rows.map(m => ({
    id:          m.id,
    codigo:      m.codigo,
    nombre:      m.nombre,
    laboratorio: m.laboratorio,
    lote:        m.lote,
    stock:       m.stock,
    stockMin:    m.stock_min,
    costoUnit:   parseFloat(m.costo_unit),
    precioVenta: parseFloat(m.precio_venta),
    vencimiento: fmtFecha(m.vencimiento),
    rSanitario:  m.r_sanitario,
    estado:      m.estado,
    categoria:   m.categoria,
  }));
}

async function getTotales() {
  const [[row]] = await pool.execute(`
    SELECT
      COUNT(*) AS total,
      SUM(CASE WHEN estado='Crítico' THEN 1 ELSE 0 END) AS criticos,
      SUM(CASE WHEN estado='Bajo'    THEN 1 ELSE 0 END) AS bajos,
      SUM(CASE WHEN vencimiento IS NOT NULL AND vencimiento <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) AS por_vencer
    FROM medicamentos
  `);
  return row;
}

module.exports = { findAll, getTotales };
