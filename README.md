# Octomar — Sabores Peruanos

Sitio estático, responsive y sin backend para Octomar, restaurante de comida peruana y marina. Está construido con HTML5, CSS3 y JavaScript puro; no requiere Node.js, base de datos ni instalación de dependencias.

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

- El logo oficial está en `assets/images/logo/final-logo.png`. Conserva su proporción y transparencia; no lo recortes ni le apliques filtros.
- Reemplaza las fotos en sus carpetas o cambia sus rutas en `index.html`.
- Mantén proporciones similares, optimiza a WebP o AVIF y procura que cada imagen pese menos de 300 KB para producción.
- Las imágenes gastronómicas e interior incluidas fueron generadas específicamente como recursos demostrativos del sitio.

### Platos y precios

Las seis tarjetas destacadas se editan directamente en la sección `#especialidades` de `index.html`.

### Datos comerciales y WhatsApp

Los datos comerciales configurados son:

- Marca: Octomar
- Eslogan: Sabores Peruanos
- Teléfono y WhatsApp: `+51 910 471 213`
- Número para enlaces: `51910471213`
- Dirección: Av. Arequipa N.° 436, Pampas, 09156

No se muestran horarios, correo, redes sociales, métodos de pago ni enlaces de tiendas porque no se proporcionaron datos confirmados.

### Google Maps

El mapa busca la dirección comercial proporcionada sin inventar coordenadas. Cuando exista un enlace oficial verificado, actualiza el `iframe` y el botón **Cómo llegar** en `index.html`.

### Aplicación móvil

La sección conserva el mockup de la aplicación y dirige las consultas al WhatsApp real. Agrega enlaces de Google Play o App Store únicamente cuando existan URLs oficiales confirmadas.

## Publicación

### Hostinger

Comprime el contenido del proyecto y súbelo a `public_html` desde el administrador de archivos. `index.html` debe quedar directamente dentro de `public_html`, no dentro de una carpeta adicional.

### Netlify

Arrastra la carpeta del proyecto al área de despliegue manual de Netlify. No se necesita comando de compilación; el directorio de publicación es la raíz.

### GitHub Pages

Sube el proyecto a un repositorio, abre **Settings → Pages**, selecciona **Deploy from a branch** y publica la raíz de la rama principal. Después actualiza la URL canónica y Open Graph con el dominio definitivo.

## Lista previa a producción

- Confirmar platos y precios.
- Agregar horarios, correo y redes solamente cuando existan datos oficiales.
- Optimizar las imágenes a WebP/AVIF.
- Reemplazar la búsqueda de Maps por el enlace oficial cuando esté disponible.
- Añadir páginas reales de privacidad y términos.
- Agregar dominio canónico y URL absoluta de Open Graph cuando exista un dominio oficial.
