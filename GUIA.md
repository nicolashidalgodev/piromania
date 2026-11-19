# Guía de gestión y despliegue — Piromanía

Pasos para que otra persona pueda clonar, ejecutar, editar y publicar el sitio.

- Repositorio: `https://github.com/nicolashidalgodev/piromania`
- Sitio: Astro 7 (estático) + Tailwind CSS 4
- Hosting: Firebase Hosting, proyecto `piromania`
- URL esperada: `https://piromania.web.app`

---

## 1. Accesos necesarios

Antes de empezar, la persona responsable debe contar con:

1. Acceso al repositorio de GitHub (invitación como colaborador).
2. Acceso al proyecto de Firebase `piromania` (rol Editor o Owner).
3. La clave `PUBLIC_FORM_ACCESS_KEY` del formulario (Web3Forms). No está en el repositorio; pedírsela al responsable actual.

Sin los puntos 1 y 2 no se puede publicar. Sin el punto 3 el sitio compila, pero el formulario de contacto no envía.

## 2. Requisitos del equipo

- Node.js `>=22.23.4` (Astro 7 no funciona con versiones anteriores). Verificar con:

  ```sh
  node -v
  npm -v
  ```

- Git instalado.
- Firebase CLI instalada globalmente (no es dependencia del proyecto):

  ```sh
  npm install -g firebase-tools
  firebase --version
  ```

## 3. Clonar e instalar

```sh
git clone https://github.com/nicolashidalgodev/piromania.git
cd piromania
npm install
```

Para una instalación reproducible usando el lockfile:

```sh
npm ci
```

## 4. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PUBLIC_FORM_ACCESS_KEY=la_clave_entregada_por_el_responsable
```

Consideraciones:

- `.env` está en `.gitignore`: no se sube al repositorio.
- Astro incorpora esta variable en el HTML **al momento de compilar**. Si se cambia la clave, hay que volver a ejecutar `npm run build` antes de desplegar; cambiar solo `.env` en producción no tiene efecto.
- No commitear ni compartir la clave en capturas o issues.

## 5. Ejecutar en local

```sh
npm run dev
```

Abrir `http://localhost:4321`. Si el puerto está ocupado:

```sh
npm run dev -- --port 4322
```

## 6. Dónde editar el contenido

| Qué cambiar | Archivo |
| --- | --- |
| Textos de todas las secciones | `src/data/content.ts` |
| Orden de secciones de la página | `src/pages/index.astro` |
| Talleres, precios, cupos, fechas | `src/data/content.ts` |
| Imágenes de la galería | `public/galeria/` + `CONTENT.resultados.imagenes` |
| Colores y tipografías | `tailwind.config.mjs` |
| Estilos globales | `src/styles/main.css` |
| Comportamiento (menú, filtros, modal, carrusel) | `src/scripts/main.js` |
| Metadatos de la página (título/descripción) | `src/pages/index.astro` y `src/layouts/Layout.astro` |

Reglas prácticas:

- Los textos visibles están centralizados en `content.ts`, salvo los mensajes de validación del formulario, que están en `src/components/Contacto.astro`.
- Cada taller de `CONTENT.talleres.listado` debe tener un `id` único y un `detalleId` único.
- Los eventos de `CONTENT.calendario.eventos` referencian un taller mediante `tallerId`. Si no coincide con un `id` existente, **el build falla**. Es intencional para evitar calendarios rotos.
- La opción de taller del formulario es una lista aparte (`CONTENT.contacto.formulario.campoTaller.opciones`). Al agregar un taller, actualizarla también.
- La galería incluye el texto `alt` y la etiqueta de cada foto; actualizarlos al reemplazar imágenes.

## 7. Agregar o reemplazar imágenes de la galería

1. Guardar las imágenes en `public/galeria/` con nombres secuenciales:

   ```
   public/galeria/galeria-01.jpeg
   public/galeria/galeria-02.jpeg
   public/galeria/galeria-03.jpeg
   ...
   ```

2. Editar `CONTENT.resultados.imagenes` en `src/data/content.ts`:

   ```ts
   {
     src: "/galeria/galeria-01.jpeg",
     alt: "Descripción de la imagen para accesibilidad",
     etiqueta: "Texto que aparece sobre la foto",
   },
   ```

