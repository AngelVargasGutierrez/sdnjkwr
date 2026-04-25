# UC-011 – Consultar Medicamento

## k) UC-011 – Consultar Medicamento

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-011 – Consultar Medicamento |
| **Actores** | Personal Autorizado (Administrador, Farmacia, Jefatura) |
| **Propósito** | Permitir al personal buscar y visualizar la información de disponibilidad y precio de venta de los medicamentos registrados en el inventario de MOPGIMED. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-011 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite a cualquier usuario autenticado consultar la información de los medicamentos del inventario sin realizar ningún cambio. El personal puede buscar un medicamento por nombre, laboratorio o categoría, y visualizar su ficha completa con datos de disponibilidad (stock actual, stock mínimo y estado del semáforo) y precio de venta. La consulta es de solo lectura y no requiere permisos de edición. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir medicamentos registrados en el sistema. |
| **Postcondición** | El personal visualiza la información del medicamento consultado. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Medicamentos" desde el menú lateral izquierdo. | |
| 2 | | El sistema carga y muestra la Lista de Medicamentos completa con todos los registros del inventario. |
| 3 | El personal escribe en el campo de búsqueda el nombre del medicamento que desea consultar. | |
| 4 | | El sistema filtra la lista en tiempo real mostrando los medicamentos que coincidan con el texto ingresado. |
| 5 | El personal puede también ingresar el nombre del laboratorio o la categoría terapéutica para ampliar o refinar la búsqueda. | |
| 6 | | El sistema aplica el filtro sobre nombre, laboratorio y categoría simultáneamente. |
| 7 | El personal localiza el medicamento en la lista filtrada y hace clic sobre su fila. | |
| 8 | | El sistema carga la ficha completa del medicamento seleccionado desde la base de datos. |
| 9 | | El sistema muestra el panel de detalle con la información completa del medicamento: código, nombre, laboratorio, lote, stock actual, stock mínimo, precio de venta, fecha de vencimiento, categoría y estado. |
| 10 | | El sistema resalta el estado del stock con el color correspondiente: verde (Normal), amarillo (Bajo) o rojo (Crítico). |
| 11 | El personal visualiza la disponibilidad actual del medicamento y su precio de venta. | |
| 12 | El personal obtiene la información necesaria para atender una consulta o gestionar una dispensación. | |

---

### Flujo alterno 1 – Medicamento no encontrado en la búsqueda

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal ingresa un término de búsqueda que no coincide con ningún medicamento registrado. | |
| 2 | | El sistema filtra la lista pero no encuentra registros que coincidan con el criterio ingresado. |
| 3 | | El sistema muestra el mensaje: "No se encontraron medicamentos con ese criterio de búsqueda." |
| 4 | El personal modifica el término de búsqueda o limpia el campo para ver la lista completa. | |
| 5 | | El sistema actualiza la lista con los resultados del nuevo criterio o restaura la lista completa si se limpia el campo. |
