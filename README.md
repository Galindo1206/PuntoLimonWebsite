# Punto Limón — web informativa

Sitio estático, responsive y sin backend para un restaurante peruano de cocina marina. Está construido con HTML5, CSS3 y JavaScript puro; no requiere Node.js, base de datos ni instalación de dependencias.

## Abrir localmente

Puedes abrir `index.html` directamente con el navegador. Para una experiencia más cercana a producción, abre la carpeta en Visual Studio Code y usa **Live Server**.

También puedes servirla con cualquier servidor estático. Por ejemplo, si ya tienes Python instalado:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Estructura

```text
index.html                 Contenido, SEO y estructura semántica
css/styles.css             Estilos base, componentes y animaciones
css/responsive.css         Ajustes para tablet y móvil
js/main.js                 Header, menú móvil, scroll, formulario y avisos
js/menu.js                 Datos y filtros de la carta
js/gallery.js              Lightbox accesible
assets/images/logo/        Logo utilizado en la web
assets/images/hero/        Fotografía principal generada para el proyecto
assets/images/dishes/      Fotografía de especialidades
assets/images/restaurant/  Fotografía del ambiente
assets/images/gallery/     Carpeta preparada para fotos futuras
assets/images/app/         Carpeta preparada para capturas reales de la app
assets/icons/              Carpeta preparada para iconos adicionales
```

## Personalización

### Logo e imágenes

- Reemplaza `assets/images/logo/punto-limon.png` conservando el mismo nombre, preferiblemente por un PNG transparente optimizado.
- Reemplaza las fotos en sus carpetas o cambia sus rutas en `index.html` y `js/menu.js`.
- Mantén proporciones similares, optimiza a WebP o AVIF y procura que cada imagen pese menos de 300 KB para producción.
- Las imágenes gastronómicas e interior incluidas fueron generadas específicamente como recursos demostrativos del sitio.

### Platos y precios

Edita el arreglo `dishes` en `js/menu.js`. Cada objeto contiene `name`, `category`, `description`, `price`, `image`, `position` y, opcionalmente, `badge`. Las categorías existentes son `ceviches`, `entradas`, `pescados`, `criollos`, `sopas`, `bebidas` y `postres`.

Las seis tarjetas destacadas se editan directamente en la sección `#especialidades` de `index.html`. Todos los precios actuales son ejemplos, marcados con asterisco.

### Datos comerciales y WhatsApp

Busca y reemplaza estos valores de demostración en `index.html`, `js/main.js` y el bloque JSON-LD:

- `+51 999 999 999` y `51999999999`
- `Av. Ejemplo 123`
- `Distrito por definir`
- `hola@puntolimon.pe`
- `@puntolimon.pe`
- Horarios, servicios y métodos de pago
- URL canónica `https://www.puntolimon.pe/`

En `js/main.js`, cambia el número de `https://wa.me/51999999999` por el número real con código de país, sin espacios ni símbolos.

### Google Maps

En `index.html`, localiza el `iframe` de la sección `#ubicacion` y reemplaza su atributo `src` por la URL de inserción de Google Maps del local real. Actualiza también el enlace del botón **Cómo llegar**.

### Aplicación móvil

Reemplaza los `href="#"` de los botones Google Play y App Store por las URL reales y elimina la clase `is-disabled`. Puedes sustituir el mockup actual por capturas dentro de `assets/images/app/`.

### Carta PDF

Guarda el PDF, por ejemplo, como `assets/carta-punto-limon.pdf`. Cambia el `href` del enlace con id `menu-pdf`, elimina ese id si ya no necesitas el aviso y añade `target="_blank"` si deseas abrirlo en otra pestaña.

### Redes, privacidad y términos

Los enlaces con `href="#"` en redes sociales, política de privacidad y términos son marcadores provisionales. Reemplázalos antes de publicar.

## Publicación

### Hostinger

Comprime el contenido del proyecto y súbelo a `public_html` desde el administrador de archivos. `index.html` debe quedar directamente dentro de `public_html`, no dentro de una carpeta adicional.

### Netlify

Arrastra la carpeta del proyecto al área de despliegue manual de Netlify. No se necesita comando de compilación; el directorio de publicación es la raíz.

### GitHub Pages

Sube el proyecto a un repositorio, abre **Settings → Pages**, selecciona **Deploy from a branch** y publica la raíz de la rama principal. Después actualiza la URL canónica y Open Graph con el dominio definitivo.

## Lista previa a producción

- Reemplazar todos los datos marcados como provisionales.
- Confirmar platos, precios, horarios y métodos de pago.
- Optimizar las imágenes a WebP/AVIF.
- Configurar WhatsApp, Maps, redes, tiendas de apps y PDF.
- Añadir páginas reales de privacidad y términos.
- Actualizar dominio canónico, Open Graph y JSON-LD.

