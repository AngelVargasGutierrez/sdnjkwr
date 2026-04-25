# UC-025 – Visualizar Dashboard Analítico Inteligente

## y) UC-025 – Visualizar Dashboard Analítico Inteligente

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-025 – Visualizar Dashboard Analítico Inteligente |
| **Actores** | Jefatura, Administrador |
| **Propósito** | Permitir al personal autorizado acceder a un panel de análisis avanzado impulsado por Inteligencia Artificial que muestra proyecciones de demanda futura, medicamentos en riesgo de desabastecimiento, patrones estacionales de consumo y recomendaciones automáticas para la gestión estratégica del inventario farmacéutico. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-025 |
| **Versión** | 1.0 |
| **Descripción** | El sistema presenta un Dashboard Analítico Inteligente que utiliza el módulo de IA de MOPGIMED para enriquecer los indicadores del inventario con análisis predictivo avanzado. El dashboard muestra: proyecciones de demanda para los próximos períodos por medicamento, listado de medicamentos en riesgo de desabastecimiento con su fecha estimada de agotamiento, análisis de patrones estacionales identificados en el historial de consumo, tendencias de consumo por categoría terapéutica y recomendaciones automáticas de reabastecimiento priorizadas por urgencia. Todos los indicadores se basan en el historial de movimientos y las proyecciones calculadas por la IA del sistema. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Jefatura o Administrador. Los medicamentos deben contar con al menos cuatro semanas de historial de movimientos para que la IA pueda generar proyecciones confiables. |
| **Postcondición** | El personal visualiza el dashboard inteligente con todos los indicadores predictivos actualizados. Las proyecciones mostradas provienen de la tabla "Proyecciones y Alertas de la IA". No se realizan cambios en el inventario. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Dashboard IA" o "Análisis Inteligente" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y carga el módulo del Dashboard Analítico Inteligente. |
| 3 | | El sistema muestra el indicador "Cargando análisis de IA…" mientras procesa los datos del inventario. |
| 4 | | El sistema consulta la tabla "Proyecciones y Alertas de la IA" para recuperar las proyecciones más recientes. |
| 5 | | El sistema verifica si las proyecciones están actualizadas o si requieren recalcularse con el historial más reciente. |
| 6 | | El módulo de IA procesa el historial de movimientos y consumo de cada medicamento para actualizar las proyecciones. |
| 7 | | El sistema calcula las tendencias de consumo de cada categoría terapéutica: Creciente, Estable o Decreciente. |
| 8 | | El sistema genera las proyecciones de demanda para los próximos 30, 60 y 90 días por medicamento. |
| 9 | | El sistema identifica los medicamentos en riesgo de desabastecimiento estimando cuándo se agotará su stock si el consumo continúa al ritmo actual. |
| 10 | | El sistema detecta patrones estacionales en el historial comparando el consumo de los mismos períodos en años anteriores. |
| 11 | | El sistema muestra el Dashboard Inteligente con los siguientes paneles: proyección de demanda por período, medicamentos en riesgo con fecha estimada de agotamiento, patrones estacionales identificados, tendencias por categoría y recomendaciones de reabastecimiento ordenadas por urgencia. |
| 12 | El personal visualiza el dashboard completo con los indicadores predictivos de la IA. | |
| 13 | El personal revisa el panel de medicamentos en riesgo para identificar cuáles requieren pedido urgente. | |
| 14 | El personal hace clic sobre un medicamento en riesgo para ver el detalle completo de su proyección: historial de consumo, tendencia, predicción por período y días de stock estimados. | |
| 15 | | El sistema muestra el panel de detalle del medicamento con su gráfico de proyección y la recomendación específica de la IA. |
| 16 | El personal revisa las recomendaciones automáticas del panel y toma decisiones de reabastecimiento basadas en los datos de la IA. | |
| 17 | El personal puede cambiar el período de proyección entre 30, 60 y 90 días usando el selector en la parte superior del dashboard. | |
| 18 | | El sistema actualiza los indicadores y proyecciones para el horizonte temporal seleccionado. |

---

### Flujo alterno 1 – Historial insuficiente para generar proyecciones completas

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al Dashboard Inteligente pero varios medicamentos del inventario fueron incorporados recientemente. | |
| 2 | | El módulo de IA detecta que algunos medicamentos tienen menos de cuatro semanas de historial registrado. |
| 3 | | El sistema muestra las proyecciones y análisis disponibles para los medicamentos con historial suficiente. |
| 4 | | Para los medicamentos sin historial suficiente, el dashboard muestra el indicador: "Datos insuficientes – Requiere 4 semanas de historial." |
| 5 | El personal visualiza el dashboard con los análisis disponibles y toma nota de qué medicamentos aún no tienen proyecciones activas. | |

---

### Flujo alterno 2 – Sin datos históricos en el sistema

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al Dashboard Inteligente en un sistema recién implementado sin historial de movimientos. | |
| 2 | | El módulo de IA no puede generar proyecciones por ausencia de datos históricos en la tabla "Historial de Movimientos y Consumo". |
| 3 | | El sistema muestra el mensaje: "El módulo de análisis inteligente estará disponible una vez que el sistema acumule al menos 4 semanas de movimientos de inventario registrados." |
| 4 | El personal toma nota de que el dashboard inteligente se activará automáticamente una vez que se acumule el historial mínimo necesario. | |
