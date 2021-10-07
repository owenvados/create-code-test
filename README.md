# create-code-test

> Created by [Paco Jiménez]().

## Prueba técnica - CREATE

Esta documentación está dirigida al desarrollador que revise y valore lo realizado en ella.

Para realizar la prueba he creado un boilerplate basado en Webpack 5 basado en PostCSS y Sass con un servidor de desarrollo (hot reloading) y una compilación de producción optimizada.

---

**Anotaciones**

- He decidido usar el preprocesador SCSS porque se ajusta a la terminología BEM.
- Se añade reset.scss para resetear los estilos de los tags.
- El CSS distribuible se genera tras la ejecución del comando build.
- He optado por usar prettier junto con stylelint para el formato y detección de errores.
- He aplicado una paleta de colores obtenida en Pantone, para mejorar la accesibilidad del usuario.
- He realizado algunos cambios por propia iniciativa para mejorar un poco el diseño del mismo.
- Algunos comportamientos (responsive, hover, ...) aplicados son fruto de la experiencia en otros desarrollos.
- El código puede no estar optimizado respecto al DOM por exceso de elementos pero mejora la semántica del HTML.

---

- Disculpad las licencias que me he tomado en el desarrollo pero espero cumpla los requisitos de la prueba.
- Lamento las partes mejorables o errores que no haya detectado.
- Si existe cualquier cuestión, no dudéis en contactar conmigo.

## Scripts

### `npm run build`

Build app for production to `./dist` folder.

### `npm run dev`

Start a dev server to preview your app.
