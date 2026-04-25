# UC-010 – Modificar Medicamento

## j) UC-010 – Modificar Medicamento

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-010 – Modificar Medicamento |
| **Actores** | Personal Autorizado (Administrador, Farmacia) |
| **Propósito** | Permitir al personal autorizado corregir o actualizar la información de un medicamento registrado en MOPGIMED cuando se detecten errores o cuando se produzcan cambios en sus datos, como la recepción de un nuevo lote o la actualización de precios. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-010 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite editar la ficha de un medicamento ya registrado en el inventario. El personal puede modificar cualquier campo de la ficha: nombre, laboratorio, número de lote, stock actual, stock mínimo, costo unitario, precio de venta, fecha de vencimiento, registro sanitario y categoría terapéutica. Al guardar los cambios, el sistema recalcula automáticamente el estado del stock (Normal, Bajo o Crítico) con los nuevos valores ingresados y registra la modificación en el Historial de Actividad. |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con rol Administrador o Farmacia. El medicamento a modificar debe existir en el sistema. |
| **Postcondición** | La ficha del medicamento queda actualizada en la base de datos con los nuevos datos. El estado del stock es recalculado automáticamente. La acción queda registrada en el Historial de Actividad. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Medicamentos" desde el menú lateral izquierdo. | |
| 2 | El personal localiza el medicamento que necesita modificar en la Lista de Medicamentos. | |
| 3 | El personal puede usar el buscador para encontrar más rápido el medicamento si la lista es extensa. | |
| 4 | El personal hace clic en el botón "Editar" (ícono de lápiz) al final de la fila del medicamento. | |
| 5 | | El sistema carga la ficha completa del medicamento seleccionado desde la base de datos. |
| 6 | | El sistema abre el Formulario del Medicamento en modo "Edición" con todos los campos pre-cargados con la información actual. |
| 7 | El personal identifica los campos que necesita modificar. | |
| 8 | El personal actualiza el stock si recibió una nueva provisión del medicamento. | |
| 9 | El personal actualiza el número de lote si corresponde al ingreso de un lote nuevo. | |
| 10 | El personal actualiza la fecha de vencimiento con la del nuevo lote recibido. | |
| 11 | El personal corrige cualquier otro dato incorrecto identificado en la ficha. | |
| 12 | El personal hace clic en el botón "Guardar" para confirmar la actualización. | |
| 13 | | El sistema recibe los datos modificados y los envía al Validador. |
| 14 | | El Validador aplica las mismas verificaciones del registro: campos completos, valores positivos y fecha futura válida. |
| 15 | | El sistema recalcula automáticamente el estado del stock (Normal / Bajo / Crítico) con los nuevos valores de stock actual y stock mínimo. |
| 16 | | El sistema actualiza la ficha del medicamento en la base de datos con todos los campos modificados y el estado recalculado. |
| 17 | | El Registrador de Actividad guarda: usuario, acción "Actualizó medicamento", nombre, código, fecha y hora. |
| 18 | | El sistema cierra el formulario y muestra el mensaje: "Medicamento actualizado correctamente." |
| 19 | | La fila del medicamento en la Lista de Medicamentos se actualiza con los nuevos datos y el estado recalculado. |
| 20 | El personal verifica que los cambios realizados se reflejan correctamente en la ficha del medicamento. | |

---

### Flujo alterno 1 – Datos modificados inválidos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal modifica un campo ingresando un valor inválido (stock negativo, fecha pasada o campo obligatorio vacío). | |
| 2 | El personal presiona "Guardar". | |
| 3 | | El Validador detecta el error en los campos modificados. |
| 4 | | El sistema no guarda ningún cambio y mantiene el formulario abierto con los datos actuales. |
| 5 | | Los campos con error se resaltan en rojo con mensajes de ayuda específicos. |
| 6 | El personal corrige los campos indicados y vuelve a presionar "Guardar". | |
