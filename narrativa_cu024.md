# UC-024 – Exportar Reportes en Excel

## x) UC-024 – Exportar Reportes en Excel

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-024 – Exportar Reportes en Excel |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado descargar en formato Excel los reportes generados en el sistema MOPGIMED para su análisis externo, presentación a las autoridades del hospital o archivo en los registros de la institución. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-024 |
| **Versión** | 1.0 |
| **Descripción** | El sistema ofrece la opción de exportar a Excel cualquier reporte generado en el módulo de Reportes: reporte general de medicamentos, reporte de ingresos y salidas y reporte de mayor rotación. Al hacer clic en "Exportar a Excel", el sistema genera un archivo .xlsx con el contenido del reporte, incluidos los encabezados de columna, todos los datos del período, los totales y el resumen, y lo descarga automáticamente al equipo del personal. El nombre del archivo incluye el tipo de reporte y la fecha de generación. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Debe existir un reporte previamente generado en pantalla con datos disponibles para exportar. |
| **Postcondición** | El archivo Excel con el reporte queda descargado en el equipo del personal. No se realizan cambios en la base de datos del sistema. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal genera un reporte en el módulo de Reportes (general, ingresos/salidas o mayor rotación). | |
| 2 | | El sistema muestra el reporte generado en pantalla con todos sus datos y totales. |
| 3 | El personal verifica que el reporte en pantalla contiene la información correcta para exportar. | |
| 4 | El personal hace clic en el botón "Exportar a Excel" ubicado en la parte superior del reporte. | |
| 5 | | El sistema recibe la solicitud de exportación y prepara el archivo Excel. |
| 6 | | El sistema genera los encabezados de columna del archivo con los nombres correspondientes a cada campo del reporte. |
| 7 | | El sistema exporta todos los datos del reporte al archivo, incluyendo cada fila de información. |
| 8 | | El sistema agrega al final del archivo una fila de totales y un resumen del reporte. |
| 9 | | El sistema asigna al archivo un nombre descriptivo que incluye el tipo de reporte y la fecha de generación (por ejemplo: "Reporte_General_Medicamentos_2025-03.xlsx"). |
| 10 | | El sistema descarga automáticamente el archivo al equipo del personal. |
| 11 | | El sistema muestra el mensaje: "Reporte exportado correctamente. El archivo se ha descargado a su equipo." |
| 12 | El personal accede al archivo descargado desde su carpeta de descargas para revisar y utilizar el reporte en Excel. | |
| 13 | El personal puede abrir el archivo en Microsoft Excel u otro programa de hojas de cálculo para analizar, filtrar o presentar la información. | |

---

### Flujo alterno 1 – El reporte no tiene datos para exportar

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en "Exportar a Excel" pero el reporte en pantalla no tiene datos (fue generado con filtros que devolvieron resultados vacíos). | |
| 2 | | El sistema detecta que no hay datos disponibles para exportar. |
| 3 | | El sistema muestra el mensaje: "No hay datos en el reporte para exportar. Genere un reporte con datos antes de exportar." |
| 4 | El personal ajusta los filtros del reporte, lo genera nuevamente con datos y luego hace clic en "Exportar a Excel". | |
