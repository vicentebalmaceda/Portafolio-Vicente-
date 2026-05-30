# Los del D Awards - versión responsive y ordenada

## Cómo abrir
1. Abre `index.html` en Chrome.
2. Haz click en “Pantalla completa”.
3. Haz click en “Iniciar ceremonia”.
4. Avanza con el botón, flecha derecha, Enter o barra espaciadora.
5. Retrocede con flecha izquierda.

## Cambiar fotos fácilmente
Las fotos están ordenadas por pregunta en esta carpeta:

`assets/fotos/`

Ejemplo:
- `assets/fotos/pregunta-01/foto-1.png`
- `assets/fotos/pregunta-01/foto-2.png`
- `assets/fotos/pregunta-01/foto-3.png`

Para reemplazar una foto:
1. En Visual Studio Code abre `assets/fotos/`.
2. Entra a la carpeta de la pregunta que quieres editar.
3. Reemplaza `foto-1.png`, `foto-2.png` o `foto-3.png` por tu imagen real.
4. Mantén exactamente el mismo nombre del archivo.

Recomendación: usa imágenes verticales o cuadradas. Si usas fotos muy grandes, ojalá comprímelas antes para que cargue más rápido.

## Cambiar popups
Los archivos de popup están en:

`assets/popups/`

Puedes reemplazar:
- `popup-1.avif`
- `popup-2.png`
- `popup-video.mp4`

Mantén los mismos nombres para no tocar código.

## Editar resultados, nombres o textos
Todo está en `data.js`.

Cada pregunta tiene:
- `question`: texto de la pregunta.
- `all`: lista de nominados, votos y porcentajes.
- `photos`: rutas de las fotos finales.

## Ajustes realizados en esta versión
- Pantalla de presentación adaptada para proyector.
- Menos scroll general.
- Scroll interno suave sólo cuando hay muchos resultados.
- Resultados y detalle final más compactos.
- Carpetas de fotos ordenadas por pregunta para editar más fácil.
- Popups ordenados en una carpeta propia.


CAMBIAR FOTOS DESDE HTML
1. Abre index.html en Visual Studio Code.
2. Busca el bloque: FOTOS EDITABLES DESDE HTML.
3. Cambia solo la ruta src de cada <img>. Ejemplo:
   <img src="assets/fotos/pregunta-01/mi-foto.jpg" alt="Pregunta 01 foto 1">
4. Guarda tu imagen dentro de la carpeta correspondiente o usa el nombre exacto que escribiste en src.
5. No necesitas editar data.js para cambiar fotos.
