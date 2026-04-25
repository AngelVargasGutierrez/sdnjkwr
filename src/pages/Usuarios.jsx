import { useState, useEffect } from 'react';
import { Plus, Edit, UserX } from 'lucide-react';
import { api } from '../services/api';
import Loader from '../components/Loader';

const ROL_STYLE = {
  'Administrador': 'admin',
  'Farmacia':      'farmacia',
  'Jefatura':      'jefatura',
};

const MOD_COLORS = {
  'Medicamentos': '#dbeafe',
  'Inventario':   '#d1fae5',
  'Reportes':     '#ede9fe',
};

export default function Usuarios() {
  const [users,    setUsers]    = useState([]);
  const [historial,setHistorial]= useState([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    api.getUsers()
      .then(data => { setUsers(data.users); setHistorial(data.historial); })
      .finally(() => setLoading(false));
  }, []);

  async function toggleEstado(id) {
    const { estado } = await api.toggleUserEstado(id);
    setUsers(prev => prev.map(u => u.id === id ? { ...u, estado } : u));
  }

  if (loading) return <Loader />;

  return (
    <>
      {/* ── Header ────────────────────────────────────── */}
      <div className="section-header" style={{ alignItems:'flex-start' }}>
        <div>
          <h1 className="page-title">Gestión de Usuarios</h1>
          <p className="page-subtitle">Administración de usuarios y permisos del sistema</p>
        </div>
        <button className="btn btn-primary" style={{ marginTop:4 }}>
          <Plus size={18} /> Nuevo Usuario
        </button>
      </div>

      {/* ── Users table ──────────────────────────────── */}
      <div className="card" style={{ marginBottom:24 }}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Fecha Creación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ fontWeight:700 }}>{u.name}</div>
                    <div style={{ fontSize:12, color:'#94a3b8' }}>{u.username}</div>
                  </td>
                  <td style={{ fontSize:13, color:'#475569' }}>{u.email}</td>
                  <td>
                    <span className={`rol-badge ${ROL_STYLE[u.roleLabel] || 'farmacia'}`}>
                      {u.roleLabel}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${u.estado === 'Activo' ? 'green' : ''}`}
                      style={u.estado !== 'Activo' ? { background:'#f3f4f6', color:'#6b7280' } : {}}
                    >
                      {u.estado}
                    </span>
                  </td>
                  <td style={{ fontSize:13, color:'#64748b' }}>
                    {u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-PE') : '—'}
                  </td>
                  <td>
                    <div style={{ display:'flex', gap:8 }}>
                      <button className="icon-btn edit" title="Editar usuario">
                        <Edit size={14} />
                      </button>
                      <button
                        className="icon-btn"
                        title={u.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                        onClick={() => toggleEstado(u.id)}
                        style={{
                          background: u.estado === 'Activo' ? '#fee2e2' : '#d1fae5',
                          color:      u.estado === 'Activo' ? '#ef4444' : '#059669',
                        }}
                      >
                        <UserX size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Activity log ─────────────────────────────── */}
      <div className="card">
        <div className="chart-title" style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
          ↗ Historial de Acciones
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha / Hora</th>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Módulo</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((h, i) => (
                <tr key={i}>
                  <td style={{ fontSize:12, color:'#64748b' }}>{h.fecha}</td>
                  <td style={{ fontWeight:600 }}>{h.usuario}</td>
                  <td style={{ fontSize:13 }}>{h.accion}</td>
                  <td>
                    <span style={{
                      display:'inline-flex', alignItems:'center',
                      padding:'3px 10px', borderRadius:20, fontSize:12, fontWeight:600,
                      background: MOD_COLORS[h.modulo] || '#f3f4f6',
                      color: '#1e293b',
                    }}>
                      {h.modulo}
                    </span>
                  </td>
                  <td style={{ fontSize:13, color:'#64748b' }}>{h.detalle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
