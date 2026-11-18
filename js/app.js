

// ======================================
// XV AÑOS DE KENDRA
// CAMBIAR EL COLOR DE TODAS LAS LETRAS
// ======================================

const selectorLetras = document.getElementById("selectorLetras");

// Abrir el selector de color al hacer clic en cualquier texto
document.addEventListener("click", function(event) {
    const elemento = event.target;

    // No abrir el selector al hacer clic en controles o imágenes
    if (
        elemento.closest("input, select, textarea, img, video, label, .boton")
    ) {
        return;
    }

    // Comprobar que se hizo clic sobre un texto
    const texto = elemento.closest(
        "h1, h2, h3, h4, p, span, a, small, strong, em, li, footer, nav"
    );

    if (!texto) {
        return;
    }

    // Abrir el selector de color
    try {
        if (typeof selectorLetras.showPicker === "function") {
            selectorLetras.showPicker();
        } else {
            selectorLetras.click();
        }
    } catch (error) {
        selectorLetras.click();
    }
});

// Aplicar el color elegido a todas las letras
selectorLetras.addEventListener("input", function() {
    document.documentElement.style.setProperty(
        "--color-texto-global",
        selectorLetras.value
    );

    document.body.classList.add("color-global-activo");
});

// ======================================
// AGREGAR FOTOGRAFÍAS
// ======================================

const selectorFotos = document.getElementById("selectorFotos");
const contenedorFotos = document.getElementById("contenedorFotos");

selectorFotos.addEventListener("change", function() {
    for (const archivo of selectorFotos.files) {
        if (!archivo.type.startsWith("image/")) continue;

        const imagen = document.createElement("img");
        imagen.src = URL.createObjectURL(archivo);
        imagen.alt = "Fotografía de Kendra";

        contenedorFotos.appendChild(imagen);
    }

    const mensaje = contenedorFotos.querySelector(".vacio");
    if (mensaje) mensaje.remove();

    selectorFotos.value = "";
});

// ======================================
// AGREGAR VIDEOS
// ======================================

const selectorVideos = document.getElementById("selectorVideos");
const contenedorVideos = document.getElementById("contenedorVideos");

selectorVideos.addEventListener("change", function() {
    for (const archivo of selectorVideos.files) {
        if (!archivo.type.startsWith("video/")) continue;

        const video = document.createElement("video");
        video.src = URL.createObjectURL(archivo);
        video.controls = true;
        video.playsInline = true;

        contenedorVideos.appendChild(video);
    }

    selectorVideos.value = "";
});
