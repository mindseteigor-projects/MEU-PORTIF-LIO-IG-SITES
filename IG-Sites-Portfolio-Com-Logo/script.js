/* =========================================================
   IG SITES — SCRIPT
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

  });


  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");

    });

  });

}


/* =========================================================
   FORMULÁRIO
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const business =
      document.getElementById("business").value.trim();


    if (!name || !business) {

      alert("Preencha seu nome e o nome da empresa.");

      return;

    }


    const message =
      `Olá! Tenho interesse em criar um site para minha empresa.

Meu nome: ${name}

Empresa: ${business}

Gostaria de saber mais sobre o trabalho da IG Sites.`;


    const whatsappUrl =
      "https://wa.me/5541995229213?text=" +
      encodeURIComponent(message);


    window.open(
      whatsappUrl,
      "_blank"
    );

  });

}


/* =========================================================
   ANIMAÇÃO SUAVE DOS PROJETOS
========================================================= */

const projectCards =
  document.querySelectorAll(".project-card");


if (projectCards.length) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  projectCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition =
      "opacity .6s ease, transform .6s ease, border-color .3s ease";


    observer.observe(card);

  });

}


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const year =
  document.querySelector(".footer p");

if (year) {

  year.textContent =
    `© ${new Date().getFullYear()} IG Sites — Desenvolvimento Web`;

}
