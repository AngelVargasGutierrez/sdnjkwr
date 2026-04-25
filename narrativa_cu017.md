# UC-017 – Generar Reporte General de Medicamentos

## q) UC-017 – Generar Reporte General de Medicamentos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-017 – Generar Reporte General de Medicamentos |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado emitir reportes consolidados del inventario farmacéutico con información relevante sobre el estado del stock, los medicamentos registrados y los indicadores del inventario, para apoyar la supervisión y el control de la gestión farmacéutica. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-017 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite generar reportes generales del inventario de medicamentos que consolidan la información del stock: nombre del medicamento, laboratorio, categoría, stock actual, stock mínimo, estado (Normal/Bajo/Crítico), costo de compra, precio de venta y fecha de vencimiento. El reporte puede generarse para el inventario completo o con los filtros definidos por el usuario. Una vez generado, el reporte puede visualizarse en pantalla y descargarse en formato Excel. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Deben existir medicamentos registrados en el sistema. |
| **Postcondición** | El reporte general queda generado y disponible para visualización en pantalla y descarga. No se realizan cambios en el inventario. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Reportes" del menú lateral izquierdo. | |
| 2 | | El sistema carga el módulo de Reportes y muestra las opciones disponibles. |
| 3 | El personal selecciona la opción "Reporte General de Medicamentos". | |
| 4 | | El sistema muestra el panel de configuración del reporte con los filtros disponibles y el botón "Generar Reporte". |
| 5 | El personal define los filtros deseados: período (mensual o trimestral), tipo de costo (compra o venta) y categoría terapéutica. | |
| 6 | El personal hace clic en el botón "Generar Reporte". | |
| 7 | | El sistema recibe la solicitud y consulta la tabla "Fichas de Medicamentos" aplicando los filtros configurados. |
| 8 | | El sistema recupera la información de cada medicamento: nombre, laboratorio, categoría, lote, stock actual, stock mínimo, estado, costo y precio. |
| 9 | | El sistema calcula los totales y resúmenes: cantidad total de medicamentos, cantidad por estado, valor total del inventario según el tipo de costo seleccionado. |
| 10 | | El sistema muestra una barra de progreso mientras genera el reporte. |
| 11 | | El sistema muestra el reporte en pantalla en formato de tabla ordenada, con los datos de cada medicamento y los totales calculados al final. |
| 12 | | Los medicamentos en estado Crítico aparecen resaltados en rojo, los Bajos en amarillo y los Normales en verde. |
| 13 | El personal revisa el reporte generado en pantalla para verificar que la información es correcta y completa. | |
| 14 | El personal puede hacer clic en "Exportar a Excel" para descargar el reporte en formato de hoja de cálculo. | |
| 15 | | El sistema genera el archivo Excel con el reporte y lo descarga automáticamente al equipo del personal. |

---

### Flujo alterno 1 – No hay datos para el período o filtro seleccionado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal configura los filtros del reporte general y hace clic en "Generar Reporte". | |
| 2 | | El sistema aplica los filtros pero no encuentra medicamentos que cumplan con los criterios definidos. |
| 3 | | El sistema muestra el mensaje: "No se encontraron medicamentos para los filtros seleccionados. Intente modificar los criterios del reporte." |
| 4 | El personal ajusta los filtros o los elimina para ampliar el alcance del reporte y vuelve a generarlo. | |
