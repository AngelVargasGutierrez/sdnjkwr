const notificacionModel = require('../models/notificacionModel');

async function getAll(req, res) {
  try {
    res.json(await notificacionModel.findAll());
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function marcarLeida(req, res) {
  try {
    await notificacionModel.marcarLeida(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function marcarTodas(req, res) {
  try {
    await notificacionModel.marcarTodas();
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
}

module.exports = { getAll, marcarLeida, marcarTodas };
