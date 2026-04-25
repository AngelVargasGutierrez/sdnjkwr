# UC-005 – Gestionar Medicamentos

## e) UC-005 – Gestionar Medicamentos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-005 – Gestionar Medicamentos |
| **Actores** | Personal Autorizado (Administrador, Farmacia) |
| **Propósito** | Permitir al personal autorizado administrar la información general de los medicamentos registrados en MOPGIMED, incluyendo consulta, actualización y control de datos del inventario farmacéutico. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-005 |
| **Versión** | 1.0 |
| **Descripción** | El sistema proporciona un módulo central de gestión de medicamentos desde el cual el personal puede acceder a toda la información del inventario farmacéutico. Desde este módulo se administran las fichas de medicamentos que contienen: código único, nombre, laboratorio fabricante, número de lote, stock actual, stock mínimo, costo unitario, precio de venta, fecha de vencimiento, registro sanitario y categoría terapéutica. El sistema calcula automáticamente el estado del stock al guardar cualquier ficha: **Normal** si el stock supera el mínimo, **Bajo** si es menor al mínimo pero mayor al 50% del mismo, y **Crítico** si es igual o menor al 50% del mínimo. |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con rol Administrador o Farmacia. El sistema debe tener conexión activa a la base de datos. |
| **Postcondición** | El personal accede al módulo de medicamentos con la información completa y actualizada del inventario farmacéutico. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Medicamentos" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y activa el módulo de Gestión de Medicamentos. |
| 3 | | El sistema envía una consulta a la base de datos para recuperar todas las fichas de medicamentos registradas. |
| 4 | | El sistema recupera los registros desde la tabla "Fichas de Medicamentos" ordenados por código de forma ascendente. |
| 5 | | El sistema calcula el estado de stock de cada medicamento comparando el stock actual con el stock mínimo. |
| 6 | | El sistema muestra la Lista de Medicamentos en formato de tabla con todos sus datos principales. |
| 7 | | Los medicamentos con estado "Crítico" se resaltan en rojo, los de estado "Bajo" en amarillo y los de estado "Normal" en verde. |
| 8 | | El sistema muestra indicadores resumidos en la parte superior: total de medicamentos, cantidad Normal, cantidad Bajo y cantidad Crítico. |
| 9 | El personal visualiza la lista completa del inventario con los indicadores de estado de cada medicamento. | |
| 10 | El personal puede acceder desde este módulo a las acciones de consulta, registro, edición y eliminación de medicamentos. | |
| 11 | El personal hace clic sobre la fila de un medicamento para ver su ficha completa con todos sus datos detallados. | |
| 12 | | El sistema muestra el panel de detalle del medicamento seleccionado con toda su información registrada. |
| 13 | El personal revisa los datos del medicamento y decide qué acción tomar: editar, registrar uno nuevo o eliminar. | |

---

### Flujo alterno 1 – El inventario no tiene medicamentos registrados

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo de Medicamentos por primera vez o tras una limpieza del inventario. | |
| 2 | | El sistema consulta la base de datos pero no encuentra ningún medicamento registrado en la tabla "Fichas de Medicamentos". |
| 3 | | El sistema muestra el mensaje: "No hay medicamentos registrados en el inventario. Haga clic en 'Nuevo Medicamento' para comenzar." |
| 4 | | Los indicadores del resumen muestran el valor cero en todas las categorías. |
| 5 | El personal hace clic en "Nuevo Medicamento" para comenzar a registrar el inventario. | |
