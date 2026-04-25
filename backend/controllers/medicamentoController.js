const medicamentoModel = require('../models/medicamentoModel');

async function getAll(req, res) {
  try {
    res.json(await medicamentoModel.findAll());
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function getOne(req, res) {
  try {
    const med = await medicamentoModel.findById(req.params.id);
    if (!med) return res.status(404).json({ error: 'No encontrado' });
    res.json(med);
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function create(req, res) {
  try {
    const nuevo = await medicamentoModel.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function update(req, res) {
  try {
    const actualizado = await medicamentoModel.update(req.params.id, req.body);
    res.json(actualizado);
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function remove(req, res) {
  try {
    await medicamentoModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function getLaboratorios(req, res) {
  try {
    res.json(await medicamentoModel.getLaboratorios());
  } catch (err) { res.status(500).json({ error: err.message }); }
}

async function getCategorias(req, res) {
  try {
    res.json(await medicamentoModel.getCategorias());
  } catch (err) { res.status(500).json({ error: err.message }); }
}

module.exports = { getAll, getOne, create, update, remove, getLaboratorios, getCategorias };
