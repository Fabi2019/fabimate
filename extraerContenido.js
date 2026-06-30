(function probarExtraccion() {
    // 1. Reemplaza 'TU_ID_AQUI' por el id real que buscas
    const idBuscado = 'ui-id-10'; 
    
    // 2. Intenta buscar el elemento en la página actual
    const elemento = document.getElementById(idBuscado);
    
    if (elemento) {
        console.log("¡Éxito! Elemento encontrado.");
        console.log("------------------------");
        console.log("Contenido HTML Interno:", elemento.innerHTML);
        console.log("------------------------");
        console.log("Texto limpio:", elemento.innerText);
    } else {
        console.error(`Error: No se encontró ningún elemento con el id "${idBuscado}" en esta página.`);
    }
})();
