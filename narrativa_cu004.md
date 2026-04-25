# UC-004 – Visualizar Historial de Acciones

## d) UC-004 – Visualizar Historial de Acciones

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-004 – Visualizar Historial de Acciones |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado consultar el registro de todas las actividades realizadas por los usuarios dentro del sistema MOPGIMED para fines de control y seguimiento. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-004 |
| **Versión** | 1.0 |
| **Descripción** | El sistema mantiene un Historial de Actividad donde se registra automáticamente cada acción realizada: inicios de sesión, creación, edición y eliminación de medicamentos, gestión de usuarios, generación de reportes y cualquier otra operación relevante. El personal autorizado puede consultar este historial, aplicar filtros por usuario, tipo de acción, fecha o módulo, y ver el detalle completo de cada evento. El historial es de solo lectura; ningún usuario puede modificar ni eliminar los registros generados. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Deben existir registros previos de actividad en la base de datos. |
| **Postcondición** | El usuario visualiza el historial filtrado según los criterios seleccionados. No se realiza ningún cambio en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Historial de Actividad" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y carga el módulo de Historial de Acciones. |
| 3 | | El sistema consulta la tabla "Historial de Actividad" y recupera los registros más recientes en orden descendente por fecha y hora. |
| 4 | | El sistema muestra la lista de actividades en tabla con las columnas: fecha y hora, usuario, cargo, módulo, acción realizada y detalle. |
| 5 | El personal visualiza el listado general de todas las acciones registradas recientemente. | |
| 6 | El personal escribe en el campo "Buscar usuario" el nombre del usuario cuyas acciones desea consultar. | |
| 7 | | El sistema filtra el historial mostrando solo las acciones realizadas por el usuario indicado. |
| 8 | El personal selecciona un tipo de acción en el filtro desplegable (por ejemplo: "Creó medicamento", "Inició sesión"). | |
| 9 | | El sistema actualiza la lista mostrando solo las acciones del tipo seleccionado. |
| 10 | El personal selecciona un rango de fechas en los campos "Desde" y "Hasta" para acotar el período de consulta. | |
| 11 | | El sistema aplica el filtro de fechas y muestra únicamente los registros del período definido. |
| 12 | El personal selecciona el módulo del sistema en el filtro correspondiente para ver solo las acciones de ese módulo. | |
| 13 | | El sistema combina todos los filtros activos y actualiza el historial con los resultados correspondientes. |
| 14 | El personal hace clic sobre una fila del historial para ver el detalle completo del evento. | |
| 15 | | El sistema muestra el panel de detalle: nombre del usuario, cargo, módulo afectado, descripción de la acción, datos modificados y fecha y hora exacta. |
| 16 | El personal revisa el detalle de la acción para obtener la información necesaria para el control. | |

---

### Flujo alterno 1 – No se encontraron registros para los filtros aplicados

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal aplica uno o más filtros en el historial de actividad. | |
| 2 | | El sistema ejecuta la consulta pero no encuentra ningún registro que coincida con los criterios definidos. |
| 3 | | El sistema muestra el mensaje: "No se encontraron registros de actividad para los filtros seleccionados." |
| 4 | | Los campos de filtro permanecen activos con los valores ingresados para que el personal pueda modificarlos. |
| 5 | El personal ajusta o elimina alguno de los filtros para ampliar el rango de búsqueda. | |
| 6 | | El sistema actualiza la lista mostrando los registros que coincidan con los nuevos criterios. |
