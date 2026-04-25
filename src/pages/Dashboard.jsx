import { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';
import { Package, AlertTriangle, Calendar, DollarSign, Activity, Box, TrendingDown, Clock } from 'lucide-react';
import { api } from '../services/api';
import Loader from '../components/Loader';

const ESTADO_COLORS = { Normal: '#10b981', Bajo: '#f59e0b', Crítico: '#ef4444' };

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.08) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={700}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Dashboard() {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getDashboard().then(setData).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (!data)   return <p style={{ color:'#ef4444' }}>Error al cargar datos.</p>;

  const { stats, stockPorCategoria, estadoStock, movimientosSemana, top5Valor, alertas } = data;

  const pieData = estadoStock.map(e => ({
    name:  e.estado,
    value: e.total,
    color: ESTADO_COLORS[e.estado] || '#94a3b8',
  }));

  const barData = stockPorCategoria.map(c => ({ name: c.categoria, value: c.stock }));

  const entradas = movimientosSemana.reduce((s, m) => s + m.entradas, 0);
  const salidas  = movimientosSemana.reduce((s, m) => s + m.salidas, 0);

  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">Visión general del inventario farmacéutico</p>

      {/* ── Stat cards ─────────────────────────────────────── */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-icon blue"><Package size={24} /></div>
          <div>
            <div className="stat-value">{stats.totalMedicamentos}</div>
            <div className="stat-label">Total Medicamentos</div>
            <div className="stat-sub">Activos en inventario</div>
          </div>
        </div>

        <div className="stat-card red">
          <div className="stat-icon red"><AlertTriangle size={24} /></div>
          <div>
            <div className="stat-value red">{stats.stockCritico}</div>
            <div className="stat-label">Stock Crítico</div>
            <div className="stat-sub">Requieren atención</div>
          </div>
        </div>

        <div className="stat-card yellow">
          <div className="stat-icon yellow"><Calendar size={24} /></div>
          <div>
            <div className="stat-value yellow">{stats.porVencer}</div>
            <div className="stat-label">Por Vencer (30 días)</div>
            <div className="stat-sub">Próximos a vencer</div>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon green"><DollarSign size={24} /></div>
          <div>
            <div className="stat-value green">${parseFloat(stats.valorInventario).toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
            <div className="stat-label">Valor Total</div>
            <div className="stat-sub">Inventario valorizado</div>
          </div>
        </div>
      </div>

      {/* ── Charts row ─────────────────────────────────────── */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">Stock por Categoría</div>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={barData} margin={{ top:0, right:0, left:-20, bottom:50 }}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize:10 }} angle={-35} textAnchor="end" interval={0} />
              <YAxis tick={{ fontSize:11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="url(#barGrad)" radius={[5,5,0,0]} name="Unidades" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-title">Estado del Stock</div>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%" cy="50%"
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
              >
                {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip />
              <Legend
                formatter={(v, entry) => (
                  <span style={{ fontSize:13, color:'#334155' }}>
                    {v}: <strong>{entry.payload.value}</strong>
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Bottom charts ──────────────────────────────────── */}
      <div className="bottom-grid">
        <div className="chart-card">
          <div className="chart-title">Movimientos de la Semana</div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={movimientosSemana}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="dia" tick={{ fontSize:12 }} />
              <YAxis tick={{ fontSize:11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="entradas" stroke="#10b981" strokeWidth={2.5} dot={{ r:5, fill:'#10b981' }} name="entradas" />
              <Line type="monotone" dataKey="salidas"  stroke="#ef4444" strokeWidth={2.5} dot={{ r:5, fill:'#ef4444' }} name="salidas"  />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-title">Top 5 Medicamentos por Valor</div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={top5Valor} layout="vertical" margin={{ left:0, right:20, top:0, bottom:0 }}>
              <defs>
                <linearGradient id="hBarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#b91c1c" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize:11 }} />
              <YAxis dataKey="nombre" type="category" tick={{ fontSize:10 }} width={140} />
              <Tooltip formatter={v => `$${v}`} />
              <Bar dataKey="valor" fill="url(#hBarGrad)" radius={[0,5,5,0]} name="Valor $" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Alerts + Quick stats ───────────────────────────── */}
      <div className="bottom-grid" style={{ marginTop: 24 }}>
        <div className="chart-card">
          <div className="section-header" style={{ marginBottom:16 }}>
            <div className="chart-title" style={{ margin:0 }}>Alertas Críticas</div>
            <span className="badge-count">{alertas.length} Nuevas</span>
          </div>
          {alertas.map((a, i) => (
            <div key={i} className={`alert-item ${a.color}`}>
              <div style={{ paddingTop:2 }}>
                <AlertTriangle size={18} color={a.color === 'red' ? '#ef4444' : '#f59e0b'} />
              </div>
              <div>
                <div className="alert-title">{a.titulo}</div>
                <div className="alert-desc">{a.descripcion}</div>
                <div className="alert-date">{a.fecha}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chart-card">
          <div className="chart-title">Estadísticas Rápidas</div>
          {[
            { icon: <Activity size={16} color="#b91c1c" />, label:'Movimientos Hoy',       value: entradas + salidas },
            { icon: <Box      size={16} color="#10b981" />, label:'Entradas esta semana',   value: entradas },
            { icon: <TrendingDown size={16} color="#ef4444" />, label:'Salidas esta semana',value: salidas  },
            { icon: <Clock    size={16} color="#f59e0b" />, label:'Vencimientos próximos',  value: stats.porVencer },
          ].map(({ icon, label, value }) => (
            <div key={label} className="quick-stat">
              <div className="quick-stat-label">{icon}{label}</div>
              <div className="quick-stat-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
