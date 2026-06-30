// 1. Capturar todos los iframes
const todosLosIframes = document.querySelectorAll('iframe');
let urlPreguntas = null;

todosLosIframes.forEach((iframe) => {
    const url = iframe.src || iframe.getAttribute('data-src') || '';
    
    // Filtro específico para detectar plataformas o rutas de preguntas/cuestionarios
    const esPreguntas = url.includes('forms') || 
                        url.includes('quiz') || 
                        url.includes('question') || 
                        url.includes('survey') || 
                        url.includes('typeform');

    // Si coincide y aún no hemos guardado ninguna, la capturamos
    if (esPreguntas && !urlPreguntas) {
        urlPreguntas = url;
    }
});

// 2. Mostrar ÚNICAMENTE el resultado final en la consola
if (urlPreguntas) {
    console.log(urlPreguntas);
} else {
    console.log("❌ No se encontró ningún iframe que coincida con un cuestionario o preguntas.");
}