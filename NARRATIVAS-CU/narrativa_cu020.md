# UC-020 – Filtrar Reportes por Tiempo

## t) UC-020 – Filtrar Reportes por Tiempo

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-020 – Filtrar Reportes por Tiempo |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado consultar reportes del sistema MOPGIMED según rangos de tiempo definidos, para obtener información del inventario acotada a períodos específicos de análisis. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-020 |
| **Versión** | 1.0 |
| **Descripción** | El sistema ofrece filtros temporales en el módulo de Reportes que permiten definir el período de análisis para cualquier tipo de reporte: general de medicamentos, ingresos y salidas, o mayor rotación. Los rangos disponibles incluyen períodos predefinidos (hoy, última semana, mes actual, trimestre actual, año actual) y un rango personalizado donde el personal puede ingresar una fecha de inicio y una fecha de fin específicas. Al aplicar el filtro, el sistema actualiza el reporte mostrando únicamente los datos del período seleccionado. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. El módulo de Reportes debe estar activo con al menos un tipo de reporte seleccionado. |
| **Postcondición** | El reporte se actualiza mostrando los datos correspondientes al período de tiempo definido por el personal. No se realizan cambios en la base de datos del inventario. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Reportes" y selecciona el tipo de reporte que desea consultar. | |
| 2 | | El sistema muestra el panel de configuración del reporte con los filtros de tiempo disponibles. |
| 3 | El personal hace clic en el selector de período para ver las opciones de rango temporal disponibles. | |
| 4 | | El sistema despliega las opciones: "Hoy", "Última semana", "Mes actual", "Trimestre actual", "Año actual" y "Rango personalizado". |
| 5 | El personal selecciona la opción "Mes actual" para consultar el reporte del mes en curso. | |
| 6 | | El sistema registra el período "Mes actual" como criterio temporal activo del reporte. |
| 7 | | El sistema muestra las fechas exactas del período seleccionado: inicio y fin del mes actual. |
| 8 | El personal hace clic en "Generar Reporte" para obtener los datos del período seleccionado. | |
| 9 | | El sistema aplica el filtro de tiempo y consulta la base de datos para el período indicado. |
| 10 | | El sistema genera y muestra el reporte con los datos correspondientes al mes actual. |
| 11 | El personal revisa el reporte del período seleccionado. | |
| 12 | El personal decide cambiar el período y selecciona la opción "Rango personalizado". | |
| 13 | | El sistema muestra dos campos de fecha: "Fecha de inicio" y "Fecha de fin" para que el personal defina el rango exacto. |
| 14 | El personal ingresa la fecha de inicio y la fecha de fin del período personalizado. | |
| 15 | | El sistema valida que la fecha de inicio sea anterior o igual a la fecha de fin. |
| 16 | El personal hace clic en "Generar Reporte" para actualizar los resultados. | |
| 17 | | El sistema aplica el rango personalizado y genera el reporte para el período exacto definido. |

---

### Flujo alterno 1 – Rango de fechas inválido

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal ingresa una fecha de inicio posterior a la fecha de fin en el rango personalizado. | |
| 2 | El personal hace clic en "Generar Reporte". | |
| 3 | | El sistema detecta que el rango de fechas es inválido. |
| 4 | | El sistema muestra el mensaje: "La fecha de inicio no puede ser posterior a la fecha de fin. Verifique el rango seleccionado." |
| 5 | El personal corrige las fechas ingresadas y vuelve a hacer clic en "Generar Reporte". | |
