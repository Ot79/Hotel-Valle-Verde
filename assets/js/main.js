/* ==========================================================================
   Hotel Valle Verde — comportamiento de interfaz
   Sin dependencias externas.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Cabecera: fondo sólido al hacer scroll (o siempre en páginas interiores)
     --------------------------------------------------------------------- */
  var cabecera = document.querySelector(".cabecera");

  if (cabecera) {
    var siempreSolida = cabecera.hasAttribute("data-solida");

    var actualizarCabecera = function () {
      if (siempreSolida || window.scrollY > 60) {
        cabecera.classList.add("is-solida");
      } else {
        cabecera.classList.remove("is-solida");
      }
    };

    actualizarCabecera();
    window.addEventListener("scroll", actualizarCabecera, { passive: true });
  }

  /* ---------------------------------------------------------------------
     Navegación móvil
     --------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    var cerrarNav = function () {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-abierta");
      document.body.classList.remove("nav-abierta");
    };

    toggle.addEventListener("click", function () {
      var abierta = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!abierta));
      nav.classList.toggle("is-abierta", !abierta);
      document.body.classList.toggle("nav-abierta", !abierta);
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) cerrarNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") cerrarNav();
    });
  }

  /* ---------------------------------------------------------------------
     Revelado progresivo al entrar en pantalla
     --------------------------------------------------------------------- */
  var revelables = document.querySelectorAll(".revelar");

  if (revelables.length) {
    if ("IntersectionObserver" in window) {
      var observador = new IntersectionObserver(
        function (entradas) {
          entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("es-visible");
              observador.unobserve(entrada.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );

      revelables.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 90 + "ms";
        observador.observe(el);
      });
    } else {
      revelables.forEach(function (el) { el.classList.add("es-visible"); });
    }
  }

  /* ---------------------------------------------------------------------
     Galería con lightbox
     --------------------------------------------------------------------- */
  var galeria = document.querySelector("[data-galeria]");

  if (galeria) {
    var caja = document.createElement("div");
    caja.className = "lightbox";
    caja.setAttribute("role", "dialog");
    caja.setAttribute("aria-modal", "true");
    caja.setAttribute("aria-label", "Imagen ampliada");
    caja.innerHTML =
      '<button class="lightbox__cerrar" type="button" aria-label="Cerrar">&times;</button>' +
      '<div><img alt=""><p class="lightbox__pie"></p></div>';
    document.body.appendChild(caja);

    var imagenCaja = caja.querySelector("img");
    var pieCaja = caja.querySelector(".lightbox__pie");
    var botonCerrar = caja.querySelector(".lightbox__cerrar");
    var ultimoFoco = null;

    var abrir = function (src, alt, texto) {
      ultimoFoco = document.activeElement;
      imagenCaja.src = src;
      imagenCaja.alt = alt || "";
      pieCaja.textContent = texto || "";
      caja.classList.add("is-abierto");
      document.body.style.overflow = "hidden";
      botonCerrar.focus();
    };

    var cerrar = function () {
      caja.classList.remove("is-abierto");
      document.body.style.overflow = "";
      imagenCaja.removeAttribute("src");
      if (ultimoFoco) ultimoFoco.focus();
    };

    galeria.addEventListener("click", function (e) {
      var item = e.target.closest(".galeria__item");
      if (!item) return;
      var img = item.querySelector("img");
      if (!img || !img.getAttribute("src")) return; // marcadores sin foto real
      var pie = item.querySelector(".galeria__pie");
      abrir(img.currentSrc || img.src, img.alt, pie ? pie.textContent.trim() : "");
    });

    botonCerrar.addEventListener("click", cerrar);
    caja.addEventListener("click", function (e) {
      if (e.target === caja) cerrar();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && caja.classList.contains("is-abierto")) cerrar();
    });
  }

  /* ---------------------------------------------------------------------
     Formulario de reservación → correo prellenado
     El sitio es estático; la solicitud se envía por e-mail al hotel.
     --------------------------------------------------------------------- */
  var formulario = document.querySelector("[data-formulario-reserva]");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      // Red de seguridad: el navegador ya valida al enviar, pero si el envío
      // llega por otra vía no se debe abrir un correo con campos vacíos.
      if (typeof formulario.reportValidity === "function" && !formulario.reportValidity()) {
        return;
      }

      var datos = new FormData(formulario);
      var valor = function (clave) { return (datos.get(clave) || "").toString().trim(); };

      var lineas = [
        "Nombre: " + valor("nombre"),
        "Teléfono: " + valor("telefono"),
        "Correo: " + valor("correo"),
        "",
        "Llegada: " + valor("llegada"),
        "Salida: " + valor("salida"),
        "Habitación: " + valor("habitacion"),
        "Huéspedes: " + valor("huespedes"),
        "",
        "Comentarios:",
        valor("mensaje") || "—"
      ];

      var asunto = "Solicitud de reservación — " + (valor("nombre") || "Sitio web");
      var cuerpo = lineas.join("\n");

      window.location.href =
        "mailto:reservas@hotel-valleverde.com" +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

      var aviso = formulario.querySelector("[data-aviso]");
      if (aviso) {
        aviso.hidden = false;
        aviso.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Año actual en el pie
     --------------------------------------------------------------------- */
  var anio = document.querySelector("[data-anio]");
  if (anio) anio.textContent = new Date().getFullYear();
})();
