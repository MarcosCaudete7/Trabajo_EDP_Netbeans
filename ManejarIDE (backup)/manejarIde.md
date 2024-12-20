# 3. Aprender a manejar NetBeans

### 3.1 Configuración básica

<details>
<summary>3.1.1 JDK</summary>

* Tools -> Java Platforms
* Projects -> Java Dependecies
* Tools -> Java Platforms -> Add platform

##### Netbeans 23, necesita JDK 17+

</details>

<details>
<summary>3.1.2 Compilados</summary>

![](../../static/img/compilado.PNG)

</details>

<details>
<summary>3.1.3 Carpeta Test</summary>

* Clic derecho en el nombre del proyecto.New > Java Class.
En el campo Package, escribe “test” para crear la carpeta de test.


</details>

<details>
<summary>3.1.4 Librerías, dependecias</summary>

* Tools -> Libraries
* Projects -> Dependencies

</details>

### 3.2 Ejecutar un programa

<details>
<summary>Formas de ejecutar un programa</summary>

##### Para ejecutar un programa en netbeans existen varias opciones: 

* Botón de run Project.
* Pestaña Run -> Run project
* Pestaña Run -> Run File
* F6 -> Run Project
* Mayús + F6 -> Run File

![](../../static/img/play.PNG)

</details>

### 3.3 Debug en netbeans

<details>
<summary>Como hacer Debug</summary>

##### Al hacer click derecho sobre breakpoint -> Properties, se pueden añadir condiciones y otros parámetros.

* Debug Project -> Botón Debug | Crtl + F5 | Debug -> Debug Project
* Debug File -> Debug -> Debug File | Crtl + Mayús + F5
* Debug Test File -> Debug Test File | Crtl + Mayús + F6
* Step over -> F8
* Step over expression -> Mayús + F8
* Step Into -> F7
* Step out -> Crtl + F7

##### Al hacer debug, se creará una nueva ventana debajo de Navigator, dónde se verán todos los breakpoints. Y se podrán modificar y crear nuevos.

</details>

### 3.4 Atajos de teclado

<details>
<summary>Algunos atajos de teclado</summary>

* Ctrl + Espacio -> Sugerencias de código

* Ctrl + Shift + I -> Realizar importaciones automáticas de librerías necesarias

* Ctrl + E -> Eliminar la línea actual.

* Alt + Shift + F -> Organizar código.

* Ctrl + Shift + U -> Crear test.

* Ctrl + Shift + D -> Acceder a las últimas cinco copias del portapapeles.

* Ctrl + Shift + C -> Comentar línea seleccionada.

* Shift + Suprimir -> Cortar línea actual.

* Ctrl + K -> Autocompletar código.

* for + Tabulador -> Insertar un bucle for.

* Ctrl + Shift + Flecha Abajo -> Duplicar línea seleccionada.

* Ctrl + 4 -> Mostrar output (consola de salida).

* Ctrl + Shift + R -> Selección rectangular.


</details>

### 3.5 Ventana de estrucura .java

<details>
<summary>Ventana Navigator</summary>

##### La ventana de estructura esta por defecto en la esquina inferior izquierda.

* Windows -> Navigator
* Ctrl + 7

![](../../static/img/navigator.PNG)

</details>