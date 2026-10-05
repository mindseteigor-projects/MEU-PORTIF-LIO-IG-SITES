/* =========================================================
   IG SITES — PORTFÓLIO
   ========================================================= */


/* ================= MENU MOBILE ================= */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.textContent =
      isOpen ? "✕" : "☰";

  });


  mainNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";

      });

    });

}


/* ================= ANO DO RODAPÉ ================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   LINKS DOS PROJETOS

   COLOQUE AQUI OS LINKS PUBLICADOS NO VERCEL.

   Exemplo:

   "Pastelaria Jacaré":
      "https://meusite.vercel.app"

   ========================================================= */

const projectLinks = {

  "Pastelaria Jacaré":
    "",

  "Sorveteria Coltelli":
    "",

  "Oficina Mecânica Sergio":
    "",

  "Mecânica Márcio Parahyba":
    "",

  "Mecânica CWV":
    "",

  "Feira Local":
    ""

};


/* ================= ABRIR PROJETOS ================= */

const projectButtons =
  document.querySelectorAll(
    ".project-link"
  );


projectButtons.forEach(button => {

  button.addEventListener("click", () => {

    const projectName =
      button.dataset.project;

    const projectUrl =
      projectLinks[projectName];


    /*
      Se ainda não tiver colocado
      o endereço, mostra um aviso.
    */

    if (!projectUrl) {

      alert(
        `O endereço do projeto "${projectName}" ainda não foi configurado no script.js.`
      );

      return;

    }


    window.open(
      projectUrl,
      "_blank",
      "noopener,noreferrer"
    );

  });

});


/* ================= FORMULÁRIO ================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        document
          .getElementById("clientName")
          .value
          .trim();


      const business =
        document
          .getElementById("businessName")
          .value
          .trim();


      if (!name || !business) {

        alert(
          "Preencha seu nome e o nome do seu negócio."
        );

        return;

      }


      const message =
        `Olá! Vi o portfólio da IG Sites e quero criar um site.\n\nMeu nome: ${name}\nMeu negócio: ${business}`;


      const whatsappUrl =
        `https://wa.me/5541995229213?text=${encodeURIComponent(message)}`;


      window.open(
        whatsappUrl,
        "_blank"
      );

    }
  );

}
