# UC-003 – Asignar Rol

## c) UC-003 – Asignar Rol

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-003 – Asignar Rol |
| **Actores** | Administrador |
| **Propósito** | Permitir al Administrador asignar o cambiar el perfil de acceso de un usuario del sistema según su función dentro del hospital, controlando los módulos y funcionalidades disponibles para cada persona. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-003 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite al Administrador seleccionar un usuario registrado y asignarle o cambiarle el rol que define sus permisos de acceso dentro de MOPGIMED. Los roles disponibles son: **Administrador** (acceso completo al sistema, incluyendo gestión de usuarios), **Jefatura** (acceso a reportes, análisis con IA e indicadores del inventario) y **Farmacia** (acceso a inventario, medicamentos y alertas). Al confirmar el cambio, los nuevos permisos se aplican de forma inmediata. La acción queda registrada en el Historial de Actividad. |
| **Precondición** | El Administrador debe haber iniciado sesión en MOPGIMED con rol Administrador. El usuario al que se le asignará el rol debe estar registrado en el sistema. |
| **Postcondición** | El rol del usuario queda actualizado en la base de datos. Los permisos del usuario se aplican de forma inmediata. La acción queda registrada en el Historial de Actividad. |

---

### Curso normal de eventos

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador accede al módulo "Usuarios" desde el menú lateral izquierdo. | |
| 2 | | El sistema muestra la Lista de Usuarios con nombre, cargo, rol actual y estado de cada usuario. |
| 3 | El Administrador localiza al usuario cuyo rol desea asignar o cambiar. | |
| 4 | El Administrador hace clic en el botón "Editar" (ícono de lápiz) al final de la fila del usuario. | |
| 5 | | El sistema abre el Formulario de Usuario en modo "Edición" con todos los datos actuales pre-cargados. |
| 6 | | El campo "Rol" muestra el rol actualmente asignado al usuario. |
| 7 | El Administrador hace clic en el campo "Rol" para desplegar las opciones disponibles. | |
| 8 | | El sistema muestra el listado de roles: Administrador, Jefatura y Farmacia, con una breve descripción de cada uno. |
| 9 | El Administrador selecciona el nuevo rol que desea asignar al usuario. | |
| 10 | El Administrador hace clic en el botón "Guardar" para confirmar el cambio de rol. | |
| 11 | | El sistema recibe la solicitud y verifica que el rol seleccionado sea válido dentro del catálogo. |
| 12 | | El sistema actualiza el campo "Rol" del usuario en la base de datos con el nuevo valor seleccionado. |
| 13 | | El sistema aplica de forma inmediata los permisos correspondientes al nuevo rol asignado. |
| 14 | | Si el usuario tiene una sesión activa, los nuevos permisos se actualizan en su próximo acceso al sistema. |
| 15 | | El Registrador de Actividad guarda en el Historial: Administrador responsable, acción "Cambió rol de usuario", nombre del usuario, rol anterior, nuevo rol, fecha y hora. |
| 16 | | El sistema cierra el formulario y muestra el mensaje: "Rol del usuario actualizado correctamente." |
| 17 | | La Lista de Usuarios se actualiza mostrando el nuevo rol asignado al usuario modificado. |
| 18 | El Administrador verifica en la lista que el usuario refleja el nuevo rol asignado. | |

---

### Flujo alterno 1 – Rol no seleccionado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador abre el formulario de edición de un usuario pero no selecciona ningún rol en el campo correspondiente. | |
| 2 | El Administrador presiona el botón "Guardar" con el campo Rol vacío. | |
| 3 | | El Validador detecta que el campo "Rol" está vacío y es obligatorio. |
| 4 | | El sistema no guarda ningún cambio y mantiene el formulario abierto. |
| 5 | | El sistema resalta con borde rojo el campo "Rol" y muestra el mensaje: "Debe seleccionar un rol para el usuario." |
| 6 | El Administrador selecciona un rol válido y vuelve a presionar "Guardar". | |
