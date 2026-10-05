const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


// =========================
// MENU MOBILE
// =========================

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const open = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// =========================
// FORMULÁRIO WHATSAPP
// =========================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", event => {

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
      `Olá! Vi o portfólio da IG Sites e quero criar um site.\n\n` +
      `Meu nome: ${nome}\n` +
      `Meu negócio: ${negocio}`;


    window.open(
      `https://wa.me/5541995229213?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener"
    );

  });

}


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
