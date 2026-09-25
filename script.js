// ========================================
// BOTÓN "COMENZAR NUESTRA HISTORIA"
// ========================================

const boton = document.getElementById("comenzar");
const musica = document.getElementById("musica");


// ========================================
// CAPÍTULOS
// ========================================

const capitulos = document.querySelectorAll(".capitulo");

let capituloActual = 0;


// ========================================
// MOSTRAR CAPÍTULO
// ========================================

function mostrarCapitulo(indice) {

    if (!capitulos.length) {
        return;
    }

    if (indice < 0 || indice >= capitulos.length) {
        return;
    }

    capitulos.forEach(function(capitulo) {

        capitulo.classList.remove("activo");

    });

    capitulos[indice].classList.add("activo");

    capituloActual = indice;

}


// ========================================
// BOTÓN COMENZAR
// ========================================

if (boton) {

    boton.addEventListener("click", function() {

        // Iniciar música
        if (musica) {

            musica.play().catch(function(error) {

                console.log(
                    "No se pudo iniciar la música:",
                    error
                );

            });

        }

        // Activar modo historia
        document.body.classList.add("modo-historia");

        // Mostrar capítulo 1
        mostrarCapitulo(0);

    });

}


// ========================================
// BOTONES SIGUIENTE
// ========================================

const botonesSiguiente =
    document.querySelectorAll(".siguiente");


botonesSiguiente.forEach(function(botonSiguiente) {

    botonSiguiente.addEventListener("click", function() {

        const destino =
            botonSiguiente.getAttribute("data-destino");

        if (!destino) {
            return;
        }

        const siguiente =
            document.getElementById(destino);

        if (!siguiente) {
            return;
        }

        const indice =
            Array.from(capitulos).indexOf(siguiente);

        if (indice !== -1) {

            mostrarCapitulo(indice);

        }

    });

});


// ========================================
// BOTÓN SILENCIAR / ACTIVAR MÚSICA
// ========================================

const botonMusica =
    document.getElementById("botonMusica");


if (botonMusica && musica) {

    botonMusica.addEventListener("click", function() {

        if (musica.muted) {

            musica.muted = false;

            botonMusica.textContent = "🔊 Música";

        } else {

            musica.muted = true;

            botonMusica.textContent = "🔇 Silenciar";

        }

    });

}


// ========================================
// ANIMACIÓN DE LA PRIMERA FOTO
// ========================================

const foto =
    document.querySelector(".foto-container");


const observador =
    new IntersectionObserver(function(elementos) {

        elementos.forEach(function(elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("mostrar");

            }

        });

    }, {
        threshold: 0.3
    });


if (foto) {

    observador.observe(foto);

}


// ========================================
// ANIMACIÓN DE LOS CAPÍTULOS
// ========================================

const observadorCapitulos =
    new IntersectionObserver(function(elementos) {

        elementos.forEach(function(elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("activo");

            }

        });

    }, {
        threshold: 0.25
    });


capitulos.forEach(function(capitulo) {

    observadorCapitulos.observe(capitulo);

});


// ========================================
// CARTA DE CUMPLEAÑOS
// ========================================

const abrirCarta =
    document.getElementById("abrirCarta");

const carta =
    document.getElementById("carta");


if (abrirCarta && carta) {

    abrirCarta.addEventListener("click", function() {

        carta.classList.add("abierta");

        abrirCarta.style.display = "none";

        if (typeof burst === "function") {

            burst();

        }

    });

}