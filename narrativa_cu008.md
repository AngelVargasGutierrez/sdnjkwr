# UC-008 – Filtrar por Laboratorio

## h) UC-008 – Filtrar por Laboratorio

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-008 – Filtrar por Laboratorio |
| **Actores** | Personal Autorizado (Farmacia, Jefatura, Administrador) |
| **Propósito** | Permitir al personal refinar la búsqueda de medicamentos según el laboratorio fabricante para localizar con mayor precisión los productos de un proveedor específico dentro del inventario. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-008 |
| **Versión** | 1.0 |
| **Descripción** | El sistema ofrece un filtro por laboratorio fabricante disponible en los módulos de búsqueda y listado de medicamentos. Al seleccionar un laboratorio del catálogo registrado, el sistema actualiza la lista de resultados mostrando únicamente los medicamentos que corresponden al laboratorio elegido. El filtro puede combinarse con otros criterios de búsqueda como nombre o categoría terapéutica. |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir medicamentos registrados en el sistema asociados a distintos laboratorios. |
| **Postcondición** | La lista de medicamentos se actualiza mostrando solo los registros del laboratorio seleccionado. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Medicamentos" o al "Buscador Inteligente" desde el menú lateral. | |
| 2 | | El sistema carga la lista completa de medicamentos y muestra los filtros disponibles en la parte superior. |
| 3 | El personal hace clic en el filtro "Laboratorio" para desplegar las opciones disponibles. | |
| 4 | | El sistema muestra el listado de laboratorios registrados en el catálogo del sistema. |
| 5 | El personal selecciona el laboratorio fabricante por el cual desea filtrar los resultados. | |
| 6 | | El sistema recibe la selección y aplica el filtro sobre la lista de medicamentos. |
| 7 | | El sistema actualiza la lista mostrando únicamente los medicamentos asociados al laboratorio seleccionado. |
| 8 | | El sistema actualiza el contador de resultados mostrando la cantidad de medicamentos encontrados para ese laboratorio. |
| 9 | El personal revisa la lista filtrada para identificar los medicamentos del laboratorio seleccionado. | |
| 10 | El personal puede combinar el filtro de laboratorio con el campo de búsqueda por nombre o categoría para una búsqueda más precisa. | |
| 11 | | El sistema aplica ambos criterios simultáneamente y muestra los resultados que cumplan con todos los filtros activos. |
| 12 | El personal hace clic en "Limpiar filtros" para volver a ver la lista completa sin filtros aplicados. | |
| 13 | | El sistema elimina el filtro de laboratorio y restaura la lista completa de medicamentos. |

---

### Flujo alterno 1 – No hay medicamentos del laboratorio seleccionado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal selecciona un laboratorio del filtro pero no hay medicamentos de ese laboratorio en el inventario. | |
| 2 | | El sistema aplica el filtro pero no encuentra registros coincidentes. |
| 3 | | El sistema muestra el mensaje: "No se encontraron medicamentos del laboratorio seleccionado en el inventario." |
| 4 | El personal selecciona otro laboratorio del filtro o limpia el filtro para ver el listado completo. | |
