const pool = require('../db/connection');

const ROLE_MENUS = {
  admin:    ['dashboard','medicamentos','inventario','notificaciones','reportes','analytics','usuarios'],
  farmacia: ['dashboard','medicamentos'],
  jefatura: ['dashboard','inventario','notificaciones','reportes','analytics'],
};

async function findByCredentials(username, password) {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE username = ? AND password = ? AND estado = "Activo"',
    [username, password]
  );
  return rows[0] || null;
}

async function findAll() {
  const [rows] = await pool.execute(
    'SELECT id, username, role, name, role_label, email, estado, created_at FROM users ORDER BY id'
  );
  return rows;
}

async function getEstado(id) {
  const [[row]] = await pool.execute('SELECT estado FROM users WHERE id = ?', [id]);
  return row || null;
}

async function updateEstado(id, nuevoEstado) {
  await pool.execute('UPDATE users SET estado = ? WHERE id = ?', [nuevoEstado, id]);
}

module.exports = { findByCredentials, findAll, getEstado, updateEstado, ROLE_MENUS };
