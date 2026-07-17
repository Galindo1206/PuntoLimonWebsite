const header = document.querySelector("#header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
const toast = document.querySelector("#toast");

function setHeaderState() { header.classList.toggle("is-scrolled", window.scrollY > 24); }
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

function closeMenu() {
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", () => {
  const willOpen = !navigation.classList.contains("is-open");
  navigation.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
});
navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && navigation.classList.contains("is-open")) { closeMenu(); menuToggle.focus(); } });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -58%", threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3800);
}

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
function fieldMessage(input) {
  if (input.validity.valueMissing) return "Este campo es obligatorio.";
  if (input.validity.typeMismatch) return "Ingresa un correo válido.";
  if (input.validity.tooShort) return `Escribe al menos ${input.minLength} caracteres.`;
  if (input.validity.patternMismatch) return "Ingresa un teléfono válido.";
  return "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  form.querySelectorAll("input, textarea").forEach((input) => {
    const message = fieldMessage(input);
    input.closest(".field").classList.toggle("is-invalid", Boolean(message));
    input.closest(".field").querySelector(".field-error").textContent = message;
    if (message) isValid = false;
  });
  if (!isValid) { status.textContent = "Revisa los campos marcados."; form.querySelector(":invalid")?.focus(); return; }
  const data = new FormData(form);
  const rawMessage = `Hola Octomar. Soy ${data.get("name")}.

${data.get("message")}

Correo: ${data.get("email")}
Teléfono: ${data.get("phone") || "No indicado"}`;
  const text = encodeURIComponent(rawMessage);
  status.textContent = "Tu mensaje está listo para WhatsApp.";
  showToast("Mensaje preparado. Se abrirá WhatsApp en una nueva pestaña.");
  window.open(`https://wa.me/51910471213?text=${text}`, "_blank", "noopener");
});

form.querySelectorAll("input, textarea").forEach((input) => input.addEventListener("input", () => {
  input.closest(".field").classList.remove("is-invalid");
  input.closest(".field").querySelector(".field-error").textContent = "";
}));

document.querySelector("#current-year").textContent = new Date().getFullYear();
