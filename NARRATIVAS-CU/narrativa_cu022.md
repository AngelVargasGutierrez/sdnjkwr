# UC-022 – Generar Reporte de Mayor Rotación

## v) UC-022 – Generar Reporte de Mayor Rotación

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-022 – Generar Reporte de Mayor Rotación |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado emitir reportes específicos sobre los medicamentos más vendidos o utilizados según el período seleccionado, para documentar el análisis de consumo y apoyar la planificación de compras y la gestión del inventario. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-022 |
| **Versión** | 1.0 |
| **Descripción** | El sistema genera un reporte formal de los medicamentos con mayor rotación del inventario en el período indicado. El reporte consolida la información de consumo de cada medicamento: nombre, laboratorio, categoría, cantidad total de salidas, porcentaje sobre el total de salidas del período, stock actual y estado. El reporte puede configurarse para mostrar los 10, 20 o todos los medicamentos de mayor rotación. Una vez generado, puede descargarse en formato Excel para análisis externo o presentación a las autoridades del hospital. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Deben existir registros de movimientos y consumo en el historial del sistema. |
| **Postcondición** | El reporte de mayor rotación queda generado y disponible para visualización y descarga en Excel. No se realizan cambios en el inventario. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Reportes" desde el menú lateral izquierdo. | |
| 2 | | El sistema muestra las opciones de reportes disponibles. |
| 3 | El personal selecciona la opción "Reporte de Mayor Rotación". | |
| 4 | | El sistema muestra el panel de configuración del reporte con filtros de período y cantidad de resultados a incluir. |
| 5 | El personal define el período de análisis usando el filtro de tiempo: mensual, trimestral o rango personalizado. | |
| 6 | El personal selecciona cuántos medicamentos incluir en el reporte: Top 10, Top 20 o Todos. | |
| 7 | El personal puede aplicar un filtro adicional por categoría terapéutica para el reporte. | |
| 8 | El personal hace clic en el botón "Generar Reporte". | |
| 9 | | El sistema recibe la solicitud y consulta la tabla "Historial de Movimientos y Consumo" para el período indicado. |
| 10 | | El sistema suma las salidas de cada medicamento y calcula el porcentaje que representa sobre el total de salidas del período. |
| 11 | | El sistema ordena los medicamentos de mayor a menor rotación y selecciona la cantidad configurada por el personal. |
| 12 | | El sistema muestra el reporte en pantalla con el listado ordenado por rotación descendente. |
| 13 | | Para cada medicamento el reporte muestra: posición, nombre, laboratorio, categoría, unidades con salida, porcentaje del total, stock actual y estado. |
| 14 | | El sistema incluye un resumen al final del reporte: total de unidades con salida en el período y medicamento de mayor demanda. |
| 15 | El personal revisa el reporte generado para analizar el comportamiento de la demanda del período consultado. | |
| 16 | El personal hace clic en "Exportar a Excel" para descargar el reporte en formato de hoja de cálculo. | |
| 17 | | El sistema genera el archivo Excel con el reporte de mayor rotación y lo descarga al equipo del personal. |

---

### Flujo alterno 1 – No hay datos de rotación para el período

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal configura el reporte y hace clic en "Generar Reporte". | |
| 2 | | El sistema consulta el historial pero no encuentra registros de salidas en el período seleccionado. |
| 3 | | El sistema muestra el mensaje: "No hay datos de movimientos de salida para el período seleccionado. Intente con un período diferente." |
| 4 | El personal ajusta el período de análisis y vuelve a generar el reporte. | |
