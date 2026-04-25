# UC-021 – Visualizar Medicamentos de Mayor Rotación

## u) UC-021 – Visualizar Medicamentos de Mayor Rotación

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-021 – Visualizar Medicamentos de Mayor Rotación |
| **Actores** | Jefatura, Farmacia, Administrador |
| **Propósito** | Permitir al personal consultar los medicamentos con mayor nivel de salida o venta dentro de un período determinado, facilitando el análisis de consumo del inventario y la planificación de reabastecimiento. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-021 |
| **Versión** | 1.0 |
| **Descripción** | El sistema analiza el historial de movimientos y consumo del inventario para identificar los medicamentos que han tenido la mayor cantidad de salidas (dispensaciones, ventas o consumo registrado) en el período seleccionado. La lista de mayor rotación se muestra ordenada de mayor a menor cantidad de unidades con salida, indicando para cada medicamento: nombre, laboratorio, categoría, cantidad total de salidas en el período, stock actual y estado del semáforo. Esta información apoya la planificación de compras y el control del inventario. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir registros de movimientos y consumo en el historial del sistema. |
| **Postcondición** | El personal visualiza el listado de medicamentos de mayor rotación ordenado por cantidad de salidas. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Análisis" o "Reportes" desde el menú lateral izquierdo. | |
| 2 | | El sistema muestra el módulo con las opciones de análisis disponibles. |
| 3 | El personal selecciona la opción "Medicamentos de Mayor Rotación". | |
| 4 | | El sistema muestra el panel de Mayor Rotación con el filtro de período y los resultados del período actual por defecto. |
| 5 | El personal selecciona el período que desea analizar: mes actual, trimestre o rango personalizado. | |
| 6 | | El sistema consulta la tabla "Historial de Movimientos y Consumo" para el período seleccionado. |
| 7 | | El sistema suma todas las salidas (dispensaciones y ventas) de cada medicamento en el período. |
| 8 | | El sistema ordena los medicamentos de mayor a menor número de unidades con salida. |
| 9 | | El sistema muestra la lista de los medicamentos de mayor rotación en formato de tabla. |
| 10 | | Para cada medicamento se muestra: posición en el ranking, nombre, laboratorio, categoría, unidades totales con salida en el período, stock actual y estado del semáforo. |
| 11 | | El sistema resalta los medicamentos con alta rotación que al mismo tiempo tienen stock bajo o crítico como prioridad de reabastecimiento. |
| 12 | El personal visualiza el listado y analiza qué medicamentos tienen mayor demanda en el período consultado. | |
| 13 | El personal puede cambiar el período de análisis para comparar la rotación entre distintos meses o trimestres. | |
| 14 | | El sistema actualiza la lista con los datos del nuevo período seleccionado. |
| 15 | El personal identifica los medicamentos de alta rotación con stock bajo para priorizar el reabastecimiento. | |

---

### Flujo alterno 1 – No hay suficientes datos de movimientos en el período

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal selecciona un período en el que no existen registros de salidas de medicamentos. | |
| 2 | | El sistema consulta el historial pero no encuentra movimientos de salida en el período indicado. |
| 3 | | El sistema muestra el mensaje: "No hay registros de movimientos en el período seleccionado para calcular la rotación." |
| 4 | El personal selecciona un período diferente con datos disponibles. | |
