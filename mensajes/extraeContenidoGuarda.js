(function exportarElementoAHTML() {
    const idBuscado = 'ui-id-10'; 
    const elemento = document.getElementById(idBuscado);
    
    if (!elemento) {
        console.error(`Error: No se encontró el elemento con el id "${idBuscado}" en esta página.`);
        return;
    }

    // 1. Creamos la estructura completa del nuevo archivo HTML con el contenido extraído
    const contenidoHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contenido Extraído </title>  <!--- ${idBuscado} -->
    <style>
        body { font-family: sans-serif; margin: 30px; background: #f9f9f9; color: #333;text-align:center; }
        .box { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        h2 { color: #0066cc; margin-top: 0; }
    </style>
</head>
<body>
    <div class="box">
        <h2 id="titulo">Contenido extraído</h2> <!-- del ID: ${idBuscado} -->
        <div id="contenido-recuperado">
            ${elemento.innerHTML}
        </div>
    </div>
</body>
</html>`;

    // 2. Convertimos el texto en un archivo descargable (Blob)
    const blob = new Blob([contenidoHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    //const titulo= document.querySelector("titulo"); 
    //titulo= elemento.innerHTML;

    // 3. Creamos un enlace invisible para forzar la descarga en tu Ubuntu
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = url;
    enlaceDescarga.download = `extraido_${idBuscado}.html`; // Nombre del archivo que se guardará
    
    // 4. Simulamos el clic y limpiamos la memoria
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
    URL.revokeObjectURL(url);

    console.log(`¡Éxito! El archivo "extraido_${idBuscado}.html" se ha descargado en tu carpeta de Descargas.`);
})();
