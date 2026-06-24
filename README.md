# Vicente Balmaceda · HR-Tech MBA Portfolio

Portafolio profesional en React + Tailwind + Vite, diseñado para CV y LinkedIn con foco en HR-Tech, Formación, Desarrollo Organizacional, People Analytics, LMS e IA aplicada a RRHH.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Cómo compilar para producción

```bash
npm run build
```

La carpeta `dist/` queda lista para revisar con:

```bash
npm run preview
```

## Dónde editar la información

- Perfil, posicionamiento, stack y metodología: `src/data/profile.js`
- Proyectos, categorías, reseñas e impacto: `src/data/projects.js`
- Imágenes: `public/assets/`

## Diseño

- Paleta azul/navy elegante.
- Menos texto visible en la página principal.
- Proyectos por categoría.
- Vista de detalle por proyecto con imagen grande, contexto, solución e impacto.
- Responsive y construido evitando solapamientos entre secciones.

## Publicación sugerida en Vercel

1. Subir este proyecto a GitHub.
2. Importar el repositorio desde Vercel.
3. Framework: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
