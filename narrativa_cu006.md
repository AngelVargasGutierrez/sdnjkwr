# UC-006 – Registrar Medicamento

## f) UC-006 – Registrar Medicamento

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-006 – Registrar Medicamento |
| **Actores** | Personal Autorizado (Administrador, Farmacia) |
| **Propósito** | Permitir al personal autorizado incorporar nuevos medicamentos al inventario de MOPGIMED mediante el registro completo de su información correspondiente. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-006 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite al personal registrar nuevos medicamentos en el inventario completando un formulario con todos los campos requeridos: código único, nombre del medicamento, laboratorio fabricante, número de lote, stock actual, stock mínimo, costo unitario, precio de venta, fecha de vencimiento, número de registro sanitario y categoría terapéutica. Al guardar, el sistema valida los datos, calcula automáticamente el estado del stock (Normal, Bajo o Crítico) y registra la acción en el Historial de Actividad. |
| **Precondición** | El personal debe haber iniciado sesión en MOPGIMED con rol Administrador o Farmacia. El medicamento a registrar no debe existir previamente en el sistema. |
| **Postcondición** | El nuevo medicamento queda guardado en la tabla "Fichas de Medicamentos" con su estado de stock calculado automáticamente. La acción queda registrada en el Historial de Actividad. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal, estando en el módulo de Medicamentos, hace clic en el botón "Nuevo Medicamento". | |
| 2 | | El sistema abre el Formulario del Medicamento en modo "Registro" con todos los campos vacíos. |
| 3 | | El formulario presenta los campos: Código, Nombre, Laboratorio, Lote, Stock actual, Stock mínimo, Costo unitario, Precio de venta, Fecha de vencimiento, Registro sanitario y Categoría terapéutica. |
| 4 | El personal ingresa el código del medicamento siguiendo el formato de la farmacia (por ejemplo: FARM-ANL001). | |
| 5 | El personal ingresa el nombre completo del medicamento. | |
| 6 | El personal selecciona el laboratorio fabricante desde el catálogo disponible en el sistema. | |
| 7 | El personal ingresa el número de lote del medicamento recibido. | |
| 8 | El personal ingresa la cantidad de unidades en stock actual y el stock mínimo requerido. | |
| 9 | El personal ingresa el costo unitario de compra y el precio de venta al público en soles. | |
| 10 | El personal selecciona la fecha de vencimiento del medicamento usando el selector de fecha. | |
| 11 | El personal ingresa el número de registro sanitario del medicamento. | |
| 12 | El personal selecciona la categoría terapéutica correspondiente desde el catálogo del sistema. | |
| 13 | El personal hace clic en el botón "Guardar" para registrar el medicamento. | |
| 14 | | El sistema recibe los datos del formulario y los envía al Validador. |
| 15 | | El Validador comprueba que todos los campos obligatorios estén completos. |
| 16 | | El Validador verifica que el código del medicamento no exista ya en la base de datos. |
| 17 | | El Validador confirma que el stock actual y mínimo sean valores numéricos positivos. |
| 18 | | El Validador verifica que la fecha de vencimiento sea una fecha futura válida. |
| 19 | | El Validador confirma que el laboratorio y la categoría seleccionados existen en el catálogo. |
| 20 | | El sistema calcula automáticamente el estado inicial: Normal, Bajo o Crítico, según el stock actual frente al stock mínimo. |
| 21 | | El sistema guarda la nueva ficha en la tabla "Fichas de Medicamentos" con el estado calculado. |
| 22 | | El Registrador de Actividad guarda: usuario, acción "Creó nuevo medicamento", nombre, código, fecha y hora. |
| 23 | | El sistema cierra el formulario y muestra el mensaje: "Medicamento registrado correctamente." |
| 24 | El personal verifica que el nuevo medicamento aparece en la lista con el estado y los datos ingresados. | |

---

### Flujo alterno 1 – Datos incompletos o código duplicado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal completa el formulario pero omite un campo obligatorio o ingresa un código que ya existe en el sistema. | |
| 2 | El personal presiona el botón "Guardar". | |
| 3 | | El Validador detecta el error: campo vacío, valor inválido o código duplicado. |
| 4 | | El sistema no guarda ningún dato y mantiene el formulario abierto con la información ingresada. |
| 5 | | El sistema muestra el mensaje de alerta con la lista de errores específicos. |
| 6 | | Cada campo con error se resalta con borde rojo y un mensaje de ayuda indicando qué se espera. |
| 7 | El personal corrige los campos indicados y vuelve a presionar "Guardar". | |
