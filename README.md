# Piromanía

Sitio estático de una sola página construido con Astro 7, Tailwind CSS 4 y TypeScript.

Ruta única: `src/pages/index.astro`. Se despliega en Firebase Hosting desde `dist/`.

Guía de traspaso, edición y despliegue: [`GUIA.md`](./GUIA.md).

## Requisitos

- Node.js `>=22.23.4` (requisito de Astro 7).
- Variables de entorno en `.env` (no versionado): `PUBLIC_FORM_ACCESS_KEY`, necesaria para que funcione el formulario de contacto (Web3Forms).

## Desarrollo

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

`npm run build` es el único paso de verificación disponible: no hay scripts de lint, test ni typecheck, y `astro check` no está instalado.

## Contenido

- La mayor parte del texto visible está centralizada en `src/data/content.ts` (`CONTENT`).
- Excepciones: los mensajes de validación y estado del formulario de contacto están escritos directamente en `src/components/Contacto.astro`, y el `<title>`/descripción de la página en `src/pages/index.astro`.
- `content.md` es el brief original de textos; `content.ts` es la fuente de verdad.

## Despliegue

```sh
npm run build
firebase deploy --only hosting
```

El proyecto de Firebase es `piromania` (definido en `.firebaserc`) y publica el contenido de `dist/` según `firebase.json`. La CLI de Firebase (`firebase-tools`) no está incluida en las dependencias del proyecto, por lo que debe estar instalada de forma global (o usar `npx firebase-tools deploy --only hosting`).
