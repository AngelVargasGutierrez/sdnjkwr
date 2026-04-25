# UC-018 – Definir Filtros de Reporte General

## r) UC-018 – Definir Filtros de Reporte General

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-018 – Definir Filtros de Reporte General |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado establecer los criterios de consulta para el reporte general de medicamentos, como el período de análisis (mensual o trimestral), el tipo de costo (compra o venta) y la categoría terapéutica, para obtener información precisa y relevante para la toma de decisiones. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-018 |
| **Versión** | 1.0 |
| **Descripción** | El sistema ofrece un panel de filtros en el módulo de Reportes que permite personalizar el reporte general antes de generarlo. Los filtros disponibles incluyen: período de análisis (mensual, trimestral o personalizado con fechas específicas), tipo de valorización del inventario (costo de compra o precio de venta), categoría terapéutica y estado del stock (Normal, Bajo, Crítico o Todos). El personal puede combinar estos filtros libremente para obtener el reporte más adecuado a sus necesidades. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. El módulo de Reportes debe estar activo. |
| **Postcondición** | Los filtros definidos quedan configurados y el sistema está listo para generar el reporte con los criterios establecidos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Reportes" y selecciona la opción "Reporte General de Medicamentos". | |
| 2 | | El sistema muestra el panel de configuración con todos los filtros disponibles en sus valores predeterminados. |
| 3 | El personal hace clic en el filtro "Período" y selecciona la opción "Mensual". | |
| 4 | | El sistema activa el selector de mes y año para que el personal defina el período exacto. |
| 5 | El personal selecciona el mes y el año del período que desea analizar. | |
| 6 | | El sistema registra el período mensual seleccionado como criterio activo del reporte. |
| 7 | El personal hace clic en el filtro "Tipo de Costo" y selecciona "Costo de Compra" o "Precio de Venta". | |
| 8 | | El sistema registra el tipo de valorización seleccionado para calcular los totales del inventario en el reporte. |
| 9 | El personal selecciona una categoría terapéutica en el filtro "Categoría" para limitar el reporte a un grupo de medicamentos. | |
| 10 | | El sistema registra la categoría seleccionada como criterio de filtrado. |
| 11 | El personal selecciona el estado del stock en el filtro "Estado": Normal, Bajo, Crítico o Todos. | |
| 12 | | El sistema registra el estado de stock seleccionado como criterio adicional del reporte. |
| 13 | El personal revisa el resumen de filtros activos que el sistema muestra en la parte superior del panel. | |
| 14 | | El sistema muestra un resumen de los criterios configurados: "Período: Mensual - Marzo 2025 | Tipo: Costo de Compra | Categoría: Antibióticos | Estado: Crítico". |
| 15 | El personal hace clic en "Generar Reporte" para proceder con la generación usando los filtros definidos. | |
| 16 | | El sistema aplica todos los filtros configurados y genera el reporte con los datos correspondientes. |

---

### Flujo alterno 1 – El personal cambia a período trimestral

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal selecciona la opción "Trimestral" en el filtro de período. | |
| 2 | | El sistema oculta el selector de mes y muestra el selector de trimestre y año. |
| 3 | El personal selecciona el trimestre (T1, T2, T3 o T4) y el año correspondiente. | |
| 4 | | El sistema registra el período trimestral como criterio activo del reporte. |
| 5 | El personal completa los demás filtros y hace clic en "Generar Reporte". | |

---

### Flujo alterno 2 – El personal limpia todos los filtros

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en "Limpiar filtros" para reiniciar los criterios de configuración. | |
| 2 | | El sistema restablece todos los filtros a sus valores predeterminados: período actual, todos los estados y todas las categorías. |
| 3 | El personal configura nuevamente los filtros desde cero según sus necesidades. | |