3. Mantener exactamente el nombre y la extensión (`.jpeg`/`.jpg`). En Firebase Hosting las rutas distinguen mayúsculas y minúsculas.

4. Recomendaciones: ~1200 px de ancho, formato JPG/WebP optimizado, menos de ~300 KB por imagen.

## 8. Verificar antes de publicar

No existen scripts de lint, test ni typecheck. La verificación es el build y una revisión manual:

```sh
npm run build
npm run preview
```

Revisar en `http://localhost:4321`:

- [ ] La página carga sin errores en consola.
- [ ] Las secciones y textos actualizados se ven correctamente.
- [ ] El carrusel de la galería se desliza con dedo y con mouse en ancho mobile.
- [ ] Al tocar una foto se abre la modal, navega y cierra correctamente.
- [ ] El formulario de contacto envía (hacer una prueba real).
- [ ] Los enlaces de Instagram/correo funcionan.
- [ ] El sitio se ve bien en mobile y escritorio.

## 9. Publicar en Firebase

Primera vez en el equipo:

```sh
firebase login
```

El proyecto ya está definido en `.firebaserc` como `piromania`, así que no hace falta configurarlo de nuevo. Luego:

```sh
npm run build
firebase deploy --only hosting
```

Al finalizar, la CLI muestra la URL de publicación (`https://piromania.web.app`). Reglas:

- `dist/` está en `.gitignore`: no se versiona; Firebase publica lo que exista localmente en esa carpeta.
- Siempre ejecutar `npm run build` antes de `firebase deploy`; de lo contrario se publica una versión antigua.
- No hay CI/CD: el despliegue es manual.

## 10. Flujo de trabajo con Git

Para cambios pequeños, trabajar en una rama y luego integrar:

```sh
git checkout -b mi-cambio
git add .
git commit -m "descripcion-del-cambio"
git push -u origin mi-cambio
```

Luego abrir un Pull Request en GitHub y fusionarlo a `master`. Para cambios urgentes también se puede trabajar directo en `master`, pero se recomienda la rama.

Antes de cada commit, revisar que no se agreguen archivos indebidos:

```sh
git status
```

No deben aparecer `.env`, `dist/`, `.astro/` ni `.firebase/`.

## 11. Problemas frecuentes

| Problema | Causa / solución |
| --- | --- |
| `npm install` falla | Node antiguo. Actualizar a `>=22.23.4` y reinstalar. |
| `firebase: command not found` | Instalar `npm install -g firebase-tools` y reabrir la terminal. |
| `Error: Failed to get Firebase project` o `403` | La cuenta no tiene permisos sobre el proyecto `piromania`; pedir invitación. |
| El formulario no envía en producción | Falta `PUBLIC_FORM_ACCESS_KEY` o se desplegó sin reconstruir después de configurarla. |
| Imágenes rotas | Nombre/extensión no coinciden con `content.ts`, o la ruta no distingue mayúsculas. |
| Build falla con `No se encontró el taller ...` | Un `tallerId` del calendario no existe en `talleres.listado`. |
| Deploy publica una versión vieja | Se omitió `npm run build` antes de `firebase deploy`. |
| Puerto 4321 ocupado | `npm run dev -- --port 4322`. |

## 12. Revertir una publicación

Firebase conserva las versiones anteriores:

```sh
firebase hosting:rollback
```

Elegir la versión a restaurar y confirmar.

## 13. Traspaso: checklist mínimo

- [ ] La persona aceptó la invitación de GitHub.
- [ ] La persona aceptó la invitación de Firebase.
- [ ] Entregó `PUBLIC_FORM_ACCESS_KEY` por un canal privado.
- [ ] Pudo ejecutar `npm install`, `npm run dev` y `npm run build`.
- [ ] Pudo ejecutar `firebase login` y `firebase deploy --only hosting`.
- [ ] Verificó el formulario de contacto en producción.

---

Nota para sesiones de IA en este repositorio: existe `AGENTS.md` con convenciones técnicas y `README.md` con el resumen del proyecto.
