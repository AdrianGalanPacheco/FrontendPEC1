**1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)**
    
**- ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**

    - Accesibilidad. Las etiquetas semánticas facilitan a los lectores de pantalla la comprensión del contenido.
    - SEO. Las etiquetas semánticas indican la función del contenido, por lo tanto, los rastreadores de los buscadores se basarán en el contenido para posicionar la web en los resultados de búsqueda.
    - Código claro y fácil de mantener. Las etiquetas semánticas y sus respectivas tabulaciones facilitan la lectura y comprensión del código.
  
**- Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**

    - Canvas API. Permite hacer animaciones, gráficos de juegos, visualizar datos, manipular fotografías y procesar vídeos en tiempo real.
    - Web Storage API. Está formada por Local Storage (guarda información persistente) y Session Storage (guarda información no persistente). Se basan en almacenar pares clave/valor.
    - Geolocation API. Permite obtener la posición geográfica de un usuario.

**- Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

    CSS3 ofrece el uso de MediaQueries para aplicar estilos según el tipo de dispositivo y su resolución de pantalla.

**- Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**

    - Tipado estático. Permite especificar los tipos de las variables y parámetros de funciones en tiempo de compilación.
    - Interfaces y tipos personalizados. Permite definir estructuras de datos mediante interfaces o tipos.
    - Programación orientada a objetos. Admite conceptos de programación orientada a objetos como clases, interfaces y herencia.
    - Compatibilidad con JavaScript. Es un superconjunto de JavaScript, por lo tanto, se facilita la integración de TypeScript en proyectos JavaScript sin tener que reescribir todo el código.

**2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**

**- Cita al menos 2 de estos preprocesadores.**

    - Syntactically Awesome Style Sheets (SASS). Preprocesador de CSS utilizado para traducir un código de hojas de estilo no estándar a un código CSS estándar.
    - Leaner Style Sheets (LESS). Preprocesador de CSS que añade características como variables, anidación...

**- Cita al menos 4 ventajas que ofrecen estos preprocesadores.**

    - Uso de variables. Permiten definir variables para almacenar valores reutilizables.
    - Anidación de selectores. Permiten estructurar los estilos de forma jerárquica.
    - Mixins. Fragmentos de código reutilizables que pueden incluir reglas CSS y parámetros.
    - Funciones y cálculos dinámicos. Permiten realizar operaciones matemáticas en los estilos.

**- Explica brevemente en qué consisten los sourcemaps.**

    Un sourcemap contiene información sobre cómo se relaciona el código generado con el código fuente original.

**- Explica qué es un transpilador.**

    Un transpilador traduce código fuente escrito en un lenguaje de programación a otro código fuente escrito en otro lenguaje de programación.

**3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**

**- Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**

    - Sistema de control de versiones:
        - Git. Sistema de control de versiones distribuido (disponen de una copia local del repositorio para cada desarrollador).
        - Subversion. Sistema de control de versiones centralizado (disponen de un servidor con todos los archivos del proyecto).
    - Herramientas de gestión de módulos:
        - Webpack. Herramienta de gestión de módulos con un control detallado sobre el proceso de empaquetado.
        - Parcel. Herramienta de gestión de módulos con una configuración rápida y simple.

**- Cita y explica al menos 3 comandos de Git.**

    - git clone <url>. Se usa para copiar un repositorio remoto al equipo local, esto descargará el código y su historial de cambios.
    - git commit -m "Mensaje". Guarda los cambios en el historial del repositorio con un mensaje descriptivo.
    - git push origin <rama>. Envía los cambios confirmados a la rama indicada del repositorio remoto.

**- Cita y explica brevemente las características más definitorias de WebPack.**

    - Separación de código. Permite dividir el código en múltiples paquetes, de esta manera se mejora el tiempo de carga de las páginas.
    - Sustitución en caliente de módulos (HMR). Permite realizar cambios en un módulo sin tener que cargar toda la página de nuevo.
    - Plugins. Permiten la minificación de archivos, generación de HTML o eliminación de código no utilizado.
    - Cargadores (Loaders). Permiten procesar diferentes tipos de archivos antes de incluirlos en el paquete.
    - Paquete (Bundle). Permite combinar varios archivos JavaScript junto con sus dependencias en un único archivo.