# UC-023 – Visualizar Dashboard Analítico

## w) UC-023 – Visualizar Dashboard Analítico

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-023 – Visualizar Dashboard Analítico |
| **Actores** | Administrador, Jefatura |
| **Propósito** | Permitir al personal autorizado acceder a un panel de control visual con indicadores generales del inventario farmacéutico, que incluye gráficos, resúmenes y métricas actualizadas que apoyan la gestión y supervisión del inventario de MOPGIMED. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-023 |
| **Versión** | 1.0 |
| **Descripción** | El sistema presenta un Dashboard Analítico que consolida en una sola pantalla los principales indicadores del inventario: distribución del stock por estado (Normal, Bajo, Crítico) mediante gráfico de torta, evolución del inventario en el tiempo con gráfico de líneas, medicamentos más dispensados del período con gráfico de barras, resumen de vencimientos próximos y cantidad de alertas activas. Los datos del dashboard se actualizan en tiempo real cada vez que se registran movimientos o cambios en el inventario. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con rol Administrador o Jefatura. Deben existir medicamentos registrados y movimientos en el historial. |
| **Postcondición** | El personal visualiza el dashboard con todos los indicadores actualizados. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal hace clic en la opción "Dashboard" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y carga el módulo del Dashboard Analítico. |
| 3 | | El sistema consulta la base de datos para obtener los datos más recientes del inventario. |
| 4 | | El sistema calcula los indicadores del estado del stock: cantidad de medicamentos Normal, Bajo y Crítico. |
| 5 | | El sistema genera el gráfico de torta mostrando la distribución porcentual del inventario por estado de stock. |
| 6 | | El sistema recupera el historial de movimientos del mes actual y genera el gráfico de líneas con la evolución del inventario. |
| 7 | | El sistema identifica los medicamentos con mayor número de salidas en el mes y genera el gráfico de barras de mayor rotación. |
| 8 | | El sistema calcula la cantidad de medicamentos próximos a vencer en los próximos 30 días y los vencidos. |
| 9 | | El sistema contabiliza las alertas activas no leídas en la bandeja de notificaciones. |
| 10 | | El sistema muestra el Dashboard con todos los indicadores: gráfico de torta de stock, gráfico de líneas de evolución, gráfico de barras de rotación, tarjetas de resumen de vencimientos y alertas. |
| 11 | El personal visualiza el dashboard completo con todos los indicadores del inventario actualizados. | |
| 12 | El personal hace clic sobre un indicador del gráfico de torta para ver el detalle de los medicamentos en ese estado. | |
| 13 | | El sistema muestra el listado de medicamentos del estado seleccionado con sus datos de stock. |
| 14 | El personal hace clic sobre una barra del gráfico de rotación para ver el detalle de un medicamento específico. | |
| 15 | | El sistema muestra la ficha del medicamento seleccionado con su historial de consumo. |
| 16 | El personal puede seleccionar el período de análisis del dashboard usando el selector de tiempo en la parte superior. | |
| 17 | | El sistema actualiza todos los gráficos e indicadores para el período seleccionado. |

---

### Flujo alterno 1 – Datos insuficientes para mostrar los gráficos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al dashboard pero el sistema tiene pocos medicamentos o movimientos registrados. | |
| 2 | | El sistema detecta que no hay suficientes datos para generar uno o más gráficos del dashboard. |
| 3 | | El sistema muestra los gráficos disponibles con la información existente y en los gráficos sin datos suficientes muestra el mensaje: "Sin datos suficientes para este período." |
| 4 | El personal visualiza los indicadores disponibles y comprende que los gráficos incompletos se actualizarán conforme se registren más movimientos. | |
