import { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { api } from '../services/api';
import Loader from '../components/Loader';

export default function Medicamentos({ onNuevo }) {
  const [medicamentos, setMedicamentos] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [search,       setSearch]       = useState('');
  const [labFilter,    setLabFilter]    = useState('');

  useEffect(() => {
    Promise.all([api.getMedicamentos(), api.getLaboratorios()])
      .then(([meds, labs]) => { setMedicamentos(meds); setLaboratorios(labs); })
      .finally(() => setLoading(false));
  }, []);

  const filtered = medicamentos.filter(m => {
    const q = search.toLowerCase();
    const matchSearch = !q ||
      m.nombre.toLowerCase().includes(q) ||
      m.codigo.toLowerCase().includes(q) ||
      (m.laboratorio || '').toLowerCase().includes(q) ||
      (m.categoria   || '').toLowerCase().includes(q);
    const matchLab = !labFilter || m.laboratorio === labFilter;
    return matchSearch && matchLab;
  });

  if (loading) return <Loader />;

  return (
    <>
      {/* Header */}
      <div className="section-header" style={{ alignItems:'flex-start' }}>
        <div>
          <h1 className="page-title">Gestión de Medicamentos</h1>
          <p className="page-subtitle">Administración completa del inventario farmacéutico</p>
        </div>
        <button className="btn btn-primary" onClick={onNuevo} style={{ marginTop:4 }}>
          <Plus size={18} /> Nuevo Medicamento
        </button>
      </div>

      {/* AI search */}
      <div className="ai-card">
        <div className="ai-card-title">
          <span style={{ fontSize:18 }}>✦</span>
          Búsqueda Inteligente con IA
        </div>
        <div className="ai-card-desc">
          Encuentra medicamentos con autocompletado inteligente, corrección de errores tipográficos,
          detección de sinónimos farmacéuticos y sugerencias basadas en IA.
        </div>
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Buscar medicamento..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="ai-tip">
          <span>ℹ️</span>
          Prueba: busca por nombre, código, laboratorio o categoría
        </div>
      </div>

      {/* Lab filter */}
      <div className="card" style={{ marginBottom:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
          <Filter size={15} color="#64748b" />
          <span style={{ fontSize:13, fontWeight:700, color:'#374151' }}>Filtrar por Laboratorio</span>
        </div>
        <select
          className="filter-select"
          style={{ width:'100%' }}
          value={labFilter}
          onChange={e => setLabFilter(e.target.value)}
        >
          <option value="">Todos los laboratorios</option>
          {laboratorios.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="card">
        <div className="showing-count">
          Mostrando <strong>{filtered.length}</strong> de {medicamentos.length} medicamentos
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Medicamento</th>
                <th>Laboratorio</th>
                <th>Lote</th>
                <th>Stock</th>
                <th>Costo Unit.</th>
                <th>Vencimiento</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.id}>
                  <td>
                    <div style={{ fontWeight:700 }}>{m.nombre}</div>
                    <div style={{ fontSize:11, color:'#94a3b8' }}>{m.categoria}</div>
                  </td>
                  <td>{m.laboratorio}</td>
                  <td style={{ fontFamily:'monospace', fontSize:12, color:'#475569' }}>{m.lote}</td>
                  <td>
                    <div style={{ fontWeight:800 }}>{m.stock.toLocaleString()}</div>
                    <div style={{ fontSize:11, color:'#94a3b8' }}>Min: {m.stockMin}</div>
                  </td>
                  <td>${m.costoUnit.toFixed(2)}</td>
                  <td>{m.vencimiento}</td>
                  <td>
                    <span className={`badge ${m.estado === 'Normal' ? 'green' : m.estado === 'Bajo' ? 'yellow' : 'red'}`}>
                      {m.estado}
                    </span>
                  </td>
                  <td>
                    <div style={{ display:'flex', gap:6 }}>
                      <button className="icon-btn view" title="Ver detalle">👁</button>
                      <button className="icon-btn edit" title="Editar">✏️</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign:'center', padding:'32px', color:'#94a3b8', fontSize:14 }}>
                    No se encontraron medicamentos con ese criterio de búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
