# UC-009 – Ingresar Metadatos del Medicamento

## i) UC-009 – Ingresar Metadatos del Medicamento

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-009 – Ingresar Metadatos del Medicamento |
| **Actores** | Personal Autorizado (Administrador, Farmacia) |
| **Propósito** | Permitir al personal registrar la información operativa del medicamento, como el costo de compra, número de lote, cantidad de stock ingresado y fecha de vencimiento, completando así la ficha del medicamento en el inventario de MOPGIMED. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-009 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite al personal ingresar y actualizar los datos operativos de cada medicamento registrado: número de lote del proveedor, cantidad de unidades recibidas y registradas como stock actual, costo unitario de compra, precio de venta y fecha de vencimiento del lote. Estos metadatos son fundamentales para el control del inventario, el cálculo del valor del stock y la gestión de vencimientos. Pueden ingresarse al momento del registro inicial del medicamento o actualizarse al recibir un nuevo lote. |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con rol Administrador o Farmacia. Debe estar en el Formulario del Medicamento, ya sea en modo "Registro" o en modo "Edición". |
| **Postcondición** | Los metadatos del medicamento quedan guardados en la ficha correspondiente dentro de la tabla "Fichas de Medicamentos". La acción queda registrada en el Historial de Actividad. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al Formulario del Medicamento en modo "Registro" de un nuevo medicamento o en modo "Edición" de uno existente. | |
| 2 | | El sistema muestra el formulario con los campos de metadatos disponibles: Número de lote, Stock actual, Costo unitario, Precio de venta y Fecha de vencimiento. |
| 3 | El personal hace clic en el campo "Número de lote" e ingresa el código de lote indicado en la documentación del proveedor. | |
| 4 | El personal hace clic en el campo "Stock actual" e ingresa la cantidad de unidades recibidas del medicamento. | |
| 5 | El personal hace clic en el campo "Stock mínimo" e ingresa la cantidad mínima de unidades que debe mantenerse en el inventario. | |
| 6 | El personal hace clic en el campo "Costo unitario" e ingresa el precio de compra por unidad del medicamento en soles. | |
| 7 | El personal hace clic en el campo "Precio de venta" e ingresa el precio al que se venderá o dispensará el medicamento. | |
| 8 | El personal hace clic en el campo "Fecha de vencimiento" y selecciona la fecha de caducidad del lote usando el selector de fecha. | |
| 9 | El personal verifica que todos los metadatos ingresados sean correctos antes de guardar. | |
| 10 | El personal hace clic en el botón "Guardar" para confirmar el registro de los metadatos. | |
| 11 | | El sistema recibe los metadatos y los envía al Validador para verificar su integridad. |
| 12 | | El Validador comprueba que el stock actual y el stock mínimo sean valores numéricos positivos. |
| 13 | | El Validador verifica que el costo unitario y el precio de venta sean valores decimales mayores a cero. |
| 14 | | El Validador confirma que la fecha de vencimiento sea una fecha futura válida. |
| 15 | | El sistema guarda los metadatos en la ficha del medicamento dentro de la base de datos. |
| 16 | | El Registrador de Actividad guarda en el Historial: usuario, acción realizada, medicamento afectado, fecha y hora. |
| 17 | | El sistema muestra el mensaje de confirmación: "Datos del medicamento guardados correctamente." |
| 18 | El personal verifica que la información registrada aparece correctamente en la ficha del medicamento. | |

---

### Flujo alterno 1 – Valores numéricos inválidos o fecha de vencimiento pasada

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal ingresa un valor negativo en el stock, un costo de cero o una fecha de vencimiento anterior a la fecha actual. | |
| 2 | El personal presiona "Guardar". | |
| 3 | | El Validador detecta los valores inválidos en los campos de metadatos. |
| 4 | | El sistema no guarda los datos y mantiene el formulario abierto. |
| 5 | | Los campos con error se resaltan en rojo con mensajes de ayuda: "El stock debe ser mayor a cero", "La fecha de vencimiento debe ser futura". |
| 6 | El personal corrige los campos indicados y vuelve a presionar "Guardar". | |
