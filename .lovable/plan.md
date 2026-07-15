## Navegación superior + secciones nuevas

Agregar una barra de navegación fija arriba a la derecha (estilo Midgard de la referencia), con la marca "PANTONE" a la izquierda y 4 enlaces a la derecha en una tipografía serif similar a la actual (Fraunces, en versalitas y tracking amplio).

### Enlaces y comportamiento
1. **Quienes somos** → nueva ruta `/estudio` con una página breve sobre el estudio (misión, enfoque, equipo — texto placeholder editable).
2. **Exposiciones** → nueva ruta `/exposiciones` con una **línea de tiempo vertical** de exposiciones (año + título + descripción, ~5 hitos placeholder).
3. **Casos** → enlaza a `/#proyectos` (scroll suave a la sección de proyectos ya existente en el home).
4. **Contacto** → scroll suave al footer (`/#contacto`).

### Footer ampliado (contacto)
Reemplazar el footer minimal actual por uno con:
- Columna izquierda: marca PANTONE + tagline.
- Columna central: dirección / ubicación (ej. "Santiago, CL"), teléfono, email.
- Columna derecha: redes sociales / horario.
- Con `id="contacto"` para que el enlace del nav lleve ahí.

### Detalles de diseño
- Nav fija (`position: fixed`) con fondo translúcido y blur, se mantiene visible al hacer scroll.
- Sobre el hero (imagen oscura) el texto del nav va en `text-primary-foreground`; al scrollear cambia a fondo claro con texto oscuro.
- Tipografía: Fraunces para la marca y los enlaces, uppercase con `tracking-[0.2em]`, tamaño pequeño (~12–13px) — coincide con el look editorial de la referencia.
- Responsive: en móvil los enlaces colapsan en un menú hamburguesa.

### Archivos afectados
- **Nuevo** `src/components/site-nav.tsx` — barra de navegación.
- **Nuevo** `src/components/site-footer.tsx` — footer con contacto.
- **Nuevo** `src/routes/estudio.tsx` — página "Quiénes somos".
- **Nuevo** `src/routes/exposiciones.tsx` — línea de tiempo.
- **Editar** `src/routes/__root.tsx` — montar `<SiteNav />` global sobre el `<Outlet />`.
- **Editar** `src/routes/index.tsx` — quitar el footer inline y usar `<SiteFooter />`; añadir `id="contacto"`.

### Preguntas menores
Los datos de contacto (dirección, email, teléfono) y el contenido de "Quiénes somos" / "Exposiciones" los pongo como placeholder editable, salvo que quieras dármelos ahora.
