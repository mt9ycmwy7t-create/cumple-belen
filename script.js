// ========================================
// HISTORIA POR CAPÍTULOS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const capitulos = document.querySelectorAll(".capitulo");
    const botones = document.querySelectorAll(".siguiente");

    let actual = 0;


    // ========================================
    // MOSTRAR CAPÍTULO
    // ========================================

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


        // Mostrar la primera foto con su animación
        const foto = capitulos[numero].querySelector(".foto-container");

        if (foto) {
            setTimeout(function () {
                foto.classList.add("mostrar");
            }, 100);
        }


        // Ir directamente al capítulo
        capitulos[numero].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    // ========================================
    // BOTONES SIGUIENTE
    // ========================================

    botones.forEach(function (boton) {

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


    // ========================================
    // NO MOSTRAR LOS DEMÁS AL PRINCIPIO
    // ========================================

    capitulos.forEach(function (capitulo, indice) {

        if (indice === 0) {

            capitulo.style.display = "flex";

        } else {

            capitulo.style.display = "none";

        }

    });

});
