/* ==================================================
   IG SITES — PORTFÓLIO
================================================== */


/* ===============================
   MENU MOBILE
================================ */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const opened = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      opened ? "true" : "false"
    );

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ===============================
   ANO DO FOOTER
================================ */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


/* ===============================
   FORMULÁRIO DE CONTATO
================================ */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const nome =
        document
          .getElementById("clientName")
          .value
          .trim();

      const negocio =
        document
          .getElementById("businessName")
          .value
          .trim();


      const mensagem =
        `Olá! Vi o portfólio da IG Sites e quero criar um site.

Meu nome: ${nome}
Meu negócio: ${negocio}`;


      const whatsapp =
        "https://wa.me/5541995229213?text=" +
        encodeURIComponent(mensagem);


      window.open(
        whatsapp,
        "_blank"
      );

    }
  );

}


/* ===============================
   LINKS DOS PROJETOS
================================ */

/*
   Os links agora ficam diretamente
   no index.html.

   Não existe mais o aviso:
   "Nenhum link foi configurado".

   Basta trocar os textos:

   COLOQUE_AQUI_O_LINK_DA_PASTELARIA
   COLOQUE_AQUI_O_LINK_DA_SORVETERIA
   etc.

   pelo endereço real do Vercel.
*/


document
  .querySelectorAll(".project-link")
  .forEach(link => {

    link.addEventListener("click", function () {

      const url = this.getAttribute("href");

      if (
        !url ||
        url === "#" ||
        url.startsWith("COLOQUE_AQUI")
      ) {

        console.warn(
          "Este projeto ainda não possui um link configurado."
        );

      }

    });

  });
