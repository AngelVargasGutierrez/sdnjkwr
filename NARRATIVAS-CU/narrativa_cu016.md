# UC-016 – Notificar Alertas de Medicamentos

## p) UC-016 – Notificar Alertas de Medicamentos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-016 – Notificar Alertas de Medicamentos |
| **Actores** | Sistema MOPGIMED (proceso automático) |
| **Propósito** | Permitir que el sistema genere y envíe notificaciones automáticas al personal del hospital cuando detecte situaciones críticas en el inventario farmacéutico, como stock bajo, stock crítico o medicamentos próximos a vencer. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-016 |
| **Versión** | 1.0 |
| **Descripción** | El sistema monitorea de forma continua el estado del inventario y genera alertas automáticas cuando detecta condiciones que requieren atención: cuando el stock de un medicamento cae al nivel Bajo o Crítico, cuando un medicamento está próximo a vencer en los próximos 30 días o cuando ya se encuentra vencido. Cada alerta se clasifica con un nivel de urgencia (Informativa, Urgente o Crítica), se guarda en la base de datos y se hace visible en la Bandeja de Notificaciones del sistema para todos los usuarios autenticados. |
| **Precondición** | El sistema MOPGIMED debe estar en funcionamiento con conexión activa a la base de datos. Deben existir medicamentos registrados con stock y fechas de vencimiento definidos. |
| **Postcondición** | Las alertas generadas quedan registradas en la base de datos y aparecen en la Bandeja de Notificaciones del sistema. El contador de notificaciones en la barra superior se actualiza para todos los usuarios conectados. |

---

### Curso normal de eventos – Alerta por stock bajo o crítico

| # | Usuario | Sistema |
|---|---|---|
| 1 | | El sistema monitorea continuamente el estado del inventario mientras está en funcionamiento. |
| 2 | | El sistema detecta que el stock actual de un medicamento ha disminuido a un nivel inferior al stock mínimo establecido. |
| 3 | | El sistema calcula si el stock actual es mayor al 50% del mínimo: en ese caso clasifica la alerta como "Stock Bajo" de nivel Urgente. |
| 4 | | El sistema calcula si el stock actual es igual o menor al 50% del mínimo: en ese caso clasifica la alerta como "Stock Crítico" de nivel Crítico. |
| 5 | | El Generador de Alertas crea la notificación con: nombre del medicamento, laboratorio, stock actual, stock mínimo, tipo de alerta y nivel de urgencia. |
| 6 | | El sistema guarda la alerta en la tabla de notificaciones de la base de datos con la fecha y hora exacta de generación. |
| 7 | | El sistema actualiza el contador del ícono de campana en la barra superior para todos los usuarios conectados. |
| 8 | El personal visualiza el número actualizado en el ícono de campana e identifica que hay nuevas alertas pendientes. | |

---

### Curso normal de eventos – Alerta por vencimiento próximo o vencimiento ocurrido

| # | Usuario | Sistema |
|---|---|---|
| 1 | | El sistema revisa diariamente las fechas de vencimiento de todos los medicamentos registrados. |
| 2 | | El sistema detecta que la fecha de vencimiento de un medicamento está dentro de los próximos 30 días. |
| 3 | | El sistema crea una alerta de tipo "Próximo a vencer" de nivel Urgente indicando: nombre, laboratorio, lote, stock disponible y días restantes. |
| 4 | | El sistema detecta que la fecha de vencimiento de otro medicamento ya ha pasado. |
| 5 | | El sistema crea una alerta de tipo "Medicamento vencido" de nivel Crítico indicando: nombre, laboratorio, lote, stock afectado y días transcurridos desde el vencimiento. |
| 6 | | El sistema guarda ambas alertas en la base de datos con la fecha y hora exacta. |
| 7 | | El sistema actualiza el contador de notificaciones en la barra superior del sistema. |
| 8 | El personal recibe las alertas en su Bandeja de Notificaciones para gestionar los medicamentos afectados. | |

---

### Flujo alterno 1 – Alerta ya existente para el mismo medicamento

| # | Usuario | Sistema |
|---|---|---|
| 1 | | El sistema detecta una condición de alerta para un medicamento que ya tiene una notificación activa del mismo tipo. |
| 2 | | El sistema verifica si ya existe una alerta activa y no leída para ese medicamento y tipo de evento. |
| 3 | | El sistema actualiza la alerta existente con la información más reciente en lugar de crear una duplicada. |
| 4 | | El contador de notificaciones no se incrementa ya que la alerta no es nueva sino una actualización. |
