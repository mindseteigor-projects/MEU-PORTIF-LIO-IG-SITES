const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
    menuToggle.textContent = opened ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  }));
}

// Insira no href de cada botão Visualizar projeto o URL correspondente publicado na Vercel.
document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(`O link de "${link.dataset.project}" ainda não foi configurado. Edite o href deste projeto no index.html.`);
    }
  });
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const nome = document.getElementById("clientName").value.trim();
    const negocio = document.getElementById("businessName").value.trim();
    if (!nome || !negocio) return;

    const mensagem = `Olá! Vi o portfólio da IG Sites e quero um site como estes.\n\nMeu nome: ${nome}\nMeu negócio: ${negocio}`;
    const url = "https://wa.me/5541995229213?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
