# UC-015 – Visualizar Bandeja de Notificaciones

## o) UC-015 – Visualizar Bandeja de Notificaciones

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-015 – Visualizar Bandeja de Notificaciones |
| **Actores** | Personal Autorizado (Administrador, Farmacia, Jefatura) |
| **Propósito** | Permitir al personal del hospital consultar las alertas generadas automáticamente por el sistema MOPGIMED relacionadas con el estado del stock, vencimientos próximos y otros eventos relevantes del inventario farmacéutico. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-015 |
| **Versión** | 1.0 |
| **Descripción** | El sistema dispone de una Bandeja de Notificaciones accesible desde el ícono de campana en la barra superior de cualquier pantalla del sistema. Desde allí el personal puede ver el listado de alertas activas ordenadas por nivel de urgencia, con información del medicamento afectado y la descripción del evento. El personal puede marcar las notificaciones como leídas una vez que ha tomado las acciones necesarias. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir notificaciones generadas por el sistema en la base de datos. |
| **Postcondición** | El personal visualiza las alertas activas del sistema. Las notificaciones marcadas como leídas quedan registradas como revisadas en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal observa el ícono de campana en la barra superior con un número que indica notificaciones pendientes. | |
| 2 | El personal hace clic en el ícono de campana para abrir la Bandeja de Notificaciones. | |
| 3 | | El sistema abre el panel de notificaciones consultando las alertas activas en la base de datos. |
| 4 | | El sistema muestra las alertas ordenadas de mayor a menor urgencia: Críticas primero, luego Urgentes y finalmente Informativas. |
| 5 | | Para cada notificación se muestra: ícono de color según urgencia, nombre del medicamento, tipo de alerta, descripción breve y fecha y hora de generación. |
| 6 | | Las alertas Críticas se muestran con fondo rojo, las Urgentes con fondo naranja y las Informativas con fondo amarillo. |
| 7 | El personal revisa las alertas activas e identifica las que requieren atención inmediata. | |
| 8 | El personal hace clic sobre una notificación para ver su detalle completo. | |
| 9 | | El sistema muestra el detalle de la alerta: nombre del medicamento, laboratorio, stock actual, stock mínimo, descripción del evento y recomendación de acción. |
| 10 | El personal toma nota del medicamento afectado para gestionar el reabastecimiento o el retiro correspondiente. | |
| 11 | El personal hace clic en "Marcar como leída" para indicar que revisó la notificación. | |
| 12 | | El sistema actualiza el estado de la notificación a "Leída" y la desplaza al final de la lista. |
| 13 | | El contador del ícono de campana se actualiza restando la notificación marcada como leída. |
| 14 | El personal puede hacer clic en "Marcar todas como leídas" para limpiar la bandeja de una vez. | |
| 15 | | El sistema actualiza todas las notificaciones visibles a estado "Leída" y pone en cero el contador de la campana. |
| 16 | El personal cierra el panel de notificaciones y continúa trabajando en el sistema. | |

---

### Flujo alterno 1 – No hay notificaciones activas

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en el ícono de campana para revisar las notificaciones. | |
| 2 | | El sistema abre la bandeja pero no encuentra alertas activas pendientes de revisión. |
| 3 | | El sistema muestra el mensaje: "No hay notificaciones activas. El inventario se encuentra en condiciones normales." |
| 4 | El personal toma nota de que no existen alertas vigentes y cierra el panel. | |
