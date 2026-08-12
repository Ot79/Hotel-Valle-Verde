# Imágenes

Las páginas usan **marcadores de posición** (`<div class="marcador" data-etiqueta="…">`)
en lugar de fotografías, porque el sitio se construyó sin acceso a los archivos
originales del hotel.

## Cómo colocar las fotos reales

Cada marcador indica en `data-etiqueta` el nombre de archivo que espera. Para
reemplazarlo, cambie el `div` por una etiqueta `img`:

```html
<!-- antes -->
<div class="marcador" data-etiqueta="suite.jpg"></div>

<!-- después -->
<img src="assets/img/suite.jpg" alt="Suite con balcón y vista panorámica"
     width="1200" height="800" loading="lazy">
```

En los *hero* y las franjas de llamada a la acción el marcador lleva la clase
`marcador--lleno`; ahí la imagen debe llevar `class="hero__media-img"` o
simplemente sustituir todo el bloque por `<img>` (el contenedor ya recorta con
`object-fit: cover`).

## Archivos esperados

| Archivo | Dónde se usa |
| --- | --- |
| `hero-valle-verde.jpg` | Hero de la portada |
| `hotel-jardines.jpg` | Sección «El hotel» (portada) |
| `restaurante-plato.jpg` | Sección restaurante (portada) |
| `cta-atardecer.jpg` | Franja final (portada) |
| `habitaciones-hero.jpg` | Hero de Habitaciones |
| `habitacion-individual.jpg` | Ficha Individual |
| `habitacion-matrimonial.jpg` | Ficha Matrimonial |
| `habitacion-triple.jpg` | Ficha Triple |
| `habitacion-cuadruplex.jpg` | Ficha Cuádruplex |
| `habitacion-quintuplex.jpg` | Ficha Quíntuplex |
| `suite.jpg` | Ficha Suite |
| `restaurante-hero.jpg` | Hero de Restaurante |
| `ceviche.jpg` | Sección gastronomía peruana |
| `bar-internet-cafe.jpg` | Sección bar |
| `servicios-hero.jpg` | Hero de Servicios |
| `salon-eventos.jpg` | Sección salón de eventos |
| `india-dormida.jpg`, `canopy.jpg`, `nispero.jpg` | Tarjetas de actividades |
| `galeria-hero.jpg` | Hero de Galería |
| `galeria/01-fachada.jpg` … `galeria/11-atardecer.jpg` | Galería |
| `reservaciones-hero.jpg` | Hero de Reservaciones |
| `og-valle-verde.jpg` | Vista previa al compartir (1200 × 630 px) — **ya incluida** |

`og-valle-verde.jpg` es una tarjeta tipográfica provisional con la marca, para
que las vistas previas en WhatsApp, Facebook y X no salgan rotas. Conviene
sustituirla por una fotografía real del hotel, respetando el tamaño de
1200 × 630 px.

## Recomendaciones

- Formato **WebP** o **AVIF** con respaldo JPG; ancho máximo 2000 px para los
  *hero* y 1200 px para tarjetas.
- Comprimir a 75–82 % de calidad: cada hero debería pesar menos de 300 KB.
- Escribir siempre un `alt` descriptivo en español.
- Añadir `width` y `height` reales para evitar saltos de maquetación.
- Usar `loading="lazy"` en todo menos en la imagen del *hero* de la portada.
