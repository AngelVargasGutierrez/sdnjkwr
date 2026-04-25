const userModel    = require('../models/userModel');
const reporteModel = require('../models/reporteModel');

async function getAll(req, res) {
  try {
    const [usersRaw, historial] = await Promise.all([
      userModel.findAll(),
      reporteModel.getHistorial(),
    ]);

    const users = usersRaw.map(u => ({
      id:        u.id,
      username:  u.username,
      role:      u.role,
      name:      u.name,
      roleLabel: u.role_label,
      email:     u.email,
      estado:    u.estado,
      createdAt: u.created_at,
    }));

    res.json({ users, historial });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function toggleEstado(req, res) {
  try {
    const row = await userModel.getEstado(req.params.id);
    if (!row) return res.status(404).json({ error: 'Usuario no encontrado' });
    const nuevo = row.estado === 'Activo' ? 'Inactivo' : 'Activo';
    await userModel.updateEstado(req.params.id, nuevo);
    res.json({ estado: nuevo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, toggleEstado };
