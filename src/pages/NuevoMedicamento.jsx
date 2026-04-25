import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { api } from '../services/api';

const EMPTY = { nombre:'', laboratorio:'', categoria:'', costoUnit:'', precioVenta:'', stockMin:'', stockInicial:'', lote:'', vencimiento:'', rSanitario:'' };

export default function NuevoMedicamento({ onBack }) {
  const [laboratorios,  setLaboratorios]  = useState([]);
  const [categorias,    setCategorias]    = useState([]);
  const [existentes,    setExistentes]    = useState([]);
  const [labSelected,   setLabSelected]   = useState('');
  const [medSearch,     setMedSearch]     = useState('');
  const [suggestions,   setSuggestions]   = useState([]);
  const [showDropdown,  setShowDropdown]  = useState(false);
  const [form,          setForm]          = useState(EMPTY);
  const [saving,        setSaving]        = useState(false);

  useEffect(() => {
    Promise.all([api.getLaboratorios(), api.getCategorias(), api.getMedicamentos()])
      .then(([labs, cats, meds]) => {
        setLaboratorios(labs);
        setCategorias(cats);
        setExistentes(meds);
      });
  }, []);

  function handleLabChange(e) {
    const lab = e.target.value;
    setLabSelected(lab);
    setForm(f => ({ ...f, laboratorio: lab }));
    setMedSearch('');
    setSuggestions([]);
  }

  function handleMedSearch(e) {
    const val = e.target.value;
    setMedSearch(val);
    if (val.length > 1 && labSelected) {
      const matches = existentes.filter(m =>
        m.laboratorio === labSelected &&
        m.nombre.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 6);
      setSuggestions(matches);
      setShowDropdown(matches.length > 0);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }

  function selectSuggestion(m) {
    setForm(f => ({ ...f, nombre: m.nombre, laboratorio: m.laboratorio, categoria: m.categoria }));
    setMedSearch(m.nombre);
    setShowDropdown(false);
  }

  function setField(field, value) { setForm(f => ({ ...f, [field]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await api.createMedicamento({
        codigo:      `FARM-${Date.now()}`,
        nombre:      form.nombre,
        laboratorio: form.laboratorio,
        categoria:   form.categoria,
        costoUnit:   form.costoUnit,
        precioVenta: form.precioVenta,
        stockMin:    form.stockMin,
        stock:       form.stockInicial,
        lote:        form.lote,
        vencimiento: form.vencimiento ? form.vencimiento.split('-').reverse().join('/') : '',
        rSanitario:  form.rSanitario,
      });
      alert(`✅ Medicamento "${form.nombre}" registrado exitosamente.`);
      onBack();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom:20 }}>
        <ArrowLeft size={16} /> Volver a Medicamentos
      </button>

      <h1 className="page-title">Registro Rápido de Medicamento</h1>
      <p className="page-subtitle">Busca el medicamento con IA y completa los datos faltantes</p>

      <form onSubmit={handleSubmit}>
        {/* ── AI Search ──────────────────────────────────────── */}
        <div className="form-section">
          <div className="ai-card" style={{ marginBottom:0 }}>
            <div className="ai-card-title">
              <span>✦</span> Búsqueda Inteligente con IA
            </div>
            <div className="ai-card-desc">
              La IA autocompletará nombre, laboratorio y categoría. Tú completas costo (según boleta física),
              stock mínimo, lote y vencimiento.
            </div>

            {/* Step 1 */}
            <div className="form-group">
              <label className="form-label">Paso 1: Selecciona el Laboratorio *</label>
              <select className="form-select" value={labSelected} onChange={handleLabChange}>
                <option value="">-- Seleccionar laboratorio --</option>
                {laboratorios.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {/* Step 2 */}
            <div className="form-group" style={{ marginBottom:0 }}>
              <label className="form-label">Paso 2: Busca el Medicamento</label>

              {!labSelected ? (
                <div style={{
                  border:'2px dashed #bfdbfe', borderRadius:8, padding:'16px 20px',
                  textAlign:'center', color:'#64748b', fontSize:13,
                  background:'rgba(255,255,255,0.6)',
                }}>
                  🔼 Primero selecciona un laboratorio para habilitar la búsqueda
                </div>
              ) : (
                <div style={{ position:'relative' }}>
                  <input
                    className="form-input"
                    placeholder="Buscar medicamento..."
                    value={medSearch}
                    onChange={handleMedSearch}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                    onFocus={() => suggestions.length && setShowDropdown(true)}
                  />
                  {showDropdown && (
                    <div style={{
                      position:'absolute', top:'calc(100% + 4px)', left:0, right:0,
                      background:'white', border:'1.5px solid #bfdbfe',
                      borderRadius:10, boxShadow:'0 8px 24px rgba(30,64,175,0.12)',
                      zIndex:200, overflow:'hidden',
                    }}>
                      {suggestions.map(m => (
                        <div
                          key={m.id}
                          onMouseDown={() => selectSuggestion(m)}
                          style={{
                            padding:'11px 16px', cursor:'pointer', fontSize:13,
                            borderBottom:'1px solid #f1f5f9',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background='#eff6ff'}
                          onMouseLeave={e => e.currentTarget.style.background='white'}
                        >
                          <div style={{ fontWeight:700 }}>{m.nombre}</div>
                          <div style={{ fontSize:11, color:'#94a3b8' }}>{m.categoria}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="ai-tip" style={{ marginTop:10 }}>
                <span>ℹ️ 💡</span>
                <span>Tip: Selecciona el laboratorio y luego busca el medicamento.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Basic info ─────────────────────────────────────── */}
        <div className="form-section">
          <div className="form-section-title">Información Básica</div>

          <div className="form-group">
            <label className="form-label">Nombre del Medicamento *</label>
            <input
              className="form-input"
              placeholder="Ej: Paracetamol 500mg"
              value={form.nombre}
              onChange={e => setField('nombre', e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Laboratorio *</label>
              <input
                className="form-input"
                placeholder="Ej: Laboratorios ABC"
                value={form.laboratorio}
                style={labSelected ? { background:'#f8faff', color:'#475569' } : {}}
                readOnly={!!labSelected}
                onChange={e => setField('laboratorio', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Categoría *</label>
              <select
                className="form-select"
                value={form.categoria}
                onChange={e => setField('categoria', e.target.value)}
                required
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* ── Manual data ────────────────────────────────────── */}
        <div className="manual-section">
          <div className="manual-section-title">📋 Completa estos datos manualmente</div>
          <div className="manual-section-desc">Información del lote físico y boleta de compra</div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Costo Unitario ($) * <span style={{ color:'#94a3b8', fontWeight:400 }}>(según boleta)</span></label>
              <input className="form-input" type="number" min="0" step="0.01" placeholder="0.00"
                value={form.costoUnit} onChange={e => setField('costoUnit', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Precio de Venta ($) *</label>
              <input className="form-input" type="number" min="0" step="0.01" placeholder="0.00"
                value={form.precioVenta} onChange={e => setField('precioVenta', e.target.value)} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Stock Mínimo * <span style={{ color:'#94a3b8', fontWeight:400 }}>(política interna)</span></label>
              <input className="form-input" type="number" min="0" placeholder="0"
                value={form.stockMin} onChange={e => setField('stockMin', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Stock Inicial de este Lote *</label>
              <input className="form-input" type="number" min="0" placeholder="0"
                value={form.stockInicial} onChange={e => setField('stockInicial', e.target.value)} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Número de Lote *</label>
              <input className="form-input" placeholder="Ej: PAR-2024-001"
                value={form.lote} onChange={e => setField('lote', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Fecha de Vencimiento *</label>
              <input className="form-input" type="date"
                value={form.vencimiento} onChange={e => setField('vencimiento', e.target.value)} required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Registro Sanitario</label>
            <input className="form-input" placeholder="Ej: RSS-001-2024"
              value={form.rSanitario} onChange={e => setField('rSanitario', e.target.value)} />
          </div>
        </div>

        {/* ── Actions ────────────────────────────────────────── */}
        <div style={{ display:'flex', gap:12 }}>
          <button type="submit" className="btn btn-primary" style={{ flex:1, justifyContent:'center', padding:'14px' }} disabled={saving}>
            {saving ? 'Guardando...' : '📋 Registrar Medicamento'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onBack} disabled={saving}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
