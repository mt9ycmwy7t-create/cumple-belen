// ========================================
// HISTORIA POR CAPÍTULOS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const capitulos = document.querySelectorAll(".capitulo");
    const botones = document.querySelectorAll(".siguiente");

    let actual = 0;

    function mostrarCapitulo(numero) {

        capitulos.forEach(function (capitulo, indice) {

            if (indice === numero) {
                capitulo.style.display = "flex";
                capitulo.classList.add("activo");
            } else {
                capitulo.style.display = "none";
                capitulo.classList.remove("activo");
            }

        });

        actual = numero;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // Mostrar solamente el primer capítulo
    if (capitulos.length > 0) {
        mostrarCapitulo(0);
    }


    // Botones SIGUIENTE
    botones.forEach(function (boton, indice) {

        // Quitar el onclick antiguo del HTML
        boton.removeAttribute("onclick");

        boton.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            if (actual < capitulos.length - 1) {
                mostrarCapitulo(actual + 1);
            }

        });

    });


    // ========================================
    // BOTÓN COMENZAR
    // ========================================

    const comenzar = document.getElementById("comenzar");
    const musica = document.getElementById("musica");

    if (comenzar) {

        comenzar.addEventListener("click", function () {

            if (musica) {
                musica.play().catch(function () {});
            }

            mostrarCapitulo(0);

        });

    }


    // ========================================
    // BOTÓN MÚSICA
    // ========================================

    const botonMusica = document.getElementById("botonMusica");

    if (botonMusica && musica) {

        botonMusica.addEventListener("click", function () {

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
    // CARTA
    // ========================================

    const abrirCarta = document.getElementById("abrirCarta");
    const carta = document.getElementById("carta");

    if (abrirCarta && carta) {

        abrirCarta.addEventListener("click", function () {

            carta.classList.add("abierta");
            abrirCarta.style.display = "none";

        });

    }

});
