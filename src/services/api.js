const BASE = 'http://localhost:3001/api';

async function req(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Error en la solicitud');
  return data;
}

export const api = {
  /* Auth */
  login: (username, password) =>
    req('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }),

  /* Dashboard */
  getDashboard: () => req('/dashboard'),

  /* Medicamentos */
  getMedicamentos:    ()     => req('/medicamentos'),
  getMedicamento:     (id)   => req(`/medicamentos/${id}`),
  createMedicamento:  (data) => req('/medicamentos', { method: 'POST', body: JSON.stringify(data) }),
  updateMedicamento:  (id, data) => req(`/medicamentos/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteMedicamento:  (id)   => req(`/medicamentos/${id}`, { method: 'DELETE' }),

  /* Laboratorios / Categorías */
  getLaboratorios: () => req('/laboratorios'),
  getCategorias:   () => req('/laboratorios/categorias'),

  /* Inventario */
  getInventario: () => req('/inventario'),

  /* Notificaciones */
  getNotificaciones: () => req('/notificaciones'),
  marcarLeida:       (id) => req(`/notificaciones/${id}/leer`, { method: 'PATCH' }),
  marcarTodas:       ()   => req('/notificaciones/leer-todas', { method: 'PATCH' }),

  /* Analytics */
  getAnalytics: () => req('/analytics'),

  /* Reportes */
  getReporteResumen: () => req('/reportes/resumen'),

  /* Usuarios */
  getUsers:        () => req('/users'),
  toggleUserEstado: (id) => req(`/users/${id}/toggle`, { method: 'PATCH' }),
};
