# UC-002 – Gestionar Usuarios

## b) UC-002 – Gestionar Usuarios

| Campo | Detalle |
|---|---|
| **Caso de uso** | UC-002 – Gestionar Usuarios |
| **Actores** | Administrador |
| **Propósito** | Permitir al Administrador registrar nuevos usuarios del sistema, consultar los existentes, modificar su información y habilitar o deshabilitar cuentas para controlar correctamente los accesos a MOPGIMED. |
| **Tipo** | Obligatorio (X) / Opcional ( ) |
| **Requisito ID (RF)** | RF-002 |
| **Versión** | 1.0 |
| **Descripción** | El sistema permite al Administrador gestionar de forma completa las cuentas de acceso al sistema. Puede registrar nuevos usuarios ingresando su nombre completo, nombre de usuario, contraseña, cargo y rol. También puede consultar la lista de usuarios activos e inactivos, editar su información y cambiar su estado. Toda acción sobre usuarios queda registrada en el Historial de Actividad. |
| **Precondición** | El Administrador debe haber iniciado sesión correctamente en MOPGIMED con rol Administrador. |
| **Postcondición** | El usuario queda registrado, actualizado, habilitado o deshabilitado en la base de datos del sistema. La acción queda registrada en el Historial de Actividad. |

---

### Curso normal de eventos – Consultar usuarios

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador hace clic en la opción "Usuarios" del menú lateral izquierdo. | |
| 2 | | El sistema recibe la solicitud y carga el módulo de Gestión de Usuarios. |
| 3 | | El sistema consulta la base de datos y recupera todos los usuarios registrados. |
| 4 | | El sistema muestra la Lista de Usuarios en tabla con: nombre completo, nombre de usuario, rol, cargo y estado. |
| 5 | | Los usuarios "Activo" se muestran con indicador verde y los "Inactivo" con indicador gris. |
| 6 | El Administrador visualiza la lista y escribe en el campo de búsqueda para encontrar un usuario específico. | |
| 7 | | El sistema filtra la lista en tiempo real mostrando los usuarios que coincidan con el texto ingresado. |
| 8 | El Administrador ubica al usuario buscado y puede ver su información completa. | |

---

### Curso normal de eventos – Registrar nuevo usuario

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador hace clic en el botón "Nuevo Usuario" en la parte superior del módulo. | |
| 2 | | El sistema abre el Formulario de Usuario en modo "Registro" con todos los campos vacíos. |
| 3 | | El formulario presenta los campos: Nombre completo, Nombre de usuario, Contraseña, Confirmar contraseña, Cargo y Rol. |
| 4 | El Administrador ingresa el nombre completo del nuevo integrante del personal. | |
| 5 | El Administrador define el nombre de usuario que se usará para iniciar sesión. | |
| 6 | El Administrador ingresa la contraseña inicial y la confirma en el campo de verificación. | |
| 7 | El Administrador ingresa el cargo del usuario dentro del hospital. | |
| 8 | El Administrador selecciona el rol: Administrador, Jefatura o Farmacia. | |
| 9 | El Administrador hace clic en el botón "Guardar". | |
| 10 | | El sistema envía los datos al Validador para verificar su integridad. |
| 11 | | El Validador comprueba que todos los campos obligatorios estén completos. |
| 12 | | El Validador verifica que el nombre de usuario no exista ya en la base de datos. |
| 13 | | El Validador confirma que las contraseñas ingresadas en ambos campos coincidan. |
| 14 | | El sistema guarda el nuevo usuario en la base de datos con estado "Activo". |
| 15 | | El Registrador de Actividad guarda en el Historial: Administrador, acción "Creó usuario", nombre de usuario, fecha y hora. |
| 16 | | El sistema cierra el formulario y muestra el mensaje: "Usuario registrado correctamente." |
| 17 | El Administrador verifica que el nuevo usuario aparece en la lista con estado Activo. | |

---

### Curso normal de eventos – Editar usuario

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador localiza el usuario que necesita modificar en la Lista de Usuarios. | |
| 2 | El Administrador hace clic en el botón "Editar" (ícono de lápiz) al final de la fila del usuario. | |
| 3 | | El sistema carga la información actual y abre el Formulario de Usuario en modo "Edición" con los campos pre-cargados. |
| 4 | El Administrador modifica los campos que necesita actualizar: nombre, cargo o contraseña. | |
| 5 | El Administrador hace clic en "Guardar" para confirmar los cambios. | |
| 6 | | El sistema envía los datos modificados al Validador y aplica las mismas verificaciones del registro. |
| 7 | | El sistema actualiza el registro del usuario en la base de datos. |
| 8 | | El Registrador de Actividad guarda: Administrador, acción "Actualizó usuario", nombre de usuario, fecha y hora. |
| 9 | | El sistema muestra el mensaje: "Usuario actualizado correctamente." |
| 10 | El Administrador verifica que los cambios se reflejan en la Lista de Usuarios. | |

---

### Curso normal de eventos – Deshabilitar o habilitar usuario

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador localiza el usuario cuyo estado desea cambiar en la lista. | |
| 2 | El Administrador hace clic en el botón de cambio de estado al final de la fila. | |
| 3 | | El sistema muestra una ventana de confirmación: "¿Desea deshabilitar la cuenta de [usuario]?" o "¿Desea habilitar la cuenta de [usuario]?" |
| 4 | El Administrador hace clic en "Confirmar". | |
| 5 | | El sistema cambia el campo Estado del usuario a "Inactivo" o "Activo" según corresponda. |
| 6 | | Si fue deshabilitado, cualquier sesión activa de ese usuario queda invalidada automáticamente. |
| 7 | | El Registrador de Actividad guarda: Administrador, acción "Deshabilitó usuario" o "Habilitó usuario", fecha y hora. |
| 8 | | El sistema actualiza la lista reflejando el nuevo estado del usuario. |
| 9 | | El sistema muestra el mensaje: "Estado del usuario actualizado correctamente." |
| 10 | El Administrador verifica el cambio de estado en la Lista de Usuarios. | |

---

### Flujo alterno 1 – Datos incompletos o nombre de usuario duplicado

| # | Usuario | Sistema |
|---|---|---|
| 1 | El Administrador completa el formulario pero deja un campo vacío o ingresa un nombre de usuario ya existente. | |
| 2 | El Administrador presiona "Guardar". | |
| 3 | | El Validador detecta el error: campo vacío, contraseñas que no coinciden o nombre duplicado. |
| 4 | | El sistema no guarda ningún dato y mantiene el formulario abierto. |
| 5 | | El sistema muestra el mensaje de error específico y resalta con borde rojo los campos con problema. |
| 6 | El Administrador corrige los campos indicados y vuelve a presionar "Guardar". | |
