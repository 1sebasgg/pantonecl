# Mejorar el botón "Ver más" del hero

## Problema

El bloque de texto del hero usa un duplicado invisible del texto completo para "reservar" espacio. Eso hace que, esté expandido o colapsado, siempre ocupe la altura del texto largo: al colapsar queda un hueco vacío debajo, y al expandir el movimiento se siente rígido.

## Qué se va a hacer

1. Eliminar el bloque espaciador invisible del hero, para que el texto ocupe solo el alto real de su contenido. Sin hueco al colapsar.
2. Que el hero crezca/encoja suavemente en vez de saltar: la sección conserva su alto mínimo y el contenido se ancla abajo, así el cambio de altura se ve como una expansión natural sobre la imagen.
3. Rediseñar el botón para que sea más estético y menos "pegado" al texto:
   - Alineado a la izquierda junto al párrafo (no suelto a la derecha).
   - Estilo minimal editorial acorde al sitio: texto en mayúsculas con tracking amplio, línea inferior fina que se extiende al pasar el mouse, chevron que rota 180° al expandir.
   - Etiquetas "Ver más" / "Ver menos" iguales, con transición de opacidad para que el cambio de texto no parpadee.
4. Suavizar la aparición del párrafo extendido: fade + leve desplazamiento vertical sincronizado con la animación de altura, con una curva de easing suave.

## Detalles técnicos

- Archivo: `src/components/hero.tsx`.
- Se quita el `grid` de una celda con el clon invisible y se deja un contenedor en flujo normal.
- La expansión sigue usando la técnica `grid-rows-[0fr] -> grid-rows-[1fr]` con `overflow-hidden`, con `transition-[grid-template-rows,opacity]` y duración ~500ms.
- La sección mantiene `min-h-[88vh]` con `items-end`, por lo que el crecimiento empuja hacia arriba y no deja espacio muerto.
- Solo cambios de presentación; no se toca texto ni lógica de otras secciones.
