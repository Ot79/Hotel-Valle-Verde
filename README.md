# Hotel Valle Verde — sitio web

Rediseño completo del sitio de **Hotel y Restaurante Valle Verde**, eco-resort en
El Valle de Antón, Coclé, Panamá.

Sitio estático: HTML, CSS y JavaScript sin dependencias ni paso de compilación.
Se publica subiendo la carpeta tal cual a cualquier hosting (o GitHub Pages).

## Estructura

```
index.html            Portada
habitaciones.html     Categorías de habitación + lista de precios
restaurante.html      Cocina peruana + menú
servicios.html        Servicios, salón de eventos y actividades en El Valle
galeria.html          Galería con lightbox
reservaciones.html    Formulario de solicitud, contacto y mapa
assets/css/style.css  Sistema de diseño completo
assets/js/main.js     Navegación, lightbox, formulario, animaciones
assets/img/           Imágenes (ver assets/img/README.md)
```

## Qué cambió respecto al sitio anterior

- **Diseño propio** en lugar de una plantilla genérica de WordPress.
- **Adaptado a móvil** de verdad: menú lateral, tipografía y espaciados fluidos.
- **Navegación plana** de seis páginas, sin submenús anidados.
- La lista de precios pasó de una imagen/tabla rígida a una **tabla accesible**
  que se lee bien en teléfono.
- **Buscador de disponibilidad** en la portada: fechas y huéspedes pasan ya
  rellenados a la página de reservación, para no pedir lo mismo dos veces.
- **Barra de acción fija en móvil** con «Reservar» y «Llamar», siempre visible.
- **Formulario de reservación** que arma el correo con todos los datos.
- **SEO y redes**: metadatos, Open Graph y datos estructurados `schema.org/Hotel`.
- **Accesibilidad**: saltar al contenido, foco visible, `aria-current`, contraste
  revisado y respeto a `prefers-reduced-motion`.

## Contenido

Todo el texto proviene del sitio original (páginas *El Hotel*, *Habitaciones*,
*Lista de Precios*, *Restaurante* y *Servicios*), reorganizado y corregido de
ortografía y puntuación.

### Pendientes de confirmar con el hotel

- **Tarifas**: se tomaron de la lista de precios publicada. Confirmar que siguen
  vigentes antes de publicar.
- **Menú del restaurante**: los platos son los del sitio original; falta
  confirmar precios y disponibilidad.
- **Fotografías**: el sitio usa marcadores de posición. Ver
  [`assets/img/README.md`](assets/img/README.md).
- **Versión en inglés**: el sitio original tenía traducción; aún no se replicó.
- **Reseñas de huéspedes**: la prueba social junto al botón de reservar es de
  lo que más ayuda a convertir, pero hacen falta reseñas reales de Google o
  TripAdvisor. No se inventan.
- **WhatsApp**: en Panamá es el canal habitual de reserva. Falta confirmar si
  el celular (+507) 6471-8250 tiene WhatsApp antes de enlazarlo.

### Decisiones deliberadas

No se implementaron los mensajes de urgencia y escasez del tipo «solo quedan
2 habitaciones» o «5 personas reservaron hoy». El sitio no conoce el
inventario real, así que esas cifras serían inventadas: es publicidad
engañosa, daña la confianza y en varios países está sancionado. Cuando exista
el sistema de reservas con base de datos podrán mostrarse, pero con datos
verdaderos.

## Desarrollo local

```bash
python3 -m http.server 8000
```

Luego abrir <http://localhost:8000>.
