

### Paso 1: Creación de rutas

Importa los componentes pertinentes para envolver la App y crear el enrutado de la página. No importa que aún no tengamos los componentes que irán en cada vista, por el momento podes dejar solamente un div.

### Paso 2: Creación de componentes para cada ruta

Una vez definidas las rutas demandadas por la consigna, pasemos a crear los componentes que se verán en cada URL.

- Recorda que para la página [/contacto](/docs/funcionalidades.md#pagina-2-contacto) deberás implementar un Form con sus validaciones
- Para [/home](/docs/funcionalidades.md#pagina-1-inicio-home) mapear la información de la API y devolver una Card por cada dentista
  - Crear un Link dinámico para el detalle de cada dentista en [/dentista/:id](/docs/funcionalidades.md#pagina-3-detalle-dentista)
  - Para [/favs](/docs/funcionalidades.md#pagina-4-destacados) consumir la información del localStorage y devolver una Card por cada dentista destacado

### Paso 3: Implementación del Contexto Global

Una vez que ya tenemos toda la estructura de nuestra aplicación podemos pasar a consumir la API realizando una llamada por fetch o axios.

- Deberán guardar dicha información en un contexto global, junto con el theme de la app.
- Utilizando useReducer crear los métodos necesarios para el manejo de su comportamiento (cambio de theme de la App y guardado de la respuesta de la API en el Contexto).

### Paso 4: Consumir Contexto Global

Con la información ya en mano pasamos a “rellenar” los huecos que dejamos en nuestra estructura anterior, suscribiendo nuestros componentes al contexto global (solo aquellos que necesiten información del mismo)

### Paso 4: Funcionalidad de destacados

Cada card deberá tener un botón que dispare la acción de guardar una card que queremos destacar, dentro del localStorage. Deberás utilizar useReducer para manejar esta lógica.
