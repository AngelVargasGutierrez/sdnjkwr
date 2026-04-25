# UC-013 – Visualizar Semáforo de Medicamentos

## m) UC-013 – Visualizar Semáforo de Medicamentos

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-013 – Visualizar Semáforo de Medicamentos |
| **Actores** | Personal Autorizado (Administrador, Farmacia, Jefatura) |
| **Propósito** | Permitir al personal del hospital identificar visualmente el estado del stock de cada medicamento a través de indicadores de color (semáforo) que clasifican el inventario en niveles de disponibilidad: Normal, Bajo o Crítico. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-013 |
| **Versión** | 1.0 |
| **Descripción** | El sistema muestra un semáforo de stock que clasifica cada medicamento automáticamente según la relación entre su stock actual y su stock mínimo: **Normal** (stock mayor al mínimo, indicador verde), **Bajo** (stock menor al mínimo pero mayor al 50% del mismo, indicador amarillo) y **Crítico** (stock igual o menor al 50% del mínimo, indicador rojo). Este semáforo es visible en la Lista de Medicamentos y en el Panel Principal del sistema, permitiendo una identificación visual rápida de los medicamentos que requieren atención. |
| **Precondición** | El usuario debe haber iniciado sesión en MOPGIMED con cualquier rol válido. Deben existir medicamentos registrados con stock actual y stock mínimo definidos. |
| **Postcondición** | El personal visualiza los indicadores del semáforo actualizados. No se realizan cambios en la base de datos. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo "Medicamentos" o al "Panel Principal" del sistema. | |
| 2 | | El sistema carga los medicamentos registrados y calcula el estado del stock de cada uno. |
| 3 | | Para cada medicamento, el sistema compara el stock actual con el stock mínimo registrado. |
| 4 | | Si el stock actual supera el stock mínimo, el sistema asigna el estado "Normal" con indicador verde. |
| 5 | | Si el stock actual es menor al mínimo pero mayor al 50% del mismo, el sistema asigna el estado "Bajo" con indicador amarillo. |
| 6 | | Si el stock actual es igual o menor al 50% del mínimo, el sistema asigna el estado "Crítico" con indicador rojo. |
| 7 | | El sistema muestra en la parte superior del módulo los contadores del semáforo: cantidad de medicamentos Normal, Bajo y Crítico. |
| 8 | | Cada medicamento en la lista incluye su indicador de color a la izquierda del nombre para identificación rápida. |
| 9 | El personal identifica de un vistazo los medicamentos que requieren atención mediante los colores del semáforo. | |
| 10 | El personal hace clic en el contador "Crítico" para filtrar y ver solo los medicamentos en estado crítico. | |
| 11 | | El sistema filtra la lista mostrando únicamente los medicamentos con stock igual o menor al 50% del mínimo. |
| 12 | El personal puede hacer clic en "Bajo" para ver los medicamentos con stock reducido que también requieren seguimiento. | |
| 13 | | El sistema actualiza la lista mostrando los medicamentos en estado Bajo. |
| 14 | El personal hace clic en "Normal" o en "Todos" para regresar a la vista completa del inventario. | |
| 15 | | El sistema restaura la lista mostrando todos los medicamentos con sus respectivos indicadores de color. |

---

### Flujo alterno 1 – Todos los medicamentos en estado Normal

| # | Usuario | Sistema |
|---|---|---|
| 1 | El personal accede al módulo de Medicamentos para revisar el semáforo del inventario. | |
| 2 | | El sistema calcula el estado de todos los medicamentos y determina que ninguno está en estado Bajo ni Crítico. |
| 3 | | El sistema muestra el contador del semáforo con todos los medicamentos en estado "Normal" y los contadores de Bajo y Crítico en cero. |
| 4 | El personal toma nota de que el inventario se encuentra en condiciones normales sin alertas de stock activas. | |
