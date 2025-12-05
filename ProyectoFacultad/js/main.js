/* =======================================================
   main.js – Funciones generales del sitio
   Proyecto: Facultad de Ciencias Sociales
======================================================= */

/* ----------------------------------------------
   1. MENSAJE DEL FORMULARIO DE CONTACTO
   (archivo: contacto.html)
   Mostramos el panel de confirmación y limpiamos el form
---------------------------------------------- */
function enviarFormulario() {
    const form = document.getElementById("formContacto");
    const msg = document.getElementById("msgConfirmacion");

    if (form && msg) {
        // Mostrar mensaje accesible
        msg.classList.remove("d-none");
        msg.setAttribute("role", "status");
        msg.setAttribute("aria-live", "polite");

        // Limpiar formulario
        form.reset();

        // Ocultar el mensaje después de unos segundos (opcional)
        setTimeout(() => {
            msg.classList.add("d-none");
        }, 6000); // 6 segundos
    } else {
        // Fallback
        alert("📩 Su mensaje ha sido enviado correctamente.\nPronto nos pondremos en contacto con usted.");
    }
}

/* ----------------------------------------------
   2. ANIMACIÓN SUAVE DE SCROLL (opcional)
---------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (!href || href === "#") return;
            const destino = document.querySelector(href);
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: "smooth" });
                destino.focus({ preventScroll: true });
            }
        });
    });
});

/* ----------------------------------------------
   3. DESTACAR LINK ACTIVO EN MENÚ (todas las páginas)
   Mejora: soporta index.html y ruta raíz "/"
---------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;

        // Normalizamos: si href es "" o "/" lo consideramos index.html
        const normalizedHref = (href === "" || href === "/") ? "index.html" : href.split("/").pop();

        if (normalizedHref === currentPath) {
            link.classList.add("active");
        }
    });
});

/* ----------------------------------------------
   4. ALERTA DE “Malla en Construcción” (plan-estudios.html)
---------------------------------------------- */
function mostrarMalla() {
    alert("📚 La malla curricular de esta escuela está en proceso de actualización.\nPronto estará disponible.");
}

/* ----------------------------------------------
   5. BOTÓN PARA SUBIR ARRIBA (opcional)
---------------------------------------------- */
(function() {
    const btnTop = document.createElement("button");
    btnTop.innerText = "↑";
    btnTop.id = "btnTop";
    btnTop.setAttribute("aria-label", "Ir arriba");
    // estilos mínimos; puedes modificar desde CSS si prefieres
    btnTop.style.position = "fixed";
    btnTop.style.bottom = "25px";
    btnTop.style.right = "25px";
    btnTop.style.padding = "10px 12px";
    btnTop.style.display = "none";
    btnTop.style.border = "none";
    btnTop.style.borderRadius = "8px";
    btnTop.style.background = "var(--color-primario)";
    btnTop.style.color = "white";
    btnTop.style.fontSize = "18px";
    btnTop.style.cursor = "pointer";
    btnTop.style.zIndex = "999";
    document.body.appendChild(btnTop);

    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // devolver foco por accesibilidad
        btnTop.blur();
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });
})();
