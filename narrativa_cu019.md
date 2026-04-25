# UC-019 – Generar Reporte de Ingresos y Salidas

## s) UC-019 – Generar Reporte de Ingresos y Salidas

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-019 – Generar Reporte de Ingresos y Salidas |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado emitir reportes históricos sobre los ingresos de medicamentos registrados en el almacén y las salidas asociadas a ventas o consumo, para llevar un control preciso del movimiento del inventario en un período determinado. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-019 |
| **Versión** | 1.0 |
| **Descripción** | El sistema genera reportes de movimientos del inventario que consolidan los ingresos (nuevas entradas de medicamentos al almacén) y las salidas (medicamentos dispensados, vendidos o retirados) ocurridos en un período seleccionado. Para cada movimiento se muestra: fecha, tipo de operación (ingreso o salida), nombre del medicamento, laboratorio, número de lote, cantidad, responsable de la operación y saldo resultante. El reporte permite visualizar el flujo completo del inventario y puede descargarse en formato Excel. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Deben existir registros de movimientos en el Historial de Movimientos y Consumo. |
| **Postcondición** | El reporte de ingresos y salidas queda generado y disponible para visualización y descarga. No se realizan cambios en el inventario. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Reportes" desde el menú lateral izquierdo. | |
| 2 | | El sistema muestra el módulo de Reportes con las opciones disponibles. |
| 3 | El personal selecciona la opción "Reporte de Ingresos y Salidas". | |
| 4 | | El sistema muestra el panel de configuración con los filtros de período y tipo de movimiento. |
| 5 | El personal define el rango de fechas seleccionando la fecha de inicio y la fecha de fin del período a consultar. | |
| 6 | El personal puede optar por ver solo ingresos, solo salidas o ambos tipos de movimientos usando el filtro "Tipo de Movimiento". | |
| 7 | El personal puede aplicar filtros adicionales por medicamento específico o por laboratorio si lo requiere. | |
| 8 | El personal hace clic en el botón "Generar Reporte". | |
| 9 | | El sistema recibe la solicitud y consulta la tabla "Historial de Movimientos y Consumo" con los filtros aplicados. |
| 10 | | El sistema recupera todos los registros de movimientos del período indicado. |
| 11 | | El sistema organiza los movimientos por fecha y calcula el saldo acumulado de cada medicamento en el período. |
| 12 | | El sistema calcula los totales: total de unidades ingresadas, total de unidades con salida y saldo neto del período. |
| 13 | | El sistema muestra el reporte en pantalla con una fila por cada movimiento registrado en el período. |
| 14 | | Cada fila muestra: fecha y hora, tipo (Ingreso en verde / Salida en rojo), medicamento, laboratorio, lote, cantidad, responsable y saldo. |
| 15 | El personal revisa el reporte para verificar que los movimientos del período están correctamente registrados. | |
| 16 | El personal hace clic en "Exportar a Excel" para descargar el reporte en formato de hoja de cálculo. | |
| 17 | | El sistema genera el archivo Excel con todos los movimientos del período y lo descarga al equipo del personal. |

---

### Flujo alterno 1 – No hay movimientos en el período seleccionado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal define el rango de fechas y hace clic en "Generar Reporte". | |
| 2 | | El sistema consulta el historial pero no encuentra movimientos registrados en el período indicado. |
| 3 | | El sistema muestra el mensaje: "No se encontraron movimientos de ingresos o salidas en el período seleccionado." |
| 4 | El personal ajusta el rango de fechas para ampliar el período de consulta y vuelve a generar el reporte. | |
