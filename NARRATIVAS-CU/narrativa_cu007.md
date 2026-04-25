# UC-007 – Buscar Medicamento con Inteligencia Artificial

## g) UC-007 – Buscar Medicamento con IA

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-007 – Buscar Medicamento con Inteligencia Artificial |
| **Actores** | Personal Autorizado (Farmacia, Jefatura) |
| **Propósito** | Permitir al personal buscar medicamentos en el inventario y obtener un análisis inteligente generado por el módulo de IA de MOPGIMED que incluye: tendencia de consumo, predicción de demanda futura, estimación de días de stock restantes y recomendaciones automáticas de reabastecimiento. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-007 |
| **Versión** | 1.0 |
| **Descripción** | El sistema recibe el criterio de búsqueda del personal (nombre, categoría o laboratorio), localiza los medicamentos coincidentes y activa el módulo de Inteligencia Artificial para enriquecer los resultados con análisis predictivo. La IA accede al Historial de Movimientos y Consumo, analiza entradas y salidas, identifica patrones de comportamiento, calcula la tendencia (Creciente, Estable o Decreciente), predice la demanda futura, estima los días de stock restantes y genera alertas y recomendaciones automáticas. Las proyecciones quedan guardadas en la tabla "Proyecciones y Alertas de la IA". |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con rol Farmacia o Jefatura. Deben existir medicamentos registrados. Para el análisis predictivo completo, el medicamento debe tener al menos cuatro semanas de historial de movimientos. |
| **Postcondición** | El personal obtiene los resultados enriquecidos con análisis de IA. Las proyecciones y alertas quedan almacenadas y actualizan el Panel de Indicadores y el módulo de Análisis. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Análisis" o "Búsqueda Inteligente" del menú lateral izquierdo. | |
| 2 | | El sistema muestra el Buscador Inteligente con un campo de texto y filtros opcionales por categoría y laboratorio. |
| 3 | El personal escribe en el campo el nombre, categoría o laboratorio del medicamento que desea consultar. | |
| 4 | El personal presiona el botón "Buscar" o la tecla Enter. | |
| 5 | | El sistema recibe el texto y lo envía al Motor de Búsqueda Inteligente. |
| 6 | | El Motor busca simultáneamente en tres campos: nombre del medicamento, categoría terapéutica y laboratorio fabricante. |
| 7 | | El Motor ejecuta la consulta sobre la tabla "Fichas de Medicamentos" y recupera todos los registros coincidentes. |
| 8 | | El sistema verifica que se encontraron resultados y activa el módulo de Inteligencia Artificial. |
| 9 | | El sistema muestra al personal el indicador: "Analizando datos con IA…" |
| 10 | | El Analizador accede a la tabla "Historial de Movimientos y Consumo" y recupera los registros de cada medicamento encontrado. |
| 11 | | Los datos se obtienen organizados por períodos: diario, semanal y mensual. |
| 12 | | El sistema calcula la tendencia de consumo comparando promedios recientes con períodos anteriores: Creciente, Estable o Decreciente. |
| 13 | | El sistema predice la demanda futura para los próximos períodos aplicando análisis de series de tiempo. |
| 14 | | El sistema estima los días de stock restantes con base en el stock actual y el promedio de consumo. |
| 15 | | Si los días estimados son menores a 30, el sistema genera una alerta de reabastecimiento urgente. |
| 16 | | Si los días estimados son menores a 15, la alerta se clasifica como crítica. |
| 17 | | El Generador de Alertas produce recomendaciones: si pedir pronto, cuántas unidades ordenar y qué medicamentos podrían agotarse. |
| 18 | | El sistema guarda las proyecciones en la tabla "Proyecciones y Alertas de la IA". |
| 19 | | El sistema muestra el Panel de Resultados con una tarjeta por cada medicamento encontrado. |
| 20 | | Cada tarjeta muestra: nombre, laboratorio, categoría, stock con indicador de color, tendencia con ícono, predicción de demanda, días de stock y alerta si corresponde. |
| 21 | El personal lee y analiza los resultados para tomar decisiones de reabastecimiento. | |
| 22 | El personal puede hacer clic sobre un medicamento para ver el historial completo y la proyección por período. | |

---

### Flujo alterno 1 – No se encontraron medicamentos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal ingresa un término que no coincide con ningún medicamento registrado. | |
| 2 | El personal presiona "Buscar". | |
| 3 | | El Motor ejecuta la consulta pero no encuentra ningún registro coincidente. |
| 4 | | El módulo de IA no se activa dado que no hay medicamentos para analizar. |
| 5 | | El sistema muestra el mensaje: "No se encontraron medicamentos para la búsqueda ingresada." |
| 6 | | El sistema sugiere: "Intente con el nombre genérico del medicamento o con las primeras letras de la búsqueda." |
| 7 | El personal corrige el término y vuelve a buscar. | |

---

### Flujo alterno 2 – Medicamento sin historial suficiente para el análisis IA

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal busca un medicamento incorporado recientemente al sistema. | |
| 2 | | El Motor encuentra el medicamento y el sistema activa el módulo de IA. |
| 3 | | El Analizador detecta que el medicamento tiene menos de cuatro semanas de movimientos registrados. |
| 4 | | El sistema muestra los datos básicos del medicamento: código, nombre, stock, estado y fecha de vencimiento. |
| 5 | | En el área de análisis muestra el aviso: "Historial insuficiente. Se requieren al menos 4 semanas de movimientos para generar análisis predictivo." |
| 6 | El personal toma nota de la información básica y comprende que el análisis IA estará disponible más adelante. | |
