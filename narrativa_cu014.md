# UC-014 – Filtrar Lista de Vencimientos

## n) UC-014 – Filtrar Lista de Vencimientos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-014 – Filtrar Lista de Vencimientos |
| **Actores** | Personal Autorizado (Administrador, Farmacia, Jefatura) |
| **Propósito** | Permitir al personal aplicar filtros sobre el listado de medicamentos por vencer o vencidos, refinando la consulta por laboratorio fabricante, mes o año para obtener una vista más precisa y acotada del control de caducidades. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-014 |
| **Versión** | 1.0 |
| **Descripción** | El sistema ofrece filtros combinables disponibles en el módulo de Vencimientos que permiten acotar el listado de medicamentos próximos a vencer o vencidos. Los filtros disponibles son: laboratorio fabricante, mes de vencimiento y año de vencimiento. El personal puede aplicar uno o más filtros simultáneamente para consultar, por ejemplo, los medicamentos de un laboratorio específico que vencen en un mes determinado. Al limpiar los filtros, la lista vuelve a mostrar todos los vencimientos sin restricciones. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. El módulo de Vencimientos debe estar activo y con medicamentos listados. |
| **Postcondición** | La lista de vencimientos se actualiza mostrando únicamente los medicamentos que cumplen con los filtros aplicados. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Vencimientos" desde el menú lateral izquierdo. | |
| 2 | | El sistema muestra la lista completa de medicamentos próximos a vencer y vencidos con los controles de filtro en la parte superior. |
| 3 | El personal hace clic en el filtro "Laboratorio" para desplegar el listado de laboratorios disponibles. | |
| 4 | | El sistema muestra el listado de laboratorios que tienen medicamentos con alertas de vencimiento. |
| 5 | El personal selecciona el laboratorio por el cual desea filtrar. | |
| 6 | | El sistema aplica el filtro y actualiza la lista mostrando solo los medicamentos del laboratorio seleccionado. |
| 7 | El personal selecciona el mes en el filtro "Mes" para consultar los vencimientos de un mes específico. | |
| 8 | | El sistema aplica el filtro de mes combinado con el filtro de laboratorio ya activo. |
| 9 | El personal selecciona el año en el filtro "Año" para acotar aún más la búsqueda. | |
| 10 | | El sistema aplica el filtro de año y combina los tres filtros activos: laboratorio, mes y año. |
| 11 | | El sistema actualiza la lista mostrando solo los medicamentos que cumplen con todos los criterios seleccionados. |
| 12 | | El sistema actualiza los contadores resumidos reflejando la cantidad de medicamentos filtrados. |
| 13 | El personal revisa los resultados filtrados para planificar las acciones de retiro o reposición correspondientes. | |
| 14 | El personal hace clic en "Limpiar filtros" para volver a ver el listado completo de vencimientos. | |
| 15 | | El sistema elimina todos los filtros activos y restaura la lista completa de medicamentos por vencer y vencidos. |

---

### Flujo alterno 1 – No hay resultados para los filtros aplicados

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal aplica uno o más filtros sobre la lista de vencimientos. | |
| 2 | | El sistema aplica los criterios pero no encuentra medicamentos que cumplan con la combinación de filtros seleccionada. |
| 3 | | El sistema muestra el mensaje: "No se encontraron medicamentos con los filtros aplicados. Intente modificar los criterios de búsqueda." |
| 4 | El personal modifica o elimina alguno de los filtros para ampliar los resultados. | |
| 5 | | El sistema actualiza la lista con los resultados del nuevo conjunto de filtros. |
