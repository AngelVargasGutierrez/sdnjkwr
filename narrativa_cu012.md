# UC-012 – Visualizar Medicamentos por Vencer y Vencidos

## l) UC-012 – Visualizar Medicamentos por Vencer y Vencidos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-012 – Visualizar Medicamentos por Vencer y Vencidos |
| **Actores** | Personal Autorizado (Administrador, Farmacia, Jefatura) |
| **Propósito** | Permitir al personal consultar el listado de medicamentos cuya fecha de vencimiento es inminente o que ya han vencido, para facilitar acciones de control, retiro o reposición del inventario. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-012 |
| **Versión** | 1.0 |
| **Descripción** | El sistema mantiene un módulo de control de vencimientos que clasifica automáticamente los medicamentos en dos categorías: "Próximos a vencer" (fecha de vencimiento dentro de los próximos 30 días) y "Vencidos" (fecha de vencimiento anterior a la fecha actual). El personal puede consultar ambos listados con la información detallada de cada medicamento afectado, incluyendo nombre, laboratorio, lote, stock disponible, fecha de vencimiento y días restantes o días transcurridos desde el vencimiento. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir medicamentos con fechas de vencimiento registradas. |
| **Postcondición** | El personal visualiza el listado de medicamentos próximos a vencer y vencidos. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Vencimientos" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y carga el módulo de Control de Vencimientos. |
| 3 | | El sistema consulta la tabla "Fichas de Medicamentos" comparando la fecha de vencimiento de cada medicamento con la fecha actual. |
| 4 | | El sistema clasifica los medicamentos en dos grupos: "Próximos a vencer" (vencen en los próximos 30 días) y "Vencidos" (ya superaron su fecha de caducidad). |
| 5 | | El sistema muestra dos secciones diferenciadas en pantalla: una para próximos a vencer y otra para medicamentos ya vencidos. |
| 6 | | Para cada medicamento próximo a vencer se muestra: nombre, laboratorio, número de lote, stock actual, fecha de vencimiento y días restantes. |
| 7 | | Para cada medicamento vencido se muestra: nombre, laboratorio, lote, stock actual, fecha de vencimiento y días transcurridos desde el vencimiento. |
| 8 | | Los medicamentos vencidos se resaltan con indicador rojo y los próximos a vencer con indicador naranja. |
| 9 | | El sistema muestra contadores resumidos en la parte superior: total de medicamentos próximos a vencer y total de medicamentos vencidos. |
| 10 | El personal visualiza el listado completo e identifica los medicamentos que requieren atención inmediata. | |
| 11 | El personal puede hacer clic sobre un medicamento para ver su ficha completa con todos los datos del registro. | |
| 12 | | El sistema muestra el detalle del medicamento seleccionado incluyendo toda su información de ficha. |
| 13 | El personal toma nota de los medicamentos que deben ser retirados del inventario o repuestos con un lote vigente. | |

---

### Flujo alterno 1 – No hay medicamentos próximos a vencer ni vencidos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo de Vencimientos para revisar el estado del inventario. | |
| 2 | | El sistema consulta la base de datos pero no encuentra medicamentos vencidos ni próximos a vencer en los próximos 30 días. |
| 3 | | El sistema muestra el mensaje: "No hay medicamentos próximos a vencer ni medicamentos vencidos en el inventario actual." |
| 4 | | Los contadores muestran el valor cero en ambas categorías. |
| 5 | El personal toma nota de que el inventario no presenta alertas de vencimiento vigentes. | |
